import { combineEpics } from 'redux-observable';
import { countryEpic, selectCountryEpic } from './countries/epics';

const epics = [
  countryEpic,
  selectCountryEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
