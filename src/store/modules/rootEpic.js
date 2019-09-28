import { combineEpics } from 'redux-observable';
import { countryEpic, selectCountryEpic, resetCountryEpic } from './countries/epics';

const epics = [
  countryEpic,
  selectCountryEpic,
  resetCountryEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
