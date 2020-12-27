import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import persistentReducer from './persistentReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, persistentReducer);

export const persistentStore = createStore(persistedReducer);
export const persistentStorePersistor = persistStore(persistentStore);
