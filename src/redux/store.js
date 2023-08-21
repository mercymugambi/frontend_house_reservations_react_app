/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './house/HousesSlice'

const store = configureStore({
  reducer: {
    houses: housesReducer,
  },
});

export default store;
