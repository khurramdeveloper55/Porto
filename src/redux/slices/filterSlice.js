import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPrice: "",
  maxPrice: "",
  sortOption: "default",
  visibleCount: 12,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCount: (state, action) => {
      state.visibleCount = action.payload;
    },
    filterPrice: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    updateSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const { updateCount, filterPrice, updateSortOption } =
  filterSlice.actions;
export const selectFilter = (state) => state.filter;
export default filterSlice.reducer;
