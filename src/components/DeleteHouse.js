import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHouse } from '../redux/houses/housesSlice';
import '../styling/deleteHouse.css';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.houses);
  const navigate = useNavigate();
  const [deletedMessageVisible, setDeletedMessageVisible] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteHouse(id));
    setDeletedMessageVisible(true);
    setTimeout(() => {
      setDeletedMessageVisible(false);
      navigate('/homepage');
    }, 2000);
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
      {deletedMessageVisible && (
            <div className="deleted-message">
              <p style={{ color: "red", fontSize: "21px" }}>Successfully deleted!</p>
            </div>
          )}
    </div>
  );
};

export default DeleteHouse;
