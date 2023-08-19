import { configureStore } from '@reduxjs/toolkit';
import reservationsListReducer from './reservations/reservationsListSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsListReducer,
  },
});

export default store;
