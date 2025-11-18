import React, { createContext, useState } from 'react'

export const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([])

  const addBooking = booking => setBookings(prev => [...prev, booking])

  return (
    <BookingContext.Provider value={{bookings, addBooking}}>
      {children}
    </BookingContext.Provider>
  )
}
