import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    value: "",
  },
  reducers: {
    searchEntered(state, action) {
      let inputWords = action.payload.split(" ");
      inputWords = inputWords.map(
        (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`
      );
      state.value = inputWords.join(" ");
    }
  }
});

export const { searchEntered } = citySlice.actions;

export default citySlice.reducer;