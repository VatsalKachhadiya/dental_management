import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { name: "Twitter", href: "https://x.com/", icon: FaTwitter },
  { name: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
  { name: "YouTube", href: "https://www.youtube.com/", icon: FaYoutube },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
];

function Footer() {
  return (
    <footer className="mt-12 border-t bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-md object-cover brightness-0 invert"
            />
            <p className="mt-4 text-sm text-slate-300">
              Dental care made simple. Book checkups, cleaning, and smile consultations in minutes.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="rounded-full bg-slate-800 p-2.5 text-slate-200 transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/book-appointment" className="hover:text-white">Book Appointment</Link>
              <Link href="/contact-us" className="hover:text-white">Contact Us</Link>
              <Link href="/about-us" className="hover:text-white">About Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Dental Gallery</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Image
                src="/doctors.jpg"
                alt="Dental clinic treatment"
                width={260}
                height={170}
                className="h-24 w-full rounded-lg object-cover object-[center_30%]"
              />
              <Image
                src="/doctors.jpg"
                alt="Dental care room"
                width={260}
                height={170}
                className="h-24 w-full rounded-lg object-cover object-[center_60%]"
              />
              <Image
                src="/doctors.jpg"
                alt="Modern dental clinic"
                width={260}
                height={170}
                className="h-24 w-full rounded-lg object-cover object-[left_center]"
              />
              <Image
                src="/doctors.jpg"
                alt="Smile checkup closeup"
                width={260}
                height={170}
                className="h-24 w-full rounded-lg object-cover object-[right_center]"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Find Us On Map</h3>
          <div className="mt-3 overflow-hidden rounded-xl border border-slate-800">
            <iframe
              title="Dental Clinic Location"
              src="https://www.google.com/maps?q=Smilex+Dental+Implant+%26+Aligner+Centers,+Ahmedabad,+Gujarat&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Dental Website. Built by Vatsal Kachhadiya.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
