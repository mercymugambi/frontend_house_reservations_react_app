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

const ReservationFormSlice = createSlice({
  name: 'reservation_form',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // .addCase(fetchReservationForm.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchReservationForm.fulfilled, (state, action) => ({
        ...state,
        reservationForm: action.payload,
        isLoading: false,
      }));
    // .addCase(fetchReservationForm.rejected, (state, action) => {
    //   state.error = action.error.message;
    //   state.isLoading = false;
    // });
  },
});

export default ReservationFormSlice.reducer;
