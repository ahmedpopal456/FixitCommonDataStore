import { PersistGate } from 'redux-persist/integration/react';
import { Provider, connect } from 'react-redux';
import ConfigFactory from './config/factory/configFactory';
import * as persistentActions from './storage/persistentActions';
import { persistentStore, persistentStorePersistor } from './storage/persistentStore';
import ApplicationTypesEnum from './models/config/applicationTypesEnum';
import NativeAuthService from './services/native/nativeAuthService';
import * as B2CTypes from './models/auth/B2CTypes';
import { ConfigModel } from './models/config/configModel';
import { PersistentStateModel } from './models/persistentStore/persistentStateModel';

const nativeServices = {
  NativeAuthService,
};

export {
  B2CTypes,
  ConfigFactory,
  persistentStore,
  persistentStorePersistor,
  persistentActions,
  ApplicationTypesEnum,
  nativeServices,
  PersistGate,
  Provider,
  connect,
};

export type {
  ConfigModel as Config,
  PersistentStateModel as PersistentState,
};
