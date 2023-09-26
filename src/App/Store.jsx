import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Feature/CartSlice";

const store = configureStore({
  reducer: {
    allCart: CartReducer,
  },
});

export default store