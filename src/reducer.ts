import { combineReducers } from 'redux';
import accountReducer from './store/account/accountReducer';
import fixesReducer from './store/fixes/fixesReducer';
import profileReducer from './store/profile/profileReducer';
import ratingsReducer from './store/ratings/ratingsReducer';
import fixRequestReducer from './store/fixRequest/fixRequestReducer';
import notificationsReducer from './store/notifications/notificationsReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  profile: profileReducer,
  ratings: ratingsReducer,
  fixRequest: fixRequestReducer,
  fixes: fixesReducer,
  notifications: notificationsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
