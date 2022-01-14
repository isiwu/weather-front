import { configureStore } from '@reduxjs/toolkit';
import cityReducer from "../features/citySlice";
import forecastsReducer from "../features/forecastsSlice"

export const store = configureStore({
  reducer: {
    city: cityReducer,
    forecasts: forecastsReducer,
  },
});
