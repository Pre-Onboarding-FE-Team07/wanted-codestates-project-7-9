import { combineReducers } from 'redux';
import review from './review';
import comment from './comment';

const rootReducer = combineReducers({
  review,
  comment,
});
export default rootReducer;
