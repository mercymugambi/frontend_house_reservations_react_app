/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReservations } from '../redux/reservations/reservationsListSlice';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const { reservations, isLoading, error } = useSelector(
    (state) => state.reservations,
  );

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reservations'));
    if (data) {
      data.map((datum) => {
        dispatch(setReservations(datum));
      });
    }
  }, [dispatch]);

  return (
    <div className="reservations-list-page">
      <h2>Your Resevations</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <div className="main-container">
        {reservations && reservations.map((reservation, index) => (
          <div className="container" key={index}>
            <h4>
              Reservation Date:
              {reservation.date}
            </h4>
            <p>
              Reserved House:
              {reservation.selectedHouse}
            </p>
            <p>
              City:
              {reservation.selectedCity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationsList;
