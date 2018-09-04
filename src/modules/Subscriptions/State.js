import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

import * as __ from './Actions';

const selectedApplication = (_="", action) => {
  switch(action.type) {
    case __.SELECT_APPLICATION:
      return action.application_id;
    default:
      return _;
  }
}

const dataInitState = Immutable.OrderedMap();
const data = (_=dataInitState, action) => {
  switch(action.type) {
    case __.FCH_SUBSCRIPTIONS_DONE:
      return _.set(action.application_id, Immutable.fromJS(action.subscriptions));
    default:
      return _;
  }
}

export const subscriptionsReducer = combineReducers({
  selectedApplication,
  data
})
