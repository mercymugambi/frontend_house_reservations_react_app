import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationForm } from '../redux/reservations/reservationFormSlice';

const ReservationFormComponent = () => {
  const dispatch = useDispatch();
  const { reservationForm, isLoading, error } = useSelector(
    (state) => state.reservationForm,
  );

  useEffect(() => {
    dispatch(fetchReservationForm());
  }, [dispatch]);

  return (
    <div className="reservation-page">
      {isLoading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
      {reservationForm && (
        <form>
          <h2>Book a House!</h2>
          <p>
            Hello! We&apos;re excited that you want to book with us!
            Please the city in which you want to make your reservation.
          </p>
          <div className="inputs-and-button">
            <select
              id="city"
              type="text"
              placeholder="City"
              name="city"
              value={reservationForm.city}
            >
              <option value="" disabled>
                City
              </option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReservationFormComponent;
