import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HotelListings.css";

const hotels = [
  {
    id: 1,
    name: "Hotel Sunshine",
    pricePerNight: "₦120",
    thumbnail: "/image/hotel01.jpg",
  },
  {
    id: 2,
    name: "Ocean View Resort",
    pricePerNight: "₦180",
    thumbnail: "/image/hotel12.jpg",
  },
  {
    id: 3,
    name: "Mountain Lodge",
    pricePerNight: "₦150",
    thumbnail: "/image/hotel13.jpg",
  },
  {
    id: 4,
    name: "City Central Hotel",
    pricePerNight: "₦110",
    thumbnail: "/image/hotel14.jpg",
  },
  {
    id: 5,
    name: "Desert Oasis",
    pricePerNight: "₦200",
    thumbnail: "/image/hotel15.jpg",
  },
  {
    id: 6,
    name: "Lakeview Hotel",
    pricePerNight: "₦170",
    thumbnail: "/image/hotel16.webp",
  },
  {
    id: 7,
    name: "Forest Retreat",
    pricePerNight: "₦130",
    thumbnail: "/image/hotel17.jpg",
  },
  {
    id: 8,
    name: "Seaside Escape",
    pricePerNight: "₦190",
    thumbnail: "/image/hotel18.jpeg",
  },
  {
    id: 9,
    name: "Mountain Peak Inn",
    pricePerNight: "₦160",
    thumbnail: "/image/hotel19.jpg",
  },
];

const HotelListings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHotels = hotels.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hotel-listings00">
      <h1>Hotel Listings</h1>
      <input
        type="text"
        placeholder="Search hotels..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="hotels-container00">
        {filteredHotels.map(hotel => (
          <div key={hotel.id} className="hotel-card00">
            <img src={hotel.thumbnail} alt={hotel.name} className="hotel-thumbnail00" />
            <h2>{hotel.name}</h2>
            <p>{hotel.pricePerNight} per night</p>
            <Link to={`/hotel/${hotel.id}`} className="details-link00">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListings;
