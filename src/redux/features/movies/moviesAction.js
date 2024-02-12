import { createAsyncThunk } from '@reduxjs/toolkit';
import { URLS } from '../../../configs/configs';
import axiosInstance from '../../../configs/axios';

const getMovies = createAsyncThunk(
  'movies/getAll',
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(URLS.movies.getAll);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export { getMovies };
