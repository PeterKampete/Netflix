import { URLS } from '../../configs/configs';
import { apiSlice } from './apiSlice';

const moviesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => {
        return URLS.movies.getAll;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = moviesSlice;
