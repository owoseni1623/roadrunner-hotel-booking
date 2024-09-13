import React, { useContext } from "react";
import { EcomContext } from "../../Context/EcomContext";
import "./BookingConfirmPage.css";


const BookingConfirmationPage = () => {
    const { destination, checkIn, checkOut, guests } = useContext(EcomContext);
  
    return (
      <div className="booking-confirmation-page23">
        <div className="confirmation-card23">
          <h1 className="confirmation-title23">Booking Confirmed</h1>
          <div className="confirmation-icon23">✓</div>
          <div className="confirmation-details23">
            <div className="detail-item23">
              <span className="detail-label23">Destination</span>
              <span className="detail-value23">{destination}</span>
            </div>
            <div className="detail-item23">
              <span className="detail-label23">Check-In</span>
              <span className="detail-value23">{checkIn}</span>
            </div>
            <div className="detail-item23">
              <span className="detail-label23">Check-Out</span>
              <span className="detail-value23">{checkOut}</span>
            </div>
            <div className="detail-item23">
              <span className="detail-label23">Guests</span>
              <span className="detail-value23">{guests}</span>
            </div>
          </div>
          <div className="confirmation-message23">
            <p>Thank you for your booking! We're excited to welcome you.</p>
            <p>A confirmation email has been sent to your registered email address.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookingConfirmationPage;
