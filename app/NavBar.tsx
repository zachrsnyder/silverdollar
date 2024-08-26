import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-white p-4 shadow-xl z-10 fixed top-0 left-0 w-full">
        <div className="container mx-auto flex items-center">

        <Link href="#" className="text-black text-xl font-bold pr-5">Silver Dollar</Link>
        

        <div className="flex space-x-4 justify-between">
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