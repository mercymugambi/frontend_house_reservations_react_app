/* eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchCities } from '../redux/reservations/citiesSlice';
import { fetchHouseForReservation } from '../redux/reservations/reservationHousesSlice';

const CityForm = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.reservationHouses.reservationHouses);
  const cities = useSelector((state) => state.cities.cities);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState(false);
  const user = useSelector((store) => store.user.userData);
  const { houseId } = useParams();
  const [isHouse, setIsHouse] = useState(false);
  const [house_id, setHouseId] = useState('');
  const [city_id, setCityId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCities());
    dispatch(fetchHouseForReservation());
    if (houseId) {
      setHouseId(houseId);
      setIsHouse(true);
    }
  }, [dispatch, houseId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    if (house_id !== '' && date !== '' && city_id !== '') {
      axios
        .post('http://localhost:3000/api/v1/houses/:id/reservations', {
          reservation: {
            house_id,
            date,
            city_id,
            user_id: user.id,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            setHouseId('');
            setDate('');
            setCityId('');
            navigate('/reservations');
          }
        })
        .catch((err) => err && setError(true));
    } else {
      setError(true);
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
          <select
            type="text"
            value={selectedHouse}
            onChange={(e) => setSelectedHouse(e.target.value)}
            required
          >
            <option disabled value="">
              Select House
            </option>
            { houses.map((house, index) => (
              <option key={index} value={house}>
                {house}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            required
          />
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








// THREE
// /* eslint-disable */
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { fetchCities } from '../redux/reservations/citiesSlice';
// import { useNavigate, useParams } from 'react-router-dom';
// import { fetchHouseForReservation } from '../redux/reservations/reservationHousesSlice';

// const CityForm = () => {
//   const dispatch = useDispatch();
//   const cities = useSelector((state) => state.cities.cities);
//   const [selectedCity, setSelectedCity] = useState('');

//   const houses = useSelector((state) => state.houses.houses);
//   const [selectedHouse, setSelectedHouse] = useState('');

//   const [date, setDate] = useState('');
//   const [error, setError] = useState(false);

//   const user = useSelector((store) => store.user.userData);

//   const { houseId } = useParams();
//   const [isHouse, setIsHouse] = useState(false);
//   const [house_id, setHouseId] = useState('');
//   const [city_id, setCityId] = useState('');

//   // const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(fetchCities());
//     dispatch(fetchHouseForReservation());
//     if (houseId) {
//       setHouseId(houseId);
//       setIsHouse(true);
//     }
//   }, [dispatch, houseId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError(false);
//     if (house_id !== '' && date !== '' && city_id !== '') {
//       axios
//         .post('http://localhost:3000/api/v1/houses/:id/reservations', {
//           reservation: {
//             house_id,
//             date,
//             city_id,
//             user_id: user.id,
//           },
//         })
//         .then((response) => {
//           if (response.status === 201) {
//             setHouseId('');
//             setDate('');
//             setCityId('');
//             navigate('/reservations');
//           }
//         })
//         .catch((err) => err && setError(true));
//     } else {
//       setError(true);
//     }

//     // try {
//     //   const response = await axios.post('http://localhost:3000/api/v1/houses/:id/reservations', { city: selectedCity });
//     //   console.error('Data submitted:', response.data);
//     // } catch (error) {
//     //   console.error('Error submitting data:', error);
//     // }
//   };

//   return (
//     <div className="reservation-page">
//       <form onSubmit={handleSubmit}>
//         <h2>Make a Reservation</h2>
//         <p>
//           Hello! We&apos;re excited that you want to book with us!
//           Please select the city in which you want to make your reservation.
//         </p>
//         <div className="horizontal-buttons">
//           <select
//             type="text"
//             value={selectedHouse}
//             onChange={(e) => setSelectedHouse(e.target.value)}
//             required
//           >
//             <option disabled value="">
//               Select House
//             </option>
//             { houses.map((house,index) => (
//               <option key={index} value={house.id}>
//                 {house.name}
//               </option>
//               ))}
//             </select>
//             <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 placeholder="Date"
//                 required
//               />
//           <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
//             <option value="">Select city</option>
//             {cities.map((city, index) => (
//               <option key={index} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CityForm;
