import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/houses/:house_id/reservations';

const initialState = {
  reservations: [],
  isLoading: false,
  error: null,
};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);

export const sendReservations = createAsyncThunk('reservations/sendReservations', async (formData) => {
  const response = await axios.post(baseUrl, formData);
  return response.data;
});

const reservationsListSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        isLoading: false,
      }));
  },
});

export default reservationsListSlice.reducer;
