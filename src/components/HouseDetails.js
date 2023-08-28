import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../redux/houses/housesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { houses, isLoading, error } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <div className="main-container">
        {houses.length > 0 ? (
          houses.map((house) => (
            <div className="homepage-container" key={house.id}>
              <img className="icon" src={house.icon} alt="House Icon" />
              <div className="lower-part">
                <h4>
                  House:
                  {house.id}
                </h4>
                <h2 className="detailTitle">
                  More Information about
                  {' '}
                  {house.name}
                </h2>
                <div className="info">
                  <p>House Name</p>
                  <p>{house.name}</p>
                </div>
                <div className="info">
                  <p>City</p>
                  <p>{house.city || 'N/A'}</p>
                </div>
                <div className="info">
                  <p>Description</p>
                  <p>{house.description}</p>
                </div>
                <div className="info">
                  <p>Bedrooms:</p>
                  <p>{house.bedrooms}</p>
                </div>
                <div className="info">
                  <p>Bathrooms</p>
                  <p>{house.bathrooms}</p>
                </div>
                <div className="info">
                  <p>Rent:</p>
                  <p>{house.rent}</p>
                </div>
                <div className="info">
                  <p>Security Deposit</p>
                  <p>{house.security_deposit}</p>
                </div>
                <div className="info">
                  <p>Contact Phone Number</p>
                  <p>{house.contact_phone_number || 'N/A'}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No details available for this house.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
