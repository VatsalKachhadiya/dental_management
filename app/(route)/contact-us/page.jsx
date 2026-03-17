"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const contactCards = [
  {
    title: "Address",
    value: "22 Dental Care Street, Smile City, India",
    icon: MapPin,
  },
  {
    title: "Phone",
    value: "+91 98765 43210",
    icon: Phone,
  },
  {
    title: "Email",
    value: "support@medcare.com",
    icon: Mail,
  },
  {
    title: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 8:00 PM",
    icon: Clock3,
  },
];

function ContactUsPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thanks! We received your message and will contact you shortly.");
    event.currentTarget.reset();
  };

  return (
    <div className="animate-in fade-in duration-500 px-4 py-10 sm:px-8 md:px-12 lg:px-16">
      <section className="rounded-2xl bg-slate-50 p-8 text-center md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Have a question about dental appointments, treatments, or support?
          Send us a message and our team will help you quickly.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contactCards.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <item.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Send Us A Message</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill the form below and our dental care team will get back to you soon.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <Input required placeholder="Full Name" />
            <Input required type="email" placeholder="Email Address" />
            <Input required placeholder="Subject (Dental Query)" />
            <Textarea
              required
              placeholder="Write your message..."
              className="min-h-[140px]"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="rounded-2xl border bg-slate-900 p-6 text-white md:p-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-2 text-sm text-slate-300">
            We provide a simple platform to book dental appointments with
            confidence. Our mission is to make smile care accessible with easy
            scheduling and reliable support.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-300">Our Promise</p>
              <p className="mt-1 text-lg font-semibold">
                Easy Dental Booking, Trusted Smile Care
              </p>
            </div>
            <div className="rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-300">Support Availability</p>
              <p className="mt-1 text-lg font-semibold">
                Mon - Sat, 9:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUsPage;
