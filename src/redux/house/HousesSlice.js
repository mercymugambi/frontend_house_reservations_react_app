/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchApi = createAsyncThunk(
    "houses/fetchApi", async(Data) => {
        const response = await fetch("http://localhost:3000/api/v1/houses", 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Data),
        }
        );
        const data = await response.json(Data)
        console.log("API", data);
        return data
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
            state.dataList.push(action.payload);
        },
        deleteHouse(state, action) {}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            console.log("API Response in Redux", action.payload);
            state.dataList.push(action.payload);
        });
        builder.addCase(fetchApi.rejected, (state, action) => {
            console.error("API Error in Redux", action.error);
        });
    },
})

export default housesSlice.reducer;
