import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./servicesData";

function ServicesSection() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold tracking-wide">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="mt-2 text-center text-lg text-gray-500">
          Simple and reliable dental booking for checkups and smile treatments.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
