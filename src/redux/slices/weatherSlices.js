import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const API_KEY = '21c9c4d9a6055fe88ccdb9ef6446d298' || 'e5f1e0e91073e047bfd37039ad433153';
const URL1 = 'https://api.openweathermap.org/data/2.5/weather';
const URL2 = 'https://api.openweathermap.org/data/2.5/onecall';

export const fetchWeatherAction = createAsyncThunk(
    'weather/fetch',
    async (patload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.get(`${URL1}?q=${patload}&units=metric&appid=${API_KEY}`);
            return data;
        } catch (e) {
            if (!e.response) {
                throw e;
            }
            return rejectWithValue(e?.response?.data);
        }
    },
);

//slice
const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    extraReducers: (builder) => {
        //pending
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        //fulfilled
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
        });
        //reject
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });
    },
});

export default weatherSlice.reducer;
