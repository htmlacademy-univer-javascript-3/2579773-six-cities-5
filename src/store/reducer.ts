import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffersList } from './action';
import { CityName } from '../const';
import { OfferPreviewType } from '../types/offer-preview';
import { offers } from '../mocks/offers';

type StateType = {
  city: CityName;
  offers: OfferPreviewType[];
};

const initialState: StateType = {
  city: CityName.Paris,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state) => {
      state.offers = offers;
    });
});

export {reducer};
