import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

const reservationsListSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    setReservations(state, action) {
      // state.reservations = [...state.reservations, action.payload]
      localStorage.setItem('reservations', JSON.stringify([...state.reservations, action.payload]));
      return { ...state, reservations: [...state.reservations, action.payload] };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
        isLoading: false,
      }));
  },
});

export const { setReservations } = reservationsListSlice.actions;
export default reservationsListSlice.reducer;
