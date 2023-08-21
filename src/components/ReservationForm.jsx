import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import DatePicker from 'react-datepicker';
import { fetchReservationForm } from '../redux/reservations/reservationFormSlice';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationFormComponent = () => {
//   const [checkinDate, setCheckinDate] = useState(null);
//   const [checkoutDate, setCheckoutDate] = useState(null);

  //   const handleCheckinDateChange = (date) => {
  //     setCheckinDate(date);
  //     setCheckoutDate(null);
  //   };

  //   const handleCheckoutDateChange = (date) => {
  //     setCheckoutDate(date);
  //   };

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
            Please fill in the form to make your reservation.
          </p>
          <div className="inputs-and-button">
            <input
              type="text"
              placeholder="City"
              id="city"
              name="city"
              value={reservationForm.city}
            />
            {/* <DatePicker
              id="checkin-date"
              placeholder="Check-in Date"
              selected={checkinDate}
              onChange={handleCheckinDateChange}
              dateFormat="yyyy-MM-dd"
            />
            <DatePicker
              id="checkout-date"
              placeholder="Check-out Date"
              selected={checkoutDate}
              onChange={handleCheckoutDateChange}
              minDate={checkinDate ? new Date(checkinDate) : null} // Set minDate for checkout date
              dateFormat="yyyy-MM-dd"
            /> */}
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReservationFormComponent;
