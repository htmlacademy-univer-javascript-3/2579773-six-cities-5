import { createAction } from '@reduxjs/toolkit';
import { CityName, SortingType } from '../const';
import { OfferPreviewType } from '../types/offer-preview';

const changeCity = createAction<CityName>('changeCity');
const fillOffersList = createAction<OfferPreviewType[]>('fillOffersList');
const setSortOption = createAction<SortingType>('sort');
const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export {changeCity, fillOffersList, setSortOption, setOffersLoadingStatus};
