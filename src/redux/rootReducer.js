import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import auth from './features/auth/authSlice';

const rootReducer = combineReducers({
  auth,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
