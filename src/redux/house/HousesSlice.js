/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk(
    "houses/fetchApi", async() => {
        const response = await axios.get("http://localhost:3000/api/v1/houses")
        console.log("API", response.data);
        return response.data
    }
)

const initialState = {
    dataList: []
}

const housesSlice = createSlice({
    name: "houses",
    initialState,
    reducers: {
        addHouse(state, action) {
            state.push(action.payload)
        },
        deleteHouse(state, action) {}
      },
      extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            console.log("API Response in Redux", action.payload);
            state.dataList.push(action.payload);
        });
    },
})
console.log("housesSlice", housesSlice);
export default housesSlice.reducer