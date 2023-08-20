import { configureStore } from '@reduxjs/toolkit';
import reservationsListReducer from './reservations/reservationsListSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsListReducer,
    reservationForm: reservationFormSlice
  },
});

export default store;
