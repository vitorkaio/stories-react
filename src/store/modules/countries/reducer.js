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

    case typeActions.SELECT_COUNTRY:
      return produce(state, draft => {
        draft.selectedCountry = action.payload.index;
      })

    case typeActions.RESET_COUNTRY:
      return produce(state, draft => {
        draft.selectedCountry = null;
      })

    default:
      return state;
  }
}; // Fim do reducers

export default countriesReducer;


