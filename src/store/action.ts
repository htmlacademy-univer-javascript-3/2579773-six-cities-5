import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, SortingType } from '../const';
import { OfferPreviewType } from '../types/offer-preview';
import { UserType } from '../types/user';

const changeCity = createAction<CityName>('changeCity');
const fillOffersList = createAction<OfferPreviewType[]>('fillOffersList');
const setSortOption = createAction<SortingType>('sort');
const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
const setUser = createAction<UserType>('setUser');

export {changeCity, fillOffersList, setSortOption, setOffersLoadingStatus, requireAuthorization, setUser};
