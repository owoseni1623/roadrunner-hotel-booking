import { useState, useContext } from "react";
import { useNavigate, Link} from "react-router-dom"
import { EcomContext } from "../../Context/EcomContext";
import "./HomePage.css";


const HomePage = () => {
    const { destination, setDestination, checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests } = useContext(EcomContext);
    const [selectedHotel, setSelectedHotel] = useState(null); // State for selected hotel
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
  
    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
    };
  
    const hotels = [
      {
        id: 1,
        name: "Luxury Ocean Resort",
        image: "/image/hotel7.jpg",
        description: "Experience ultimate relaxation at our beachfront paradise. Enjoy stunning ocean views, world-class amenities, and impeccable service. Our Luxury Ocean Resort offers a perfect blend of comfort and elegance, ensuring an unforgettable stay for all our guests.",
        price: "₦299/night"
      },
      {
        id: 2,
        name: "Mountain View Lodge",
        image: "/image/hotel2.webp",
        description: "Nestled in the heart of the mountains, our lodge offers breathtaking views, cozy accommodations, and outdoor adventures for all seasons. Immerse yourself in nature while enjoying modern comforts and warm hospitality at our Mountain View Lodge.",
        price: "₦199/night"
      },
      {
        id: 3,
        name: "Urban Chic Hotel",
        image: "/image/hotel3.jpg",
        description: "Located in the city center, our modern hotel combines style and comfort. Perfect for business travelers and urban explorers alike, the Urban Chic Hotel offers sleek design, state-of-the-art amenities, and easy access to the city's top attractions.",
        price: "₦179/night"
      },
      {
        id: 4,
        name: "Riverside Retreat",
        image: "/image/hotel4.jpg",
        description: "Find peace and tranquility at our riverside retreat. Enjoy fishing, kayaking, and nature walks right at your doorstep. Our Riverside Retreat offers a perfect escape from the hustle and bustle of everyday life, allowing you to reconnect with nature and yourself.",
        price: "₦159/night"
      },
      {
        id: 5,
        name: "Historic Grand Hotel",
        image: "/image/hotel5.jpg",
        description: "Step back in time at our meticulously restored grand hotel. Experience old-world charm with modern luxuries. The Historic Grand Hotel combines rich history with contemporary comforts, offering a unique and sophisticated stay for discerning travelers.",
        price: "₦249/night"
      },
      {
        id: 6,
        name: "Eco-Friendly Treehouse Resort",
        image: "/image/hotel.jpeg",
        description: "Immerse yourself in nature at our unique treehouse resort. Sustainable luxury meets adventure in this unforgettable getaway. Our Eco-Friendly Treehouse Resort offers a one-of-a-kind experience that combines environmental consciousness with comfort and style.",
        price: "₦229/night"
      }
    ];
  
    const handleModalOpen = (hotel) => {
      setSelectedHotel(hotel);
    };
  
    const handleModalClose = () => {
      setSelectedHotel(null);
    };
  
    const handleBookNow = (hotelId) => {
      // Navigate to the booking page or perform booking action
      navigate(`/book/${hotelId}`);
    };
  
    return (
      <div className="home-page001">
        <section className="hero001">
          <h1>Discover Your Perfect Stay</h1>
          <p>Explore our handpicked selection of extraordinary hotels and resorts</p>
          <form className="search-form001" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              required
            />
            <button type="submit" className="search-button001">Search</button>
          </form>
        </section>
        <section className="featured-hotels001">
          <h2>Featured Hotels</h2>
          {hotels.map((hotel, index) => (
            <div key={hotel.id} className={`hotel-card001 ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="hotel-info001">
                <h3>{hotel.name}</h3>
                <p>{hotel.description}</p>
                <div className="hotel-footer001">
                  <span className="hotel-price001">{hotel.price}</span>
                  <button onClick={() => handleModalOpen(hotel)} className="book-button001">View Details</button>
                </div>
              </div>
              <div className="hotel-image-container001" onClick={() => handleModalOpen(hotel)}>
                <img src={hotel.image} alt={hotel.name} className="hotel-image001" />
              </div>
            </div>
          ))}
        </section>
        {selectedHotel && (
          <div className="modal001">
            <div className="modal-content001">
              <span className="close001" onClick={handleModalClose}>&times;</span>
              <h3>{selectedHotel.name}</h3>
              <img src={selectedHotel.image} alt={selectedHotel.name} />
              <p>{selectedHotel.description}</p>
              <button className="book-button001" onClick={() => handleBookNow(selectedHotel.id)}>Book Now</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default HomePage;