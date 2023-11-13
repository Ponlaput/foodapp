"use client"
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

const user = false;

  return (
    <div className="h-12 text-blue-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
        {/* LEFT LINKS */}
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        {/* LOGO */}
        <div className="text-xl md:font-bold flex-1 text-center">
            <Link href="/">Massimo</Link>
        </div>
        {/* MOBILE MENU */}
        <div className="md:hidden">
            <Menu/>
        </div>
        {/* RIGHT LINKS */}
        <div className='hidden md:flex gap-4 flex-1 justify-end'>
            <div className="md:absolute flex items-center top-3 r-2 lg:static gap-2 cursor-pointer bg-orange-300 px-2 rounded-lg">
                <Image src="/phone.png" alt="" width={20} height={20}/>
                <span>123 456 78</span>
            </div>
           {!user ? (<Link href="/">Login</Link>) :
            (<Link href="/menu">Orders</Link>)}
            <CartIcon/>
        </div>
    </div>
  )
}

export default Navbar