import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../api/apiAuth";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async () => {
    const user = await getCurrentUser();
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
