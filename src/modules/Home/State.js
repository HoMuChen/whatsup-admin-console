import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

import * as __ from './Actions';

const categoriesInitState = Immutable.OrderedMap()
const categories = (_=categoriesInitState, action) => {
  switch(action.type) {
    case __.FCH_CATEGORIES_DONE:
      return Immutable.fromJS(action.categories)
        .map(row => Immutable.OrderedMap().set(row.get('id'), row))
        .reduce((cur, next, _) => cur.merge(next),Immutable.OrderedMap());
    default:
      return _;
  }
}

const questionsInitState = Immutable.OrderedMap()
const questions = (_=questionsInitState, action) => {
  switch(action.type) {
    case __.FCH_LATEST_QUESTIONS_DONE:
      return Immutable.fromJS(action.questions)
        .map(row => Immutable.OrderedMap().set(row.get('id'), row))
        .reduce((cur, next, _) => cur.merge(next),Immutable.OrderedMap());
    default:
      return _;
  }
}

export const homeReducer = combineReducers({
  categories,
  questions,
})
