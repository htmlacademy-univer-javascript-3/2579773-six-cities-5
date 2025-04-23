import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, SortingType } from '../const';
import { OfferPreviewType } from '../types/offer-preview';
import { UserType } from '../types/user';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';

const changeCity = createAction<CityName>('changeCity');
const fillOffersList = createAction<OfferPreviewType[]>('fillOffersList');
const setSortOption = createAction<SortingType>('sort');
const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
const setUser = createAction<UserType>('setUser');
const getFavoritesOffers = createAction<OfferPreviewType[]>('getFavorites');
const getOffer = createAction<OfferType>('getOffer');
const getReviews = createAction<ReviewType[]>('getReviews');
const getNearbyOffers = createAction<OfferPreviewType[]>('getNearbyOffers');
const addReview = createAction<ReviewType>('addReview');

export {changeCity, fillOffersList, setSortOption, setOffersLoadingStatus, requireAuthorization, setUser, getFavoritesOffers, getOffer, getReviews, getNearbyOffers, addReview};
