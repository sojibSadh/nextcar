"use client"

import Link from 'next/link'
import React, { use } from 'react'
import logo from '@/assets/img/logo2.png'
import Image from 'next/image'
import Container from './Container'
import { UserContext } from '@/context/UserContextProvider'
import { signIn, signOut, useSession } from 'next-auth/react'

function Navbar() {
    const { user } = use(UserContext);
    const { data: session, status } = useSession()
    console.log(session, status);

    return (
        <div className='bg-purple-400'>
            <Container>
                <div className='flex justify-between items-center p-3 bg-purple-400 text-black text-2xl font-bold'>
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            className='rounded-full'
                            alt="Logo"
                            width={120}
                            height={120}
                            priority
                        /></Link>
                    <div>
                        <ul className='font-semibold text-[20px]'>
                            <Link href={"/"}> Home </Link>
                            <Link href={"/service"}> Service </Link>
                            <Link href={"/reviews"}> Reviews </Link>
                            <Link href={"/about"}> About us </Link>
                        </ul>
                    </div>
                    {
                        status === "loading" ? (
                            <button>  Loading... </button>
                        ) : session?.user?.email ? (
                            <div>
                                <button onClick={() => signOut({ callbackUrl: '/' })} className='bg-red-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-600 transition'>
                                    Sign Out
                                </button>
                                <Link href={"/dashboard"}> <button> Dashboard </button> </Link>
                            </div>

                        ) :
                            (
                                <div>
                                    <button onClick={() => signIn()} className='bg-green-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-600 transition'>
                                        Sign In
                                    </button>
                                    <Link href={"/signup"}> <button className='ml-2 bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition'> Register </button> </Link>
                                </div>


                            )


                    }
                </div>
            </Container>
        </div>

    )
}

export default Navbar
