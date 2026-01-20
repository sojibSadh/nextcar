"use client";

import React, { createContext, useState } from "react";

export const BookingContext = createContext(null);

function BookingContextProvider({ children }) {
  const [booking, setBookings] = useState([]);

  const addBooking = (singleBooking) => {
    setBookings((prev) => [...prev, singleBooking]);
  };

  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b._id !== id));
  };

  const value = {
    booking,
    setBookings,
    addBooking,
    removeBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export default BookingContextProvider;
