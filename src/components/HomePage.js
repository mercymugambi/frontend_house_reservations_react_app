import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHouses } from "../redux/houses/housesSlice";
import "../styling/Home.css";

const HomePage = () => {
  const [left, setLeft] = useState(0);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const scrollContainerRef = useRef(null);

  const handleRightScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: 300, behavior: "smooth" });
      setLeft(container.scrollLeft);
      setSelectedHouse(null);
    }
  };

  const handleLeftScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollBy({ left: -300, behavior: "smooth" });
      setLeft(container.scrollLeft);
      setSelectedHouse(null);
    }
  };

  const closeModal = () => {
    setSelectedHouse(null);
  };

  return (
    <>
      <div className="right-content">
        <div className="select">
          <h1>LATEST HOUSES</h1>
          <p>Please select a house</p>
        </div>
        <div className="homepage">
          <div className="house-control1">
            <button
              className={`${left === 0 && "disabledButton"}`}
              type="button"
              disabled={left === 0}
              onClick={handleLeftScroll}
            >
              {"<"}
            </button>
          </div>
          <div className="house-container" ref={scrollContainerRef}>
            {houses.length > 0 ? (
              houses.map((house) => (
                <Link
                  to={`/House/${house.id}`}
                  key={house.id}
                  className={`house-item ${
                    selectedHouse === house.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedHouse(house.id)}
                >
                  <img src={house.image} alt={house.name} />
                  <h1>{house.name}</h1>
                  <p>{house.description}</p>
                </Link>
              ))
            ) : (
              <p>No houses available</p>
            )}
          </div>
          <div className="house-control2">
            <button
              className={`${
                scrollContainerRef?.current?.scrollWidth - left ===
                scrollContainerRef?.current?.clientWidth
                  ? "disabledButton"
                  : ""
              }`}
              disabled={
                scrollContainerRef?.current?.scrollWidth - left ===
                scrollContainerRef?.current?.clientWidth
              }
              type="button"
              onClick={handleRightScroll}
            >
              {">"}
            </button>
          </div>
        </div>
        {selectedHouse && (
          <div className={`modal ${selectedHouse ? "modal-show" : ""}`}>
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
                More Information about {selectedHouse.name}
              </h2>
              <div className="info">
                <p>House Name:</p>
                <p>{selectedHouse.name}</p>
              </div>
              <div className="info">
                <p>City</p>
                <p>{selectedHouse.city || "N/A"}</p>
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
                <p>{selectedHouse.contact_phone_number || "N/A"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
