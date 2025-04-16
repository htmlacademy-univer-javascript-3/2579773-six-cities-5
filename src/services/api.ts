import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { AppRoute, BASE_URL, TIMEOUT } from '../const';
import { getToken } from './token';
import browserHistory from '../browser-history';

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string}>) => {
      if (error.response?.status === 401) {
        browserHistory.push(AppRoute.NotFound);
      }
      throw error;
    });

  return api;
};

export {createApi};
