import React from "react";
import Header from '../components/Header';

const placesOfInterest = [
  {
    name: "Central Park",
    image: "/images/central-park.jpg",
    lat: 40.785091,
    lon: -73.968285,
  },
  {
    name: "Brooklyn Bridge",
    image: "/images/bridge.jpg",
    lat: 40.706086,
    lon: -73.996864,
  },
  {
    name: "MOMA",
    image: "/images/moma.jpg",
    lat: 40.761436,
    lon: -73.977621,
  },
  {
    name: "Chelsea Market",
    image: "/images/market.jpg",
    lat: 40.742650,
    lon: -74.006240,
  },
];

const Interests = () => {
  const handleRedirect = (lat, lon) => {
    window.open(`https://www.google.com/maps?q=${lat},${lon}`, "_blank");
  };

  return (
    <div className="places">
      <Header />
      <div className="places-container">
        <h2>My Places of Interest</h2>
        <p>I love to explore New York City’s iconic landmarks, from the serene beauty of Central Park to the breathtaking views from the Brooklyn Bridge. 
          Visiting MoMA for its modern art and Chelsea Market for its vibrant food and shopping scene will give me a perfect mix of culture, creativity, and local flavor.</p>
        <div className="grid">
          {placesOfInterest.map((place, index) => (
            <div className="place-item" key={index}>
              <div className="project-item">
                <div className="image-wrapper">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="place-image"
                  />
                </div>
                <div className="place-info">
                  <h3>{place.name}</h3>
                  <button
                    onClick={() => handleRedirect(place.lat, place.lon)}
                    className="place-button"
                  >
                    View on Google Maps
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
