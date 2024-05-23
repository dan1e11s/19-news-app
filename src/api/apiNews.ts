import axios from 'axios';
import {
  CategoriesApiResponse,
  NewsApiResponse,
  ParamsType,
} from '../interfaces';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const BASE_API = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (
  params?: ParamsType
): Promise<NewsApiResponse> => {
  try {
    const { page_number, page_size, category, keywords } = params || {};

    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
      params: {
        apiKey: BASE_API,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: 'error' };
  }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(
      `${BASE_URL}latest-news`,
      {
        params: {
          apiKey: BASE_API,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: 'error' };
  }
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
  try {
    const response = await axios.get<CategoriesApiResponse>(
      `${BASE_URL}available/categories`,
      {
        params: {
          apiKey: BASE_API,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { categories: [], description: '', status: 'error' };
  }
};
