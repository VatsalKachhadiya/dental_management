"use client"
import { Button } from '@/components/ui/button'
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useTheme } from 'next-themes'
  

function Header() {
    const Menu=[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Contact Us',
            path:'/contact-us'
        },
        {
            id:3,
            name:'About Us',
            path:'/about-us'
        },
    ]

    const {user} = useKindeBrowserClient();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

  const toggleTheme = () => {
    const body = document.body;
    body.classList.add("theme-swap");
    setTheme(theme === "dark" ? "light" : "dark");
    window.setTimeout(() => {
      body.classList.remove("theme-swap");
    }, 950);
  };

  return (
    <div className='flex items-center justify-between p-4 shadow-sm bg-background'>
        <div className='flex items-center'>
            <Image src='/logo.svg' alt='logo'
            width={64}
            height={64}
            className='h-16 w-16 rounded-md object-cover'
            />
        </div>

       <div className='flex items-center gap-6'>
        <ul className='md:flex gap-8 hidden'>
            {Menu.map((item,index)=>(
                <Link href={item.path} key={index}>
                <li className='hover:text-primary
                cursor-pointer hover:scale-105
                transition-all ease-in-out'>{item.name}</li>
                </Link>
            ))}
        </ul>

        {user?
        <Popover>
          <PopoverTrigger>
          {user?.picture? 
          <Image src={user?.picture} alt='profile-image'
          width={40}
          height={40}
          className='rounded-full' />:
          <Image src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt='profile-image'
          width={40}
          height={40}
          className='rounded-full' />}
          </PopoverTrigger>
          <PopoverContent className="w-44">
              <ul className='flex  flex-col gap-2'>
              <Link href={'/my-booking'} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md dark:hover:bg-slate-800'>My Booking</Link>
                  <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md dark:hover:bg-slate-800'>
                  <LogoutLink> Logout </LogoutLink></li>
              </ul>
          </PopoverContent>
          </Popover>
        :
          <Link href={'/book-appointment'}>
            <Button>Book Your Appointment</Button>
          </Link>
        } 

        {mounted && (
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="ml-2"
          >
            {theme === "dark" ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
          </Button>
        )}
       </div>
        
    </div>
  )
}

export default Header
