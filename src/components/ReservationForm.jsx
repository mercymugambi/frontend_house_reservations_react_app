/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchCities } from '../redux/reservations/citiesSlice';

const CityForm = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.cities);

  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/houses/:id/reservations', { city: selectedCity });
      console.error('Data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="reservation-page">
      <form onSubmit={handleSubmit}>
        <h2>Make a Reservation</h2>
        <p>
          Hello! We&apos;re excited that you want to book with us!
          Please select the city in which you want to make your reservation.
        </p>
        <div className="horizontal-buttons">
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Select city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CityForm;

// const ReservationFormComponent = () => {
//   const dispatch = useDispatch();
//   const { reservationForm, isLoading, error } = useSelector(
//     (state) => state.reservationForm,
//   );

//   useEffect(() => {
//     dispatch(fetchReservationForm());
//   }, [dispatch]);

//   return (
//     <div className="reservation-page">
//       {isLoading && <p>Loading...</p>}
//       {error && (
//       <p>
//         Error:
//         {error}
//       </p>
//       )}
//       {reservationForm && (
//         <form>
//           <h2>Book a House!</h2>
//           <p>
//             Hello! We&apos;re excited that you want to book with us!
//             Please the city in which you want to make your reservation.
//           </p>
//           <div className="inputs-and-button">
//             <select
//               id="city"
//               type="text"
//               placeholder="City"
//               name="city"
//               value={reservationForm.city}
//             >
//               <option value="" disabled>
//                 City
//               </option>
//             </select>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ReservationFormComponent;
