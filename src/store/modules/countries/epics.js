import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as countriesActions from './actions';
import UnsplashService from 'services/unplashService.js'
import { listCountries } from './models/constants'
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
      for (let item in listCountries) {
        const country = Country()
        const res = await unsplashService.getImages(listCountries[item])
        const subrt = Math.floor(Math.random() * 4) + 2 

        country.setNameCountry(listCountries[item])
        country.setListImgs(res.splice(0, subrt))
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
    Control.startInterval(country)


    return countriesActions.selectCountrySuccess(payload.index)
  }),
);

