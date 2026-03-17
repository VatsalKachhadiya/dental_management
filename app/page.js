"use client"
import Hero from "./_components/Hero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { dummyExperts } from "./_data/dummyExperts";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
        {/* Hero Section  */}
        <Hero/>

        <section className="px-5 py-10">
          <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-6 md:p-10">
            <h2 className="text-center text-4xl font-bold text-blue-800">WHY US</h2>
            <p className="mx-auto mt-4 max-w-4xl text-center text-lg text-slate-700">
              We provide advanced dental care with experienced specialists, modern
              equipment, and high treatment success rates for every smile.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="space-y-5">
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-800">Experienced Dentists</h3>
                  <p className="mt-3 text-gray-600">
                    Our dental team is highly trained and continuously updates
                    treatment skills.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-800">GenNext Equipment</h3>
                  <p className="mt-3 text-gray-600">
                    We use modern technology to deliver safe, precise, and
                    comfortable dental care.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="rounded-full border-4 border-white p-2 shadow-lg">
                  <Image
                    src="/doctors.jpg"
                    alt="Dental care dummy image"
                    width={500}
                    height={500}
                    className="h-[320px] w-[320px] rounded-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-800">Sterilization</h3>
                  <p className="mt-3 text-gray-600">
                    International hygiene and sterilization standards are followed
                    at every step.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-800">High Success Rate</h3>
                  <p className="mt-3 text-gray-600">
                    We have completed thousands of successful implant and
                    cosmetic dental cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Meet Our Experts</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-gray-500">
              Our experienced dental specialists provide trusted care for implants, smile design,
              braces, and routine checkups.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {dummyExperts.map((item) => (
                <div
                  key={item.name}
                  className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-900"
                >
                  <div className="relative">
                    <Image
                      src="/doctors.jpg"
                      alt={item.name}
                      width={320}
                      height={280}
                      className={`h-64 w-full object-cover ${item.imgPos}`}
                    />
                    <span className="absolute bottom-3 right-3 rounded-lg bg-red-500/90 px-3 py-2 text-sm font-semibold text-white">
                      {item.exp}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.role}</p>
                    <Link
                      href={`/experts/${item.slug}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
