import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferPreviewType } from '../types/offer-preview';
import { fillOffersList } from './action';

const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreviewType[]>(APIRoute.Offers);
    dispatch(fillOffersList(data));
  },
);

export {fetchOffers};
