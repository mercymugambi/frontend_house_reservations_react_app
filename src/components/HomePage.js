import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../redux/houses/housesSlice';
import LogoutButton from './LogoutButton';
import '../styling/HomePage.css'; // Import the CSS file for the modal styles

const HomePage = () => {
  const dispatch = useDispatch();
  const { houses, isLoading, error } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const [selectedHouse, setSelectedHouse] = useState(null);

  const handleHouseClick = (house) => {
    setSelectedHouse(house);
  };

  const closeModal = () => {
    setSelectedHouse(null);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <LogoutButton />
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <div className="main-container">
        {houses.length > 0 ? (
          houses.map((house) => (
            <div
              className="container"
              key={house.id}
              role="button"
              tabIndex={0}
              onClick={() => handleHouseClick(house)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleHouseClick(house);
                }
              }}
            >
              <h4>
                House:
                {house.id}
              </h4>
              <img src={house.icon} alt="House Icon" />
              <p>
                name:
                {house.name}
              </p>
              <p>
                description:
                {house.description}
              </p>
            </div>
          ))
        ) : (
          <p>No houses available.</p>
        )}
      </div>
      {selectedHouse && (
        <div className={`modal ${selectedHouse ? 'modal-show' : ''}`}>
          <div className="modal-content">
            <button
              type="submit"
              className="close-button"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="detailTitle">
              More Information about
              {' '}
              {selectedHouse.name}
            </h2>
            <img src={selectedHouse.icon} alt="House Icon" />
            <div className="info">
              <p>House Name:</p>
              <p>{selectedHouse.name}</p>
            </div>
            <div className="info">
              <p>City:</p>
              <p>{selectedHouse.city || 'N/A'}</p>
            </div>
            <div className="info">
              <p>Description:</p>
              <p>{selectedHouse.description}</p>
            </div>
            <div className="info">
              <p>Bedrooms:</p>
              <p>{selectedHouse.bedrooms}</p>
            </div>
            <div className="info">
              <p>Bathrooms:</p>
              <p>{selectedHouse.bathrooms}</p>
            </div>
            <div className="info">
              <p>Rent:</p>
              <p>{selectedHouse.rent}</p>
            </div>
            <div className="info">
              <p>Security Deposit:</p>
              <p>{selectedHouse.security_deposit}</p>
            </div>
            <div className="info">
              <p>Contact Phone Number:</p>
              <p>{selectedHouse.contact_phone_number || 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
