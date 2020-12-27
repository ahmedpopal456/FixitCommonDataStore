import { combineReducers } from 'redux';
import userReducer from './store/slices/user/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
