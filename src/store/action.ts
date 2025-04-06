import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../const';
import { OfferPreviewType } from '../types/offer-preview';

const changeCity = createAction<CityName>('changeCity');
const fillOffersList = createAction<OfferPreviewType[]>('fillOffersList');

export {changeCity, fillOffersList};
