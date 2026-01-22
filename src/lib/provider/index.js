"use client";

import BookingContextProvider from '@/context/BookingContextProvider'
import UserContextProvider from '@/context/UserContextProvider'
import { SessionProvider } from "next-auth/react"

import React from 'react'
function Providers({ children }) {
    return (
        <SessionProvider>
            <UserContextProvider>
                <BookingContextProvider>
                    {children}
                </BookingContextProvider>
            </UserContextProvider>
        </SessionProvider>
    )
}

export default Providers
