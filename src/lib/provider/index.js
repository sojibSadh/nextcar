import BookingContextProvider from '@/context/BookingContextProvider'
import UserContextProvider from '@/context/UserContextProvider'
import React from 'react'

function Providers({ children }) {
    return (
        <UserContextProvider>
            <BookingContextProvider>
                {children}
            </BookingContextProvider>
        </UserContextProvider>
    )
}

export default Providers
