import { combineReducers, CombinedState, Reducer } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import accountReducer, { AccountState } from './slices/accountSlice';
import profileReducer, { ProfileState } from './slices/profileSlice';
import ratingsReducer, { RatingsState } from './slices/ratingSlice';
import userReducer, { UserState } from './slices/userSlice';
import notificationsReducer, { NotificationState } from './slices/notificationSlice';
import fixesReducer, { FixesStates } from './slices/fixesSlice';
import fixRequestReducer, { FixRequestState } from './slices/fixRequestSlice';
import persistentReducer from './storage/persistentReducer';
import addressReducer, { AddressState } from './slices/addressSlice';

import { PersistentStateModel } from './models/persistentStore/persistentStateModel';
import fixTemplateReducer, { FixTemplateState } from './slices/fixTemplateSlice';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'persist'],
};

export interface RootState {
  persist: PersistentStateModel,
  user: UserState,
  account: AccountState,
  profile: ProfileState,
  ratings: RatingsState,
  fixRequest: FixRequestState,
  fixTemplate: FixTemplateState,
  fixes: FixesStates,
  address: AddressState,
  notifications: NotificationState
}

export const rootReducer: Reducer<CombinedState<RootState>> = combineReducers({
  persist: persistentReducer,
  user: userReducer,
  account: accountReducer,
  profile: profileReducer,
  ratings: ratingsReducer,
  fixRequest: fixRequestReducer,
  fixTemplate: fixTemplateReducer,
  fixes: fixesReducer,
  notifications: notificationsReducer,
  address: addressReducer,
});
