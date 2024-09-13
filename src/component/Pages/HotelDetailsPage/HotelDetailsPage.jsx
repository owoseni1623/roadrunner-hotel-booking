import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingPage from "../BookingPage/BookingPage";
import "./HotelDetailsPage.css";

export const hotels = [
  {
    id: 1,
    name: "Hotel Sunshine",
    pricePerNight: "₦120",
    thumbnail: "/image/hotel01.jpg",
    gallery: ["/image/room.webp", "/image/room1.jpg"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Swimming Pool", "Gym"],
    location: "123 Sunshine St, Beach City",
  },
  {
    id: 2,
    name: "Hotel Bliss",
    pricePerNight: "₦150",
    thumbnail: "/image/hotel12.jpg",
    gallery: ["/image/room4.jpg", "/image/room3.jpg"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Breakfast Included", "Spa"],
    location: "456 Bliss Blvd, Hill Town",
  },
  {
    id: 3,
    name: "Hotel Paradise",
    pricePerNight: "₦200",
    thumbnail: "/image/hotel13.jpg",
    gallery: ["/image/room5.jpg", "/image/room6.jpg"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Breakfast Included", "Pool"],
    location: "789 Paradise Ave, Ocean City",
  },
  {
    id: 4,
    name: "Hotel Royal",
    pricePerNight: "₦180",
    thumbnail: "/image/hotel14.jpg",
    gallery: ["/image/room7.webp", "/image/room8.webp"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Gym", "Spa"],
    location: "123 Royal Rd, Capital City",
  },
  {
    id: 5,
    name: "Hotel Elite",
    pricePerNight: "₦220",
    thumbnail: "/image/hotel15.jpg",
    gallery: ["/image/room8.webp", "/image/room10.jpg"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Swimming Pool", "Breakfast Included"],
    location: "456 Elite St, Mountain Town",
  },
  {
    id: 6,
    name: "Hotel Grand",
    pricePerNight: "₦250",
    thumbnail: "/image/hotel16.webp",
    gallery: ["/image/room11.avif", "/image/room12.webp"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Gym", "Spa", "Pool"],
    location: "789 Grand Ave, Desert City",
  },
  {
    id: 7,
    name: "Hotel Comfort",
    pricePerNight: "₦100",
    thumbnail: "/image/hotel17.jpg",
    gallery: ["/image/room13.webp", "/image/room14.jpg"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Breakfast Included"],
    location: "123 Comfort Rd, Suburban Town",
  },
  {
    id: 8,
    name: "Hotel Luxury",
    pricePerNight: "₦300",
    thumbnail: "/image/hotel18.jpeg",
    gallery: ["/image/room15.webp", "/image/room16.jpg"],
    roomTypes: ["Single", "Double", "Suite"],
    amenities: ["Free WiFi", "Swimming Pool", "Gym", "Spa"],
    location: "456 Luxury Blvd, High-End City",
  },
  {
    id: 9,
    name: "Hotel Budget",
    pricePerNight: "₦80",
    thumbnail: "/image/hotel19.jpg",
    gallery: ["/image/room17.jpg", "/image/room18.jpg"],
    roomTypes: ["Single", "Double"],
    amenities: ["Free WiFi"],
    location: "789 Budget St, Economy Town",
  },
];

const HotelDetailsPage = () => {
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id, 10));
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  if (!hotel) {
    return <h2>Hotel not found</h2>;
  }

  return (
    <div className="hotel-details-page">
      <h1>{hotel.name}</h1>
      <div className="hotel-details-content">
        <div className="hotel-info">
          <img src={hotel.thumbnail} alt={hotel.name} className="hotel-thumbnail" />
          <p className="hotel-price">Price per night: {hotel.pricePerNight}</p>
          <h2>Amenities</h2>
          <ul>
            {hotel.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <h2>Room Types</h2>
          <ul>
            {hotel.roomTypes.map((roomType, index) => (
              <li key={index}>{roomType}</li>
            ))}
          </ul>
          <h2>Location</h2>
          <p>{hotel.location}</p>
        </div>
        <div className="hotel-gallery">
          <h2>Gallery</h2>
          <div className="gallery-images">
            {hotel.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                onClick={() => openModal(image)}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Modal" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetailsPage;