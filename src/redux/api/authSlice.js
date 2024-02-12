import { URLS } from '../../configs/configs';
import { apiSlice } from './apiSlice';

const authSlice = apiSlice.injectEndpoints({
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
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authSlice;
