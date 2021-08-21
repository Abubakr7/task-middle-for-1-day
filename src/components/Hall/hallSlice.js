import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "hall",
  initialState: {
    color: "",
  },
  reducers: {
    redColor: (state) => {
      state.color = "red";
    },
    blueColor: (state) => {
      state.color = "blue";
    },
  },
});

export const color = (state) => state.hall.color;

export const { redColor, blueColor } = slice.actions;

export default slice.reducer;
