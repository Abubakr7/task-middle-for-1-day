import { configureStore } from "@reduxjs/toolkit";
import hallReducer from "components/Hall/hallSlice.js";
import homeReducer from "../components/Home/homeSlice.js";

export default configureStore({
  reducer: {
    home: homeReducer,
    hall: hallReducer,
  },
});
