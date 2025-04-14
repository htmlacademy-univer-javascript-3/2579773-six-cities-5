import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, SortingType } from '../const';
import { OfferPreviewType } from '../types/offer-preview';

const changeCity = createAction<CityName>('changeCity');
const fillOffersList = createAction<OfferPreviewType[]>('fillOffersList');
const setSortOption = createAction<SortingType>('sort');
const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export {changeCity, fillOffersList, setSortOption, setOffersLoadingStatus, requireAuthorization};
