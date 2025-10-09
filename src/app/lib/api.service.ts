import axios from 'axios';
import { IClient } from './interfaces';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiService.interceptors.request.use(
  (config) => {
    // You can add authentication tokens here
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    console.log('Request:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiService.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    // Handle errors globally, e.g., redirect to login on 401
    if (error.response && error.response.status === 401) {
      // Redirect to login page or refresh token
      console.log('Unauthorized, redirecting to login...');
    }
    return Promise.reject(error);
  }
);

// Sample POST request function
export const postData = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response = await apiService.post<T>(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw error;
  }
};


// create a client
export const createSingleClient = async <T>( data: any): Promise<IClient> => {
  try {
    const response = await apiService.post<IClient>('/coaches/clients/create-single-client', data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data:`, error);
    throw error;
  }
};


export default apiService;
