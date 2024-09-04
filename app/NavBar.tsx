'use client'
import Link from 'next/link'
import React, { DOMElement } from 'react'
import { useState, useEffect } from 'react'

const NavBar = () => {
  
  const [scrollThreshold, setScrollThreshold] = useState<boolean>(true)
  const scrollLine = 20; //this is where I want the logo to transform



  //this use effect mounts to the component when it loads and is used to handle the scroll behavior of the logo.
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
    }});

  
  return (
  <nav className={`bg-secondary fixed w-full z-10 h-20 transform transition-transform duration-30 ease-in-out ${scrollThreshold ? '' : '-translate-y-6'}`}>  
    <div className="bg-primary p-4 shadow-[0px_5px_10px_rgba(0,0,0,.5)] flex absolute bottom-0 w-full h-14 justify-center">
        <div id="logo" 
        className={`absolute flex transform transition-transform duration-30 ease-in-out bg-white w-36 left-8 -top-6 h-20 justify-center items-center ${scrollThreshold ? '' : '-translate-x-14 translate-y-3 scale-50'}`}>
          <Link href="#" className="text-black text-xl font-bold ">Silver Dollar</Link>
        </div>

        <div className="flex flex-1 justify-center space-x-14">
            <Link href="/" className="text-black hover:text-white">Home</Link>
            <Link href="/menu" className="text-black hover:text-white">Menu</Link>
            <Link href="/contact" className="text-black hover:text-white">Contact</Link>
            <Link href="/employment" className="text-black hover:text-white">Employment</Link>
        </div>
    </div>
  </nav>
  )
}

export default NavBar