import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHouses } from '../redux/houses/housesSlice';
import LogoutButton from './LogoutButton';

const HomePage = () => {
  const dispatch = useDispatch();
  const { houses, isLoading, error } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div className="home-page">
      <LogoutButton />
      <h2>Home Page</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <div className="main-container">
        {houses.length > 0 ? (
          houses.map((house) => (
            <Link to={`/house/${house.id}`} key={house.id}>
              <div className="homepage-container">
                <img className="icon" src={house.icon} alt="House Icon" />
                <div className="lower-part">
                  {/* <h4>
                    House:
                    {house.id}
                  </h4> */}
                  <h4>
                    name:
                    {house.name}
                  </h4>
                  <p>
                    description:
                    {house.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No houses available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
