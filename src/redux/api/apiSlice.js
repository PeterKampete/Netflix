import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS, TMDBBaseUrl } from '../../configs/configs';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: TMDBBaseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.tmdbToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: URLS.auth.login,
        method: 'POST',
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: URLS.auth.register,
        method: 'POST',
        body: userData,
      }),
    }),
    getMovies: builder.query({
      query: () => {
        return URLS.movies.getAll;
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetMoviesQuery,
} = apiSlice;
