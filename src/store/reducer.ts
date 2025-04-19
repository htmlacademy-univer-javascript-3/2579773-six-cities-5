import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffersList, setSortOption, setOffersLoadingStatus, requireAuthorization, setUser, getFavoritesOffers } from './action';
import { CityName, SortingType, AuthorizationStatus } from '../const';
import { OfferPreviewType } from '../types/offer-preview';
import { UserType } from '../types/user';
import { updateFavorites } from './api-actions';

type StateType = {
  city: CityName;
  offers: OfferPreviewType[];
  sortOption: SortingType;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserType | null;
  favorites: OfferPreviewType[];
};

const initialState: StateType = {
  city: CityName.Paris,
  offers: [],
  sortOption: SortingType.Popular,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  favorites: []
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
    .addCase(updateFavorites.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      const offerIndex = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      if (offerIndex !== -1) {
        state.offers[offerIndex] = updatedOffer;
      }
      if (updatedOffer.isFavorite) {
        state.favorites.push(updatedOffer);
      } else {
        state.favorites = state.favorites.filter((fav) => fav.id !== updatedOffer.id);
      }
    });
});

export {reducer};
