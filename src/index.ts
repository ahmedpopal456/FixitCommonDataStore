import { PersistGate } from 'redux-persist/integration/react';
import { applyMiddleware, createStore, Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import ConfigFactory from './config/factory/configFactory';
import * as persistentActions from './storage/persistentActions';
import { persistentStore, persistentStorePersistor } from './storage/persistentStore';
import ApplicationTypesEnum from './models/config/applicationTypesEnum';
import { ConfigModel } from './models/config/configModel';
import { PersistentStateModel } from './models/persistentStore/persistentStateModel';
import rootReducer, { RootState } from './reducer';
import ProfileService from './services/profileService';
import RatingsService from './services/ratingsService';

const store = createStore(
  rootReducer,
  applyMiddleware<ThunkDispatch<RootState, undefined, Action<any>>, RootState>(thunk),
);

export {
  ConfigFactory,
  persistentStore,
  persistentStorePersistor,
  persistentActions,
  ProfileService,
  RatingsService,
  store,
  ApplicationTypesEnum,
  PersistGate,
  Provider,
  connect,
};

export type {
  ConfigModel as Config,
  PersistentStateModel as PersistentState,
};
