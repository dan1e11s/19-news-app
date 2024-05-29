import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  CategoriesApiResponse,
  NewsApiResponse,
  ParamsType,
} from '../../interfaces';
import { setNews } from '../slices/newsSlice';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const BASE_API = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { page_number, page_size, category, keywords } = params || {};

        return {
          url: 'search',
          params: {
            apiKey: BASE_API,
            page_number,
            page_size,
            category,
            keywords,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setNews(data.news));
      },
    }),
    getLatestNews: builder.query<NewsApiResponse, null>({
      query: () => {
        return {
          url: 'latest-news',
          params: {
            apiKey: BASE_API,
          },
        };
      },
    }),
    getCategories: builder.query<CategoriesApiResponse, null>({
      query: () => {
        return {
          url: 'available/categories',
          params: {
            apiKey: BASE_API,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery } =
  newsApi;
