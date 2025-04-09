import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../services/api';

const api = createApi();
const store = configureStore({
  reducer,
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});

export {store, api};
