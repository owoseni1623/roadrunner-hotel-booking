import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./SearchResultsPage.css";



const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchResults = async () => {
      const mockResults = [
        {
          id: 1,
          name: "Luxury Ocean Resort",
          image: "/image/hotel7.jpg",
          description: "Experience ultimate relaxation at our beachfront paradise. Enjoy stunning ocean views, world-class amenities, and impeccable service. Our Luxury Ocean Resort offers a perfect blend of comfort and elegance, ensuring an unforgettable stay for all our guests.",
          price: "₦299"
        },
        {
          id: 2,
          name: "Mountain View Lodge",
          image: "/image/hotel2.webp",
          description: "Nestled in the heart of the mountains, our lodge offers breathtaking views, cozy accommodations, and outdoor adventures for all seasons. Immerse yourself in nature while enjoying modern comforts and warm hospitality at our Mountain View Lodge.",
          price: "₦199"
        },
        {
          id: 3,
          name: "Urban Chic Hotel",
          image: "/image/hotel3.jpg",
          description: "Located in the city center, our modern hotel combines style and comfort. Perfect for business travelers and urban explorers alike, the Urban Chic Hotel offers sleek design, state-of-the-art amenities, and easy access to the city's top attractions.",
          price: "₦179"
        },
        {
          id: 4,
          name: "Riverside Retreat",
          image: "/image/hotel4.jpg",
          description: "Find peace and tranquility at our riverside retreat. Enjoy fishing, kayaking, and nature walks right at your doorstep. Our Riverside Retreat offers a perfect escape from the hustle and bustle of everyday life, allowing you to reconnect with nature and yourself.",
          price: "₦159"
        },
        {
          id: 5,
          name: "Historic Grand Hotel",
          image: "/image/hotel5.jpg",
          description: "Step back in time at our meticulously restored grand hotel. Experience old-world charm with modern luxuries. The Historic Grand Hotel combines rich history with contemporary comforts, offering a unique and sophisticated stay for discerning travelers.",
          price: "₦249"
        },
        {
          id: 6,
          name: "Eco-Friendly Treehouse Resort",
          image: "/image/hotel.jpeg",
          description: "Immerse yourself in nature at our unique treehouse resort. Sustainable luxury meets adventure in this unforgettable getaway. Our Eco-Friendly Treehouse Resort offers a one-of-a-kind experience that combines environmental consciousness with comfort and style.",
          price: "₦229"
        },
        {
          id: 7,
          name: "Cozy Country Inn",
          image: "/image/hotel16.webp",
          description: "Escape to the countryside at our charming inn. Enjoy rustic elegance, home-cooked meals, and serene surroundings. The Cozy Country Inn offers a relaxing retreat with all the comforts of home.",
          price: "₦149"
        },
        {
          id: 8,
          name: "Downtown Boutique Hotel",
          image: "/image/hotel15.jpg",
          description: "Discover urban luxury at our boutique hotel. Stylish rooms, personalized service, and a prime downtown location make the Downtown Boutique Hotel a perfect choice for modern travelers.",
          price: "₦199"
        },
        {
          id: 9,
          name: "Desert Oasis Resort",
          image: "/image/hotel14.jpg",
          description: "Find your oasis in the desert at our luxurious resort. Enjoy stunning desert landscapes, world-class spa services, and exceptional dining. The Desert Oasis Resort promises a unique and rejuvenating experience.",
          price: "₦279"
        },
        {
          id: 10,
          name: "Lakeside Cabin Retreat",
          image: "/image/hotel11.jpg",
          description: "Unwind at our lakeside cabin retreat. Enjoy water sports, nature trails, and cozy evenings by the fire. The Lakeside Cabin Retreat offers a perfect blend of adventure and relaxation.",
          price: "₦189"
        },
        {
          id: 11,
          name: "Tropical Paradise Resort",
          image: "/image/hotel12.jpg",
          description: "Experience paradise at our tropical resort. White sandy beaches, crystal clear waters, and luxurious accommodations await you at the Tropical Paradise Resort.",
          price: "₦319"
        },
        {
          id: 12,
          name: "City Center Hotel",
          image: "/image/hotel13.jpg",
          description: "Stay in the heart of the city at our centrally located hotel. The City Center Hotel offers modern rooms, convenient amenities, and easy access to major attractions and business districts.",
          price: "₦169"
        }
      ];
      setSearchResults(mockResults);
    };

    fetchSearchResults();
  }, [searchParams]);

  const destination = searchParams.get("destination");

  const handleModalOpen = (hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleBookNow = () => {
    setIsModalOpen(false);
    if (selectedHotel) {
      navigate("/check-in", { state: { hotel: selectedHotel } });
    }
  };

  return (
    <div className="search-results-pagee">
      <h1>Search Results</h1>
      <p>Showing results for: {destination}</p>
      <div className="results-liste">
        {searchResults.map((hotel) => (
          <div key={hotel.id} className="result-carde">
            <img 
              src={hotel.image} 
              alt={hotel.name} 
              className="result-imagee" 
              onClick={() => handleModalOpen(hotel)} 
            />
            <div className="result-infeo">
              <h2>{hotel.name}</h2>
              <p>{hotel.description}</p>
              <p className="result-pricee">{hotel.price}</p>
              <button 
                className="view-details-buttone" 
                onClick={() => handleModalOpen(hotel)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modale">
          <div className="modal-contente">
            <span className="close-buttone" onClick={handleModalClose}>&times;</span>
            {selectedHotel && (
              <>
                <img src={selectedHotel.image} alt={selectedHotel.name} className="modal-imagee" />
                <h2>{selectedHotel.name}</h2>
                <p>{selectedHotel.description}</p>
                <p className="modal-pricee">{selectedHotel.price}</p>
                <button 
                  className="book-now-buttone" 
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;