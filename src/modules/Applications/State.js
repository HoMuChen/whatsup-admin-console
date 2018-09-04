import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

import * as __ from './Actions';

const appsInitState = Immutable.OrderedMap()
const apps = (_=appsInitState, action) => {
  switch(action.type) {
    case __.FCH_APPLICATIONS_DONE:
      return Immutable.fromJS(action.applications)
        .map(row => Immutable.OrderedMap().set(row.get('id'), row))
        .reduce((cur, next, _) => cur.merge(next),Immutable.OrderedMap());
    case __.ADD_APPLICATION_DONE:
      return _.set(action.application.id, Immutable.fromJS(action.application));
    case __.DELETE_APPLICATION_DONE:
      return _.delete(action.id);
    default:
      return _;
  }
}

const isAdding = (_=false, action) => {
  switch(action.type) {
    case __.TGL_ADD_APPLICATION:
      return !_;
    default:
      return _;
  }
}

export const applicationsReducer = combineReducers({
  apps,
  isAdding,
})
