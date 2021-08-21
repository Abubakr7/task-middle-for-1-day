import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "home",
  initialState: {
    date: new Date(),
  },
  reducers: {
    update: (state) => {
      state.date = new Date();
    },
  },
});

export const { update } = slice.actions;

export default slice.reducer;
