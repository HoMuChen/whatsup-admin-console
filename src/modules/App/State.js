import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

import authService from '../../utils/authService';

import * as __ from './Actions';

const userInitState = Immutable.Map()
const user = (_=userInitState, action) => {
  switch(action.type) {
    case __.FCH_USER_DONE:
      return Immutable.fromJS(action.user);
    case __.CLR_USER:
      authService.logout();
      return Immutable.Map();
    default:
      return _;
  }
}

export const appReducer = combineReducers({
  user,
})
