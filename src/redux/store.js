import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import filterReducer from "./slices/filterSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
    user: userReducer,
  },
});

export default store;
