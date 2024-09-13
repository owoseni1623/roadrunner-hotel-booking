import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { EcomContext } from "../../../Context/EcomContext";
import "./CheckInPage.css";



const CheckInPage = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests, calculateTotalAmount } = useContext(EcomContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [checkInDate, setCheckInDate] = useState(checkIn || "");
  const [checkOutDate, setCheckOutDate] = useState(checkOut || "");
  const [guestCount, setGuestCount] = useState(guests || 1);
  const [selectedHotel, setSelectedHotel] = useState(location.state?.hotel || null);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateDaysDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    if (checkInDate && checkOutDate && selectedHotel) {
      const numberOfDays = calculateDaysDifference(checkInDate, checkOutDate);
      const pricePerNight = parseInt(selectedHotel.price.replace("₦", "").replace("/night", ""));
      return numberOfDays * pricePerNight;
    }
    return 0;
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      setCheckIn(checkInDate);
      setCheckOut(checkOutDate);
      setGuests(guestCount);
      const totalAmount = calculateTotal();
      setTotalAmount(totalAmount);
      calculateTotalAmount(totalAmount);
    }
  }, [checkInDate, checkOutDate, guestCount, setCheckIn, setCheckOut, setGuests, calculateTotalAmount, selectedHotel]);

  const handleNext = () => {
    if (checkInDate && checkOutDate && guestCount > 0) {
      navigate("/payment");
    } else {
      alert("Please select check-in, check-out dates and specify number of guests.");
    }
  };

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleGuestChange = (e) => {
    setGuestCount(e.target.value);
  };

  return (
    <div className="check-in-page23">
      <h1>Select Your Stay Dates and Number of Guests</h1>
      {selectedHotel && (
        <div className="hotel-details23">
          <h2>{selectedHotel.name}</h2>
          <img src={selectedHotel.image} alt={selectedHotel.name} className="hotel-image23" />
          <p>{selectedHotel.description}</p>
          <p className="hotel-price23">{selectedHotel.price} per night</p>
        </div>
      )}
      <div className="date-selection23">
        <label htmlFor="checkInDate">Check-In Date:</label>
        <input
          type="date"
          id="checkInDate"
          name="checkInDate"
          value={checkInDate}
          onChange={handleCheckInChange}
        />
      </div>
      <div className="date-selection23">
        <label htmlFor="checkOutDate">Check-Out Date:</label>
        <input
          type="date"
          id="checkOutDate"
          name="checkOutDate"
          value={checkOutDate}
          onChange={handleCheckOutChange}
        />
      </div>
      <div className="guest-selection23">
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guestCount}
          onChange={handleGuestChange}
          min="1"
          // max="3"
        />
      </div>
      <p className="total-amount">Total Amount: ₦{totalAmount}</p>
      <button className="next-button23" onClick={handleNext}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CheckInPage;