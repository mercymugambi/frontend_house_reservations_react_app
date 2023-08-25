import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './houses/housesSlice';
import reservationsListReducer from './reservations/reservationsListSlice';
import reservationFormReducer from './reservations/reservationFormSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsListReducer,
    reservationForm: reservationFormReducer,
    houses: housesReducer,
  },
});

export default store;
