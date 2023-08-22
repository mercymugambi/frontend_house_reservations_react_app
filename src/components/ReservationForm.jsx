import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservationForm } from '../redux/reservations/reservationFormSlice';
// import { fetchReservationForm,
// submitReservationForm } from '../redux/reservations/reservationFormSlice';

const ReservationFormComponent = () => {
  const dispatch = useDispatch();
  const { reservationForm, isLoading, error } = useSelector(
    (state) => state.reservationForm,
  );
  // const cities = useSelector((state) => state.houses.cities);

  // const [selectedCity, setSelectedCity] = useState(
  //   reservationForm.city || '',
  // );

  // const handleCityChange = (selectedCity) => {
  //   setSelectedCity(selectedCity);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  // const formData = {
  //   city: selectedCity,
  // };

  //   try {
  //     await dispatch(submitReservationForm(formData));
  //   } catch (error) {
  //     <p>Error</p>;
  //   }
  // };

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
        // <form onSubmit={handleSubmit}>
        <form>
          <h2>Book a House!</h2>
          <p>
            Hello! We&apos;re excited that you want to book with us!
            Please fill in the form to make your reservation.
          </p>
          <div className="inputs-and-button">
            <select
              id="city"
              type="text"
              placeholder="City"
              name="city"
              value={reservationForm.city}
              // onChange={(e) => handleCityChange(e.target.value)}
            >
              <option value="" disabled>
                City
              </option>
              {/* {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))} */}
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReservationFormComponent;
