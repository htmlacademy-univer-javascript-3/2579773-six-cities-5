import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import { BASE_URL, TIMEOUT } from '../const';
import { getToken } from './token';

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

  return api;
};

export {createApi};
