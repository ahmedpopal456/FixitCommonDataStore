import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import persistentReducer from './persistentReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, persistentReducer);

export const persistentStore = createStore(persistedReducer);
export const persistentStorePersistor = persistStore(persistentStore);
