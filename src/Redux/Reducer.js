import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city, thunkAPI) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=832008944962b63f59220dea2a80e2e6&units=metric`);
      if(response.data.cod === "404")
        return new Error('Failed to fetch weather data. Please try again later');
      else
        return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);


const Reducer = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default Reducer.reducer;
