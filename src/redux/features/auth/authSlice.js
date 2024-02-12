import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  tmdbToken: null,
  isLoading: false,
  error: null,
  signin: 'normal',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.user = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setTMDBToken: (state, { payload }) => {
      state.tmdbToken = payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setSignin: (state, { payload }) => {
      state.signin = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { logout, setToken, setUserInfo, setSignin, setTMDBToken } =
  authSlice.actions;
export default authSlice.reducer;
