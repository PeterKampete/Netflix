import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  devotionals: null,
};

const authSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
