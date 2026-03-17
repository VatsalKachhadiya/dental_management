import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt=""
          src="/doctors.jpg"
          width={800}
          height={800}
          className="absolute inset-0 h-full
          rounded-3xl 
          w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-4xl font-bold sm:text-4xl animate-in slide-in-from-left-6 fade-in duration-700">
          <span className="block">Find & Book</span>
          <span className="type-erase mt-1 inline-block text-blue-800 dark:text-blue-300">
            Appointment with your Fav Doctor
          </span>
        </h2>

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <Button className="mt-10">Explore Now</Button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
