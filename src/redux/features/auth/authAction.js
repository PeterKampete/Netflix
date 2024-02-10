import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../configs/axios';
import { URLS } from '../../../configs/configs';

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      // Replace this with your login API call
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for registering a user
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      // Replace this with your registration API call
      const response = await axiosInstance.post(URLS.auth.register, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
