import * as typeActions from './typeActions';
import { produce } from 'immer';
import Control from './models/control.model';

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

    case typeActions.SELECT_COUNTRY_IMAGE:
      return produce(state, draft => {
        const country = state.countries[state.selectedCountry]
        country.setIndexCountry(action.payload.index)
        country.setCont(0)
        const cons = [...state.countries]
        cons.splice(state.selectedCountry, 1, country)
        draft.countries = [...cons]
      })

    case typeActions.RESET_COUNTRY_SUCCESS:
      return produce(state, draft => {
        const country = state.countries[state.selectedCountry]
        country.setCont(0)
        const cons = [...state.countries]
        cons.splice(state.selectedCountry, 1, country)
        draft.countries = [...cons]

        draft.selectedCountry = null;
      })


    // ************************** UPDATE COUNTRY **************************
    case typeActions.UPDATE_CONT_COUNTRY:
      return produce(state, draft => {
        const country = state.countries[action.payload.indexCountry]
        country.setCont(country.getCont() + 1)

        // Quando estourar o timer, muda a imagem...
        if (country.getCont() === country.getTimer()) {
          country.setIndexCountry(country.getIndexCountry() + 1)
          country.setCont(0)
        }

        // Se já passou por todas as imagens, fecha os slides
        if (country.getIndexCountry() === country.getTotal()) {
          const cons = [...state.countries]
          country.setCont(0)
          country.setIndexCountry(0)
          cons.splice(state.selectedCountry, 1, country)
          draft.countries = [...cons]

          // Muda para o prómixo país
          if ((state.selectedCountry + 1) < state.countries.length) {
            Control.stopInterval()
            draft.selectedCountry = state.selectedCountry + 1
            Control.startInterval()
          }
          else {
            draft.selectedCountry = null
          }
        }

        if (state.selectedCountry !== null) {
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


