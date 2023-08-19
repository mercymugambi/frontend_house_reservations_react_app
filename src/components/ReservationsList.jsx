import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../redux/reservations/reservationsListSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const { reservations, isLoading, error } = useSelector(
    (state) => state.reservations,
  );

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h2>Message Loading...</h2>}
      {error && <p>{error}</p>}
      {reservations && (
      <div className="container">
        {reservations.map((reservation) => (
          <div key={reservation.id}>
            <h2>
              Reservation:
              {reservation.id}
            </h2>
            <p>
              Check in Date:
              {reservation.reservation_checkin_date}
            </p>
            <p>
              Checkout Date:
              {reservation.reservation_checkout_date}
            </p>
            <p>
              USer:
              {reservation.user_id}
            </p>
            <p>
              Reserved House:
              {reservation.house_id}
            </p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Reservations;
