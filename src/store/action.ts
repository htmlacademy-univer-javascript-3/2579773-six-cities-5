import { createAction } from '@reduxjs/toolkit';

const changeCity = createAction('changeCity');
const fillOffersList = createAction('fillOffersList');

export {changeCity, fillOffersList};
