import { AnyAction } from 'redux';
import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import { PersistentStateModel } from '../models/persistentStore/persistentStateModel';

const initialState: PersistentStateModel = {
  user: {
    isAuthenticated: false,
    authToken: undefined,
    userId: undefined,
    firstName: undefined,
    lastName: undefined,
    role: undefined,
    status: undefined,
  },
  pushChannelToken: undefined,
  notificationList: { notifications: [] },
  unseenNotificationsNumber: 0,
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
          userId: action.payload.userId,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          role: state.user.role,
          status: state.user.status,
        },
      };
    case PersistentActionTypesModel.SET_USER_INFO:
      return {
        ...state,
        user: {
          isAuthenticated: state.user.isAuthenticated,
          authToken: state.user.authToken,
          userId: action.payload.userId,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          role: action.payload.role,
          status: action.payload.status,
        },
      };
    case PersistentActionTypesModel.SET_NOTIFICATION_TOKEN:
      return {
        ...state,
        pushChannelToken: action.payload.pushChannelToken,
      };
    case PersistentActionTypesModel.SET_NOTIFICATION_LIST:
      return {
        ...state,
        notificationList: action.payload.notificationList,
        unseenNotificationsNumber: action.payload.unseenNotificationsNumber,
      };
    default:
      return state;
  }
}
