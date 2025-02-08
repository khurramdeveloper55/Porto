import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minPrice: "",
  maxPrice: "",
  sortOption: "default",
  visibleCount: 12,
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateCount: (state, action) => {
      state.visibleCount = action.payload;
      state.currentPage = 1;
    },
    filterPrice: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
      state.currentPage = 1;
    },
    updateSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    clearFilter: (state, action) => {
      state.minPrice = "";
      state.maxPrice = "";
      state.sortOption = "default";
      state.visibleCount = 12;
    },
  },
});

export const {
  updateCount,
  filterPrice,
  updateSortOption,
  updateCurrentPage,
  clearFilter,
} = filterSlice.actions;
export const selectFilter = (state) => state.filter;
export default filterSlice.reducer;
