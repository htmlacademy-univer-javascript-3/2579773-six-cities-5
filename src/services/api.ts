import axios, {AxiosInstance} from 'axios';
import { BASE_URL, TIMEOUT } from '../const';

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  return api;
};

export {createApi};
