import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHouses } from "../redux/houses/housesSlice";

function HouseDetails() {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("id:", id);

  useEffect(() => {
    dispatch(fetchHouses(id));
  }, [dispatch, id]);

  const houses = useSelector((state) => state.house);

  const filteredHouse = houses.filter((house) => house.show === true);

  return (
    <Container>
      <div className="HouseDetails">
        {filteredHouse.map((house) => (
          <div key={house.id} className="imageContainer">
            <img src={house.img} alt="house img" className="indiImg" />
            <div className="cont">
              <h2>House: {house.name}</h2>
            </div>

            <h2 className="detailTitle">More Information about {house.name}</h2>
            <div className="info">
              <p>House Name</p>
              <p>{house.name}</p>
            </div>
            <div className="info">
              <p>City</p>
              <p>{house.city || "N/A"}</p>
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
              <p>{house.contact_phone_number || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HouseDetails;
