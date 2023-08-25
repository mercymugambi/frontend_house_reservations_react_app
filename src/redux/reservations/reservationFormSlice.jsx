import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3000/api/v1/houses/1/reservations#new';

const initialState = {
  reservationForm: {},
  isLoading: false,
  error: null,
};

export const fetchReservationForm = createAsyncThunk(
  'reservations/fetchReservationForm',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);

export const submitReservationForm = createAsyncThunk(
  'reservations/submitReservationForm',
  async (formData) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  },
);

const ReservationFormSlice = createSlice({
  name: 'reservation_form',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservationForm.fulfilled, (state, action) => ({
        ...state,
        reservationForm: action.payload,
        isLoading: false,
      }));
  },
});

export default ReservationFormSlice.reducer;
