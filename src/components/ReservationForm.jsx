import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationForm } from '../redux/reservations/reservationFormSlice';

const ReservationFormComponent = () => {
  const dispatch = useDispatch();
  const { reservationForm, isLoading, error } = useSelector(
    (state) => state.reservation_form,
  );

  useEffect(() => {
    dispatch(fetchReservationForm());
  }, [dispatch]);

  return (
    <div>
      <h2>Reservation Form</h2>
      {isLoading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
      {reservationForm && (
        <form>
          {/* Render your form fields here */}
          <input type="text" placeholder="City" id="city" name="city" value={reservationForm.city} />
          {/* ... other form fields */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ReservationFormComponent;
