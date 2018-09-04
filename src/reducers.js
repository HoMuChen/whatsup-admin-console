import { combineReducers } from 'redux-immutable';

import { appReducer } from './modules/App/State';
import { applicationsReducer } from './modules/Applications/State';
import { subscriptionsReducer } from './modules/Subscriptions/State';

const Reducers = combineReducers({
  app:            appReducer,
  applications:   applicationsReducer,
  subscriptions:  subscriptionsReducer,
})

export default Reducers;
