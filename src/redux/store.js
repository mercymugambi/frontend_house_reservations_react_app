import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';
import reservationsListReducer from './reservations/reservationsListSlice';
import citiesSliceReducer from './reservations/citiesSlice';

const store = configureStore({
  reducer: {
    houses: housesReducer,
    reservations: reservationsListReducer,
    cities: citiesSliceReducer,
  },
});

export default store;
