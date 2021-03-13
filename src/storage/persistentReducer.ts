import { AnyAction } from 'redux';
import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import { PersistentStateModel } from '../models/persistentStore/persistentStateModel';

const initialState: PersistentStateModel = {
  user: {
    isAuthenticated: false,
    authToken: undefined,
  },
  pushChannelToken: undefined,
};

export default function persistentReducer(state = initialState, action: AnyAction) // NOSONAR
  : PersistentStateModel {
  switch (action.type) {
    case PersistentActionTypesModel.SET_AUTH_STATUS:
      return {
        ...state,
        user: {
          isAuthenticated: action.payload.isAuthenticated,
          authToken: action.payload.authToken,
        },
      };
    case PersistentActionTypesModel.SET_NOTIFICATION_TOKEN:
      return {
        ...state,
        pushChannelToken: action.payload.pushChannelToken,
      };
    default:
      return state;
  }
}
