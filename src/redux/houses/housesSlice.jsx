import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

// /* eslint-disable */

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchApi = createAsyncThunk(
//     "houses/fetchApi", async(Data) => {
//         const response = await fetch("http://localhost:3000/api/v1/houses",
//         {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(Data),
//         });

//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         const data = await response.json()
//         console.log("API", data);
//         return data
//     }
// )

// const initialState = {
//     dataList: []
// }

// const housesSlice = createSlice({
//     name: "houses",
//     initialState,
//     reducers: {
//         addHouse(state, action) {
//             state.dataList.push(action.payload);
//         },
//         deleteHouse(state, action) {}
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchApi.fulfilled, (state, action) => {
//             console.log("API Response in Redux", action.payload);
//             state.dataList.push(action.payload);
//         });
//         builder.addCase(fetchApi.rejected, (state, action) => {
//             console.error("API Error in Redux", action.error);
//         });
//     },
// })

// export default housesSlice.reducer;