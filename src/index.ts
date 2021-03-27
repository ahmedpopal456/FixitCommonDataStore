import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { applyMiddleware, createStore, Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import ConfigFactory from './config/factory/configFactory';
import * as persistentActions from './storage/persistentActions';
import { persistentStore, persistentStorePersistor, persistentContext } from './storage/persistentStore';
import ApplicationTypesEnum from './models/config/applicationTypesEnum';
import { ConfigModel } from './models/config/configModel';
import { PersistentStateModel } from './models/persistentStore/persistentStateModel';
import rootReducer, { RootState } from './reducer';
import ProfileService from './services/profileService';
import RatingsService from './services/ratingsService';
import FixesService from './services/fixesService';
import * as notificationActions from './store/notifications/notificationActions';
import * as fixRequestActions from './store/fixRequest/fixRequestActions';
import FixRequestService from './services/fixRequestService';
import { FixRequestObjModel } from './models/fixRequest/fixRequestObjModel';
import NotificationModel from './models/persistentStore/notificationModel';
import { ProfileModel } from './models/profile/profileModel';
import { RatingsModel } from './models/ratings/ratingsModel';
import { FixesModel } from './models/fixes/fixesModel';
import { UserStatusModel } from './models/persistentStore/userStatusModel';

const store = createStore(
  rootReducer,
  applyMiddleware<ThunkDispatch<RootState, undefined, Action<any>>, RootState>(thunk),
);
const rootContext = React.createContext('rootContext');

export {
  ConfigFactory,
  persistentStore,
  persistentStorePersistor,
  persistentActions,
  persistentContext,
  ProfileService,
  RatingsService,
  FixesService,
  store,
  notificationActions,
  rootContext,
  ApplicationTypesEnum,
  PersistGate,
  Provider,
  connect,
  fixRequestActions,
  FixRequestService,
};
export type {
  ConfigModel as Config,
  PersistentStateModel as PersistentState,
  RootState as StoreState,
  FixRequestObjModel,
  NotificationModel,
  ProfileModel,
  RatingsModel,
  FixesModel,
  UserStatusModel,
};
