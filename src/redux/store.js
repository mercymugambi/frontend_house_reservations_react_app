import { configureStore } from '@reduxjs/toolkit';
import reservationsListReducer from './reservations/reservationsListSlice';
import reservationFormReducer from './reservations/reservationFormSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsListReducer,
    reservationForm: reservationFormReducer,
  },
});

export default store;
