import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/v1/random_greeting';

const initialState = {
  greetings: [],
  isLoading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
        state.isLoading = false;
      });
  },
});

export default greetingSlice.reducer;
