import React, { useState, useEffect } from "react";
import "./UserProfilePage.css";

const UserProfilePage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulating API calls to fetch user data and bookings
    const fetchUserData = async () => {
      // In a real application, you would make an API call here
      const mockUser = {
        id: userId,
        name: 'Ganiyat Omotayo',
        email: 'omotayo@gmail.com',
        phone: '+2348123456543',
      };
      setUser(mockUser);
    };

    const fetchBookings = async () => {
      // In a real application, you would make an API call here
      const mockBookings = [
        { id: 1, hotelName: 'Luxury Ocean Resort', checkIn: '2023-08-15', checkOut: '2023-08-20' },
        { id: 2, hotelName: 'Mountain View Lodge', checkIn: '2023-09-10', checkOut: '2023-09-15' },
      ];
      setBookings(mockBookings);
    };

    fetchUserData();
    fetchBookings();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-page">
      <h1>User Profile</h1>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="user-bookings">
        <h2>Your Bookings</h2>
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.hotelName}</h3>
            <p>Check-in: {booking.checkIn}</p>
            <p>Check-out: {booking.checkOut}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfilePage;