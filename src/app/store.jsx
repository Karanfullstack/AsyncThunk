import { configureStore } from "@reduxjs/toolkit";
import gitUsers from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    app: gitUsers,
  },
});
