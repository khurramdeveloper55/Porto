import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./services/cartSlice";
import wishlistReducer from "./services/wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
