import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../const';

const changeCity = createAction<CityName>('changeCity');
const fillOffersList = createAction('fillOffersList');

export {changeCity, fillOffersList};
