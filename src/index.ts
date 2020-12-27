import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer, { RootState } from './reducer';
import ConfigFactory from './config/factory/configFactory';
import initUserActions from './store/slices/user/userActions';
import UserService from './services/userService';
import * as persistentActions from './storage/persistentActions';
import { persistentStore, persistentStorePersistor } from './storage/persistentStore';
import ApplicationTypesEnum from './models/config/applicationTypesEnum';

const store = createStore(
  rootReducer,
  applyMiddleware<ThunkDispatch<RootState, undefined, Action<any>>, RootState>(thunk),
);

export default {
  store,
  ConfigFactory,
  UserService,
  initUserActions,
  persistentStore,
  persistentStorePersistor,
  persistentActions,
  ApplicationTypesEnum,
};

export type { Config } from './models/config/config';
