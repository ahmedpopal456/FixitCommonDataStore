import PersistentActionTypes from '../models/persistentStore/persistentActionTypes';
import { PersistentState } from '../models/persistentStore/persistentState';
import { PersistentAction } from '../models/persistentStore/persistentAction';

const initialState: PersistentState = {
  darkMode: false,
};

export default function persistentReducer(state = initialState, action: PersistentAction)
: PersistentState {
  switch (action.type) {
    case PersistentActionTypes.SET_LIGHT_MODE_PREFERENCE:
      return {
        ...state,
        darkMode: false,
      };
    case PersistentActionTypes.SET_DARK_MODE_PREFERENCE:
      return {
        ...state,
        darkMode: true,
      };
    default:
      return state;
  }
}
