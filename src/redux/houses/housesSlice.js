import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/houses';

const initialState = {
  houses: [],
  isLoading: false,
  error: null,
};

export const fetchHouses = createAsyncThunk(
  'houses/fetchHouses',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);

// housesSlice.js
export const sendHouses = createAsyncThunk('houses/sendHouses', async (formData) => {
  const response = await axios.post(baseUrl, formData);
  return response.data;
});

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHouses.fulfilled, (state, action) => ({
        ...state,
        houses: action.payload,
        isLoading: false,
      }));
  },
});

export default housesSlice.reducer;
