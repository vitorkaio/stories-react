import { combineEpics } from 'redux-observable';
import { countryEpic } from './countries/epics';

const epics = [
  countryEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
