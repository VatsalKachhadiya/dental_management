"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { CalendarIcon, Clock3 } from "lucide-react";
import { MdVerified } from "react-icons/md";
import { cn } from "@/lib/utils";

const formatDate = (date) =>
  date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatTime = (hour24, minute) => {
  const hour12 = hour24 % 12 || 12;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const min = minute.toString().padStart(2, "0");
  return `${hour12}:${min} ${suffix}`;
};

const generateTimeSlots = (startHour = 9, endHour = 18) => {
  const slots = [];
  for (let hour = startHour; hour < endHour; hour++) {
    slots.push(formatTime(hour, 0));
    slots.push(formatTime(hour, 30));
  }
  return slots;
};

function BookAppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots] = useState(generateTimeSlots(9, 20));
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    note: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "phoneNumber") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 15);
      setFormData((prev) => ({ ...prev, phoneNumber: digitsOnly }));
      return;
    }
    if (name === "countryCode") {
      // Keep country code in the format +<digits>, e.g. +91
      const normalized = `+${value.replace(/\D/g, "").slice(0, 4)}`;
      setFormData((prev) => ({ ...prev, countryCode: normalized }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please select appointment date and time.");
      return;
    }
    if (!formData.phoneNumber) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setIsSubmitting(true);

    const localBooking = {
      id: Date.now(),
      userName: formData.userName,
      email: formData.email || "",
      phone: `${formData.countryCode} ${formData.phoneNumber}`,
      date: selectedDate.toISOString(),
      time: selectedTime,
      note: formData.note || "",
    };

    const previousBookings = JSON.parse(localStorage.getItem("localBookings") || "[]");
    localStorage.setItem("localBookings", JSON.stringify([localBooking, ...previousBookings]));

    setShowSuccessPopup(true);
    setFormData({
      userName: "",
      email: "",
      countryCode: "+91",
      phoneNumber: "",
      note: "",
    });
    setSelectedDate(undefined);
    setSelectedTime("");
    setIsSubmitting(false);
  };

  return (
    <div className="animate-in fade-in duration-500 px-4 py-10 sm:px-8 md:px-12 lg:px-16">
      <section className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 shadow-sm md:p-8">
        <h1 className="text-2xl font-bold md:text-3xl">
          Book Your Dental Appointment
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Schedule checkup, cleaning, braces consultation, or other dental care.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            required
            name="userName"
            placeholder="Full Name"
            value={formData.userName}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address (Optional)"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              required
              name="countryCode"
              placeholder="+91"
              value={formData.countryCode}
              onChange={handleChange}
              className="md:col-span-1"
            />
            <Input
              required
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              inputMode="numeric"
              pattern="[0-9]{6,15}"
              title="Enter only numbers"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="md:col-span-2"
            />
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-3 text-sm font-medium text-gray-700">
              Select Date
            </h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? formatDate(selectedDate) : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock3 className="h-4 w-4" />
              Select 30-minute slot
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={cn(
                    "rounded-md border px-3 py-2 text-sm transition-all",
                    selectedTime === slot
                      ? "border-primary bg-primary text-white"
                      : "hover:border-primary/50 hover:bg-slate-50"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <Textarea
            name="note"
            placeholder="Description / Notes (Optional)"
            className="min-h-[120px]"
            value={formData.note}
            onChange={handleChange}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </Button>
        </form>
      </section>

      <AlertDialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="relative mx-auto mb-2 flex h-16 w-16 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-200 opacity-60" />
              <span className="absolute inline-flex h-12 w-12 rounded-full bg-green-100" />
              <MdVerified className="relative h-10 w-10 text-green-600 animate-pulse" />
            </div>
            <AlertDialogTitle>Booking Successful</AlertDialogTitle>
            <AlertDialogDescription>
              Booking successfully done. If any slot-related changes happen, we
              will contact you.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default BookAppointmentPage;
