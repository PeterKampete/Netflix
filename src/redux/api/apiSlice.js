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
  endpoints: () => ({}),
});
