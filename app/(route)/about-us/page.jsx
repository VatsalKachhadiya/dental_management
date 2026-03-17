import React from "react";
import Image from "next/image";

function AboutUsPage() {
  return (
    <div className="animate-in fade-in duration-500 px-4 py-10 sm:px-8 md:px-12 lg:px-16">
      <section className="rounded-2xl bg-slate-50 p-8 md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">
          About <span className="text-primary">Us</span>
        </h1>
        <p className="mt-4 max-w-3xl text-gray-600">
          We are focused on making dental appointment booking simple, fast, and
          reliable. Our platform helps patients connect with dentists for
          checkups, cleaning, braces, and oral care without confusion or delay.
        </p>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
          <Image
            src="/doctors.jpg"
            alt="Dental checkup"
            width={500}
            height={320}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Routine Dental Checkups</h3>
            <p className="mt-1 text-sm text-gray-600">
              Preventive care to keep teeth and gums healthy year-round.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
          <Image
            src="/doctors.jpg"
            alt="Teeth cleaning"
            width={500}
            height={320}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Professional Cleaning</h3>
            <p className="mt-1 text-sm text-gray-600">
              Stain and plaque removal for a cleaner, brighter smile.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
          <Image
            src="/doctors.jpg"
            alt="Braces consultation"
            width={500}
            height={320}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Braces & Smile Planning</h3>
            <p className="mt-1 text-sm text-gray-600">
              Get expert guidance for alignment and cosmetic smile goals.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border bg-white p-5 shadow-sm dark:bg-slate-900 md:grid-cols-2 md:p-6">
        <div>
          <h2 className="text-2xl font-bold">Our Clinic Location</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            Visit our dental center for checkups, implants, aligners, and smile
            correction. We are located in Ahmedabad, Gujarat, with easy access and
            patient-friendly support.
          </p>
          <div className="mt-4 rounded-lg bg-slate-100 p-4 text-sm dark:bg-slate-800">
            <p className="font-semibold">Smilex Dental Implant & Aligner Centers, Gujarat</p>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              C.G. Road, Navrangpura, Ahmedabad, Gujarat 380009
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title="About Us Clinic Map"
            src="https://www.google.com/maps?q=Smilex+Dental+Implant+%26+Aligner+Centers,+Ahmedabad,+Gujarat&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
