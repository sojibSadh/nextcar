"use client"

import Link from 'next/link'
import React, { use } from 'react'
import logo from '@/assets/img/logo2.png'
import Image from 'next/image'
import Container from './Container'
import { UserContext } from '@/context/UserContextProvider'
import { signIn, useSession } from 'next-auth/react'

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
                        user ?
                            <Link href={"/dashboard"}> <button> Dashboard </button> </Link> :
                            <button onClick={() => signIn()}>
                                Logins
                            </button>
                    }
                </div>
            </Container>
        </div>

    )
}

export default Navbar
