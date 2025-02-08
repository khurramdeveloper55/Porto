import { createSlice } from "@reduxjs/toolkit";

const storeCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const calculateSubtotal = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};
const initialState = {
  items: storeCart,
  subtotal: calculateSubtotal(storeCart),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (product) => product.id === item.id && product.color === item.color
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({ ...item });
      }
      state.subtotal = calculateSubtotal(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.subtotal = calculateSubtotal(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
      state.subtotal = calculateSubtotal(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.subtotal = calculateSubtotal(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
