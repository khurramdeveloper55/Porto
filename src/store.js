import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./services/cartSlice";
import wishlistReducer from "./services/wishlistSlice";
import filterReducer from "./services/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
  },
});

export default store;
