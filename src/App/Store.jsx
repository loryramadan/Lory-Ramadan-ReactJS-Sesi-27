import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../feature/CartSlice";

const store = configureStore({
  reducer: {
    allCart: CartReducer,
  },
});

export default store