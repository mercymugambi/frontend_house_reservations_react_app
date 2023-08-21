import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservationsListSlice';
// import ReservationForm from './ReservationForm';

const ReservationsList = () => {
  const dispatch = useDispatch();
  const { reservations, isLoading, error } = useSelector(
    (state) => state.reservations,
  );

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="reservations-page">
      <h2>Your Resevations</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
      <div className="main-container">
        {reservations && reservations.map((reservation) => (
          <div className="container" key={reservation.id}>
            <h4>
              Reservation:
              {reservation.id}
            </h4>
            <p>
              Reserved House:
              {reservation.house_id}
            </p>
            <p>
              City:
              {reservation.city}
            </p>
            <p>
              Check in Date:
              {reservation.reservation_checkin_date}
            </p>
            <p>
              Checkout Date:
              {reservation.reservation_checkout_date}
            </p>
          </div>
        ))}
      </div>
      {/* <ReservationForm reservation={reservations && reservations[0]} /> */}
    </div>
  );
};

export default ReservationsList;
