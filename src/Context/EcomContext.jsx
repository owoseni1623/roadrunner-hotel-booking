import React, { createContext, useState } from "react";

export const EcomContext = createContext();

export const EcomProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [bookingId, setBookingId] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [userEmail, setUserEmail] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);  // Added this line

  // Function to calculate total amount based on booking details
  const calculateTotalAmount = () => {
    if (selectedHotel && checkIn && checkOut) {
      const basePrice = parseInt(selectedHotel.price.replace(/[^\d]/g, ''));
      const numberOfNights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
      const amount = basePrice * numberOfNights * guests;
      setTotalAmount(amount);
    }
  };

  // Function to generate a unique booking ID
  const generateBookingId = () => {
    const id = 'BK' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    setBookingId(id);
  };

  return (
    <EcomContext.Provider
      value={{
        destination,
        setDestination,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        guests,
        setGuests,
        totalAmount,
        setTotalAmount,
        calculateTotalAmount,
        bookingId,
        setBookingId,
        generateBookingId,
        paymentStatus,
        setPaymentStatus,
        userEmail,
        setUserEmail,
        selectedHotel,
        setSelectedHotel,
        paymentInfo,
        setPaymentInfo,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};