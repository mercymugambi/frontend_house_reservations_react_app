import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHouses } from "../redux/houses/housesSlice";
import LogoutButton from "./LogoutButton";

const HomePage = () => {
  const dispatch = useDispatch();
  const { houses, isLoading, error } = useSelector((state) => state.houses);

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
            <Link to={`/house/${house.id}`} key={house.id}>
              <div className="container">
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
