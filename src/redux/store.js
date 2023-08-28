import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';
import reservationsListReducer from './reservations/reservationsListSlice';
import citiesSliceReducer from './reservations/citiesSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsListReducer,
    cities: citiesSliceReducer,
    houses: housesReducer,
  },
});

export default store;
