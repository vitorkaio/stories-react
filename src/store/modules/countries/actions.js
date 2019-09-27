import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const countriesRequest = () => action(typeActions.COUNTRIES_REQUEST);
export const countriesSuccess = (countries) => action(typeActions.COUNTRIES_SUCCESS, { countries });
export const countriesFail = () => action(typeActions.COUNTRIES_FAIL);

export const selectCountry = (index) => action(typeActions.SELECT_COUNTRY, { index });
export const resetCountry = () => action(typeActions.RESET_COUNTRY);

export const updateContCountry = (indexCountry) => action(typeActions.UPDATE_CONT_COUNTRY, { indexCountry });
export const resetContCountry = () => action(typeActions.RESET_CONT_COUNTRY);
