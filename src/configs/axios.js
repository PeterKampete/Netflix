// api.js
import axios from 'axios';
import storage from '../storage/mmkvStorage';
import { USER_REFRS } from '../storage/localStorage';
import { baseUrl } from './configs';

// Create an Axios instance
export const axiosInstance = axios.create({ baseURL: baseUrl });

// Request Interceptor for adding token
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await storage.getItem(USER_REFRS.JWT);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error here
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx triggers this function
    return response;
  },
  (error) => {
    // Handle errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error, e.g., logout user or refresh token
      console.log('Unauthorized access detected. Handling it...');
      // You can put logout logic or token refresh logic here
    } else {
      // Log other errors
      console.error('Response error:', error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
