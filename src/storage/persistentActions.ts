import PersistentActionTypes from '../models/persistentStore/persistentActionTypes';
import { PersistentAction } from '../models/persistentStore/persistentAction';

export const setLightModePreference = (): PersistentAction => ({
  type: PersistentActionTypes.SET_LIGHT_MODE_PREFERENCE,
});

export const setDarkModePreference = (): PersistentAction => ({
  type: PersistentActionTypes.SET_DARK_MODE_PREFERENCE,
});
