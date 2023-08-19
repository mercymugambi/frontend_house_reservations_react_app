import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3000/api/v1/houses/1/reservations';

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

const reservationsListSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // .addCase(fetchReservations.pending, (state) => {
      //   state.isLoading = true;
      // })
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        isLoading: false,
      }));
    // .addCase(fetchReservations.rejected, (state, action) => {
    //   state.error = action.error.message;
    //   state.isLoading = false;
    // });
  },
});

export default reservationsListSlice.reducer;
