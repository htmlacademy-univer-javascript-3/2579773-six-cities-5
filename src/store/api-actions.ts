import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferPreviewType } from '../types/offer-preview';
import { fillOffersList, requireAuthorization, setUser, getFavoritesOffers } from './action';
import { setOffersLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthType } from '../types/auth';
import { UserType } from '../types/user';

const fetchOffers = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(fillOffersList(data));
  },
);

const fetchFavorites = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'getFavoritesOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Favorite);
    dispatch(getFavoritesOffers(data));
  },
);

const updateFavorites = createAsyncThunk<OfferPreviewType, {offerId: string; status: number}, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'updateFavorities',
  async ({ offerId, status }, { extra: api }) => {
    const { data } = await api.post<OfferPreviewType>(`${APIRoute.Favorite}/${offerId}/${status}`);
    return data;
  }
);

const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserType>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

const loginAction = createAsyncThunk<void, AuthType, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUser(data));
  },
);

const logoutAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export {fetchOffers, checkAuthAction, loginAction, logoutAction, updateFavorites, fetchFavorites};
