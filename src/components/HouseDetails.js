import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchHouses } from '../redux/houses/housesSlice';
import '../styling/HouseDetails.css';

const HouseDetails = () => {
  const { id } = useParams();
  const houseId = parseInt(id, 10);
  const dispatch = useDispatch();
  const { houses, isLoading, error } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const selectedHouse = houses.find((house) => house.id === houseId);
  HouseDetails.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      {selectedHouse ? (
        <div className="HouseDetails-container">
          <img className="icon" src={selectedHouse.icon} alt="House Icon" />
          <div className="lower-part">
            <h4>
              House:
              {selectedHouse.id}
            </h4>
            <h2 className="detailTitle">
              More Information about
              {' '}
              {selectedHouse.house_name}
            </h2>
            <div className="info">
              <p>House Name</p>
              <p>{selectedHouse.house_name}</p>
            </div>
            <div className="info">
              <p>City</p>
              <p>{selectedHouse.city || 'N/A'}</p>
            </div>
            <div className="info">
              <p>Description</p>
              <p>{selectedHouse.description}</p>
            </div>
            <div className="info">
              <p>Bedrooms:</p>
              <p>{selectedHouse.bedrooms}</p>
            </div>
            <div className="info">
              <p>Bathrooms</p>
              <p>{selectedHouse.bathrooms}</p>
            </div>
            <div className="info">
              <p>Rent:</p>
              <p>{selectedHouse.rent}</p>
            </div>
            <div className="info">
              <p>Security Deposit</p>
              <p>{selectedHouse.security_deposit}</p>
            </div>
            <div className="info">
              <p>Contact Phone Number</p>
              <p>{selectedHouse.contact_phone_number || 'N/A'}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No details available for this house.</p>
      )}
    </div>
  );
};

export default HouseDetails;
