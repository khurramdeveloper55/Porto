import { createSlice } from "@reduxjs/toolkit";
const storeWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
const initialState = {
  items: storeWishlist,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      state.items.push({ ...item });
      localStorage.setItem("wishlistItems", JSON.stringify(state.items));
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("wishlistItems", JSON.stringify(state.items));
    },
  },
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
