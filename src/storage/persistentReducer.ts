import { AnyAction } from 'redux';
import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import { PersistentStateModel } from '../models/persistentStore/persistentStateModel';

const initialState: PersistentStateModel = {
  pushChannelToken: undefined,
  notificationList: { notifications: [] },
  unseenNotificationsNumber: 0,
};

export default function persistentReducer(state = initialState, action: AnyAction) // NOSONAR
  : PersistentStateModel {
  switch (action.type) {
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
