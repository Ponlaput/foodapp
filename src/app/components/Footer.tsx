"use client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl-px-40 text-red-500 flex items-center justify-between'>
      <Link href='/' className='font-bold text-xl'>MASSIMO</Link>
      <p>BY PONLAPUT PETLORM</p>
    </div>
  )
}

export default Footer