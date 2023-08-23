/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouses } from '../redux/houses/housesSlice';
import LogoutButton from './LogoutButton';

const HomePage = () => {
  const dispatch = useDispatch();
  const { houses, isLoading, error } = useSelector(
    (state) => state.houses,
  );

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div>
      <h2>Home Page</h2>
      <LogoutButton />
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <div className="main-container">
      {houses.length > 0 ? (
  houses.map((house) => (
    // {houses && houses.map((house) => (
          <div className="container" key={house.id}>
            <h4>
              House:
              {house.id}
            </h4>
            <p>
              icon:
              {house.icon}
            </p>
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
    </div>
);
};

export default HomePage;