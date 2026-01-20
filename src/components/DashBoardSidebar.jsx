import Link from 'next/link'
import React from 'react'
import logo from '@/assets/img/logo2.png'
import Image from 'next/image'

function DashBoardSidebar() {
  return (
    <div className='w-[300px] h-screen bg-purple-400  p-3 text-white'>
      <h2 className='text-3xl'> Car Cleanify</h2>
      <div>
       <Link href={"/"}>
       <Image
          src={logo}
          className='rounded-full'
          alt="Logo"
          width={120}
          height={120}
          priority
        />
       </Link>
      </div>
      <div className='flex flex-col gap-3 mt-5'>
        <Link href={"/dashboard/profile"}> Profile </Link>
        <Link href={"/dashboard/my-booking"}> My Booking </Link>
      </div>
    </div>
  )
}

export default DashBoardSidebar
