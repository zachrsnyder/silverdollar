'use client'
import Link from 'next/link'
import React, { DOMElement } from 'react'
import { useState, useEffect } from 'react'

const NavBar = () => {
  
  const [scrollThreshold, setScrollThreshold] = useState<boolean>(true)
  const scrollLine = 20; //this is where I want the logo to transform

  
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if(y >= scrollLine && scrollThreshold){
        setScrollThreshold(!scrollThreshold);
      }else if(y < scrollLine && !scrollThreshold){
        setScrollThreshold(!scrollThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  
  return (
  <nav className={`bg-lime-950 fixed w-full z-10 h-20 transform transition-transform duration-30 ease-in-out ${scrollThreshold ? '' : '-translate-y-6'}`}>  
    <div className="bg-white p-4 shadow-xl flex absolute bottom-0 w-full h-14 justify-center">
        <div id="logo" 
        className={`absolute flex transform transition-transform duration-30 ease-in-out bg-white w-36 left-8 -top-6 h-20 justify-center items-center ${scrollThreshold ? '' : '-translate-x-14 translate-y-3 scale-50'}`}>
          <Link href="#" className="text-black text-xl font-bold ">Silver Dollar</Link>
        </div>

        <div className="flex flex-1 space-x-4 pl-48 pr-96">
            <Link href="/" className="text-black hover:text-white pr-11">Home</Link>
            <Link href="/menu" className="text-black hover:text-white pr-11">Menu</Link>
            <Link href="/contact" className="text-black hover:text-white pr-11">Contact</Link>
            <Link href="/employment" className="text-black hover:text-white pr-11">Employment</Link>
        </div>
    </div>
  </nav>
  )
}

export default NavBar