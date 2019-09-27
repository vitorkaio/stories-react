import * as typeActions from './typeActions';
import { produce } from 'immer';

const countriesInitial = {
  countries: [],
  load: false,
  error: false,

  selectedCountry: null,
};

const countriesReducer = (state = countriesInitial, action) => {
  switch (action.type) {

    case typeActions.COUNTRIES_REQUEST:
      return produce(state, draft => {
        draft.load = true;
        draft.error = false;
      });

    case typeActions.COUNTRIES_SUCCESS:
      return produce(state, draft => {
        draft.countries = action.payload.countries;
        draft.load = false;
        draft.error = false;
      })

    case typeActions.COUNTRIES_FAIL:
      return produce(state, draft => {
        draft.countries = [];
        draft.load = false;
        draft.error = true;
      })
    
    // ************************** SELETECTED COUNTRY **************************

    case typeActions.SELECT_COUNTRY_SUCCESS:
      return produce(state, draft => {
        draft.selectedCountry = action.payload.index;
      })

    case typeActions.RESET_COUNTRY:
      return produce(state, draft => {
        draft.selectedCountry = null;
      })


    // ************************** UPDATE COUNTRY **************************
    case typeActions.UPDATE_CONT_COUNTRY:
      return produce(state, draft => {
        const country = state.countries[action.payload.indexCountry]
        country.setCont(country.getCont() + 1)
        if (country.getCont() === country.getTimer()) {
          country.setIndexCountry(country.getIndexCountry() + 1)
          country.setCont(0)
        }
        if (country.getIndexCountry() === country.getTotal()) {
          draft.selectedCountry = null
        }

        else if (state.selectedCountry !== null) {
          // draft.countries.splice(state.selectedCountry, 1, country)
          const cons = [...state.countries]
          cons.splice(state.selectedCountry, 1, country)
          draft.countries = [...cons]
        }
        
      })
    

    default:
      return state;
  }
}; // Fim do reducers

export default countriesReducer;

