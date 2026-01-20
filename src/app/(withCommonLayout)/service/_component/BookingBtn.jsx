"use client";

import React, { use } from "react";
import { BookingContext } from "@/context/BookingContextProvider";

function BookingBtn({ service }) {
    const { booking, addBooking, removeBooking } = use(BookingContext);
    console.log(booking);

    const isAlreadyBooked = booking?.find(
        (b) => b?._id === service?._id
    );

    return (
        <div>
            <button
                onClick={() =>
                    isAlreadyBooked
                        ? removeBooking(service._id)
                        : addBooking(service)
                }
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
                {isAlreadyBooked ? "Cancel Booking" : "Book Now"}
            </button>
        </div>
    );
}

export default BookingBtn;
