import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferPreviewType } from '../types/offer-preview';
import { fillOffersList, requireAuthorization, setUser, getFavoritesOffers, getOffer, getReviews, getNearbyOffers } from './action';
import { setOffersLoadingStatus } from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthType } from '../types/auth';
import { UserType } from '../types/user';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';

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

const updateFavorites = createAsyncThunk<void, {offerId: string; status: number}, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'updateFavorities',
  async ({ offerId, status }, { dispatch, getState, extra: api }) => {
    const { data } = await api.post<OfferPreviewType>(`${APIRoute.Favorite}/${offerId}/${status}`);
    const offers = getState().offers.map((offer) =>
      offer.id === data.id ? data : offer
    );
    dispatch(fillOffersList(offers));

    const favorites = getState().favorites;
    const updatedFavorites = data.isFavorite
      ? [...favorites, data]
      : favorites.filter((fav) => fav.id !== data.id);
    dispatch(getFavoritesOffers(updatedFavorites));
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

const fetchOfferById = createAsyncThunk<void, string, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'fetchOfferById',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${offerId}`);
    dispatch(getOffer(data));
  }
);

const fetchReviewsByOfferId = createAsyncThunk<void, string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'fetchReviewsByOfferId',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(getReviews(data));
  }
);

const fetchNearbyOffersById = createAsyncThunk<void, string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'fetchNearbyOffersById',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferPreviewType[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(getNearbyOffers(data));
  }
);

const updateFavorites = createAsyncThunk<void, {offerId: string; status: number}, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'updateFavorities',
  async ({ offerId, status }, { dispatch, getState, extra: api }) => {
    const { data } = await api.post<OfferPreviewType>(`${APIRoute.Favorite}/${offerId}/${status}`);
    const offers = getState().offers.map((offer) =>
      offer.id === data.id ? data : offer
    );
    dispatch(fillOffersList(offers));

    const favorites = getState().favorites;
    const updatedFavorites = data.isFavorite
      ? [...favorites, data]
      : favorites.filter((fav) => fav.id !== data.id);
    dispatch(getFavoritesOffers(updatedFavorites));

    if (getState().offer?.id === data.id) {
      dispatch(fetchOfferById(data.id));
    }
  }
);

export {fetchOffers, checkAuthAction, loginAction, logoutAction, updateFavorites, fetchFavorites, fetchOfferById, fetchReviewsByOfferId, fetchNearbyOffersById};
