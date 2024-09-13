import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EcomContext } from "../../../Context/EcomContext";
import "./CheckOutPage.css";

const CheckOutPage = () => {
    const { checkOut, setCheckOut } = useContext(EcomContext);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [checkOutDate, setCheckOutDate] = useState('');
  
    const handleNext = () => {
      if (checkOutDate) {
        setCheckOut(checkOutDate);
        navigate('/booking-confirmation');
      } else {
        alert('Please select a check-out date.');
      }
    };
  
    const handleDateChange = (e) => {
      setCheckOutDate(e.target.value);
    };
  
    return (
      <div className="check-out-page">
        <h1>Check-Out Date Selection</h1>
        <div className="date-selection">
          <label htmlFor="checkOutDate">Select Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={checkOutDate}
            onChange={handleDateChange}
          />
        </div>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    );
};

export default CheckOutPage;
