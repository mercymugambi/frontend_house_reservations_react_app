import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHouse } from "../redux/houses/housesSlice";
import "../styling/deleteHouse.css";

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.houses);

  const handleDelete = (id) => {
    dispatch(deleteHouse(id));
  };

  return (
    <div>
      <h2>Delete Houses</h2>
      {houses.map((house) => (
        <div key={house.id} className="house-item">
          <p>
            ID:
            {house.id}
          </p>
          <img src={house.icon} alt={house.house_name} />
          <p>
            Name:
            {house.house_name}
          </p>
          <p>
            City:
            {house.city}
          </p>
          <button type="submit" onClick={() => handleDelete(house.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteHouse;
