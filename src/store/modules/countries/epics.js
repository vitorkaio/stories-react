import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as countriesActions from './actions';
import UnsplashService from 'services/unplashService.js'
import { listCountries, randomImages } from './models/constants'
import Country from './models/country.model'
import stores from 'store/store';
import Control from './models/control.model';

// ***************************** READ Countries *****************************

export const countryEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.COUNTRIES_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (_) => {
    try {
      const unsplashService = UnsplashService()
      // const countries = await unsplashService.getImages('costa rica')
      const countries = []
      const allCountries = listCountries(4)
      for (let item in allCountries) {
        const country = Country()
        const res = await unsplashService.getImages(allCountries[item])

        country.setNameCountry(allCountries[item])
        country.setListImgs(randomImages([...res]))
        country.setTotal(country.getListImgs().length)

        countries.push(country)
      }
      return countriesActions.countriesSuccess([...countries]);
    } 
    catch (_) {
      return countriesActions.countriesFail()
    }
  }),
);


// ***************************** START CONTROL *****************************
export const selectCountryEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.SELECT_COUNTRY),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {
    const { payload } = action
    const country = stores.getState().countriesReducer.countries[payload.index]
    await Control.startInterval(country)


    return countriesActions.selectCountrySuccess(payload.index)
  }),
);


// ***************************** STOP CONTROL *****************************
export const resetCountryEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.RESET_COUNTRY),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (_) => {
    await Control.stopInterval()
    return countriesActions.resetCountrySuccess()
  }),
);

