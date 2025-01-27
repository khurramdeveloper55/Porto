import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
  },
});

export default store;
