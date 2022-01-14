import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const forecastsAdapter = createEntityAdapter({
  sortComparer: false,
  selectId: (forecast) => forecast.id
}),
initialState = forecastsAdapter.getInitialState({
  today: {},
  status: "idle",
  error: null,
}),

// create async thunk for axios 
getForecasts = createAsyncThunk("dailyForecast/getDailyForecast", (data) => {
  return axios.get("/api/location/key", {
    params: { location: data },
    withCredentials: true,
    baseURL: "https://react-weather-isiwu.herokuapp.com/",
  })
  .then((response) => {
    return response.data;
  })
  .catch(() => {
    return Promise.reject("server error");
  })
}),

// create slice for daily forecast
forecastsSlice = createSlice({
  name: "forecasts",
  initialState,
  extraReducers: {
    [getForecasts.pending]: (state) => {
      state.status = "loading";
    },
    [getForecasts.fulfilled]: (state, action) => {
      forecastsAdapter.setAll(state, action.payload.dailyForecasts);
      state.today = action.payload.currentForecast;
      state.status = "succeeded";
    },
    [getForecasts.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    }
  }
}),
selectForecast = (state) => state.forecasts.today,
selectLoadingStatus = createSelector(state => state.forecasts.status, status => status),
selectServerError = createSelector(state => state.forecasts.error, error => error);

export const { selectAll: selectForecasts, selectById: forecastById} = forecastsAdapter.getSelectors(state => state.forecasts)

export { getForecasts, selectForecast, selectLoadingStatus, selectServerError };

export default forecastsSlice.reducer;