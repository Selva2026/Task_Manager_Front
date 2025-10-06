import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.js";
import tasksReducer from "../slices/tasksSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer
  }
});
