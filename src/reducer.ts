import { combineReducers } from 'redux';
import accountReducer from './store/account/accountReducer';
import profileReducer from './store/profile/profileReducer';
import ratingsReducer from './store/ratings/ratingsReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  profile: profileReducer,
  ratings: ratingsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;