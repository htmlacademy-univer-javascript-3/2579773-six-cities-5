import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffersList, setSortOption, setOffersLoadingStatus, requireAuthorization, setUser, getFavoritesOffers, getOffer, getReviews, getNearbyOffers, addReview } from './action';
import { CityName, SortingType, AuthorizationStatus } from '../const';
import { OfferPreviewType } from '../types/offer-preview';
import { UserType } from '../types/user';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';

type StateType = {
  city: CityName;
  offers: OfferPreviewType[];
  sortOption: SortingType;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserType | null;
  favorites: OfferPreviewType[];
  offer: OfferType | null;
  reviews: ReviewType[];
  nearbyOffers: OfferPreviewType[];
  review: ReviewType | null;
};

const initialState: StateType = {
  city: CityName.Paris,
  offers: [],
  sortOption: SortingType.Popular,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  favorites: [],
  offer: null,
  reviews: [],
  nearbyOffers: [],
  review: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(getFavoritesOffers, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.review = action.payload;
    });
});

export {reducer};
