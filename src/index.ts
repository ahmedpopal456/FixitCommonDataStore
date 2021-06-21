import { Reducer, applyMiddleware, createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
import {
  Provider, connect, useSelector, useDispatch,
} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import ConfigFactory from './config/factory/configFactory';
import * as persistentActions from './storage/persistentActions';
import ApplicationTypesEnum from './models/config/applicationTypesEnum';
import { ConfigModel } from './models/config/configModel';
import { PersistentStateModel } from './models/persistentStore/persistentStateModel';
import { RootState, rootReducer, persistConfig } from './rootReducer';
import ProfileService from './services/profileService';
import RatingsService from './services/ratingsService';
import FixesService from './services/fixesService';
import * as notificationActions from './slices/notificationSlice';
import * as userSlice from './slices/userSlice';
import FixRequestService from './services/fixRequestService';
import * as fixRequestSlice from './slices/fixRequestSlice';
import { ProfileModel } from './slices/profileSlice';
import NotificationModel from './models/notification/notificationModel';
import { FixesModel } from './slices/fixesSlice';
import { UserSummaryModel } from './models/user/userSummaryModel';
import { RatingsModel } from './slices/ratingSlice';
import { AddressModel } from './models/common/addressModel';

const persistedRootReducer: Reducer<RootState & PersistPartial, any> = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedRootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {
  ConfigFactory,
  Provider,
  PersistGate,
  store,
  persistor,
  persistentActions,
  notificationActions,
  fixRequestSlice as fixRequestActions,
  userSlice as userActions,
  ProfileService,
  RatingsService,
  FixesService,
  FixRequestService,
  connect,
  useSelector,
  useDispatch,
};

type UserModel = userSlice.UserModel;
type FixRequestModel = fixRequestSlice.FixRequestModel;
type FixTemplateObjectModel = fixRequestSlice.FixTemplateObjectModel;
type SectionModel = fixRequestSlice.SectionModel;
type SectionDetailsModel = fixRequestSlice.SectionDetailsModel;
type TagModel = fixRequestSlice.TagModel;

export type {
  ConfigModel as Config,
  PersistentStateModel as PersistentState,
  RootState as StoreState,
  FixRequestModel,
  NotificationModel,
  ProfileModel,
  RatingsModel,
  FixesModel,
  UserModel,
  FixTemplateObjectModel,
  SectionModel,
  SectionDetailsModel,
  TagModel,
  AddressModel,
  ApplicationTypesEnum,
  UserSummaryModel,
};
