import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import {
  SetAuthStatusActionModel,
  SetPushChannelTokenActionModel,
  SetNotificationListActionModel,
} from '../models/persistentStore/persistentActionModel';
import NotificationListObjModel from '../models/persistentStore/notificationListObjModel';

const setAuthStatus = (authStatus: boolean, token: string): SetAuthStatusActionModel => ({
  type: PersistentActionTypesModel.SET_AUTH_STATUS,
  payload: {
    isAuthenticated: authStatus,
    authToken: token,
  },
});

const setPushChannelToken = (pushChannelToken: string): SetPushChannelTokenActionModel => ({
  type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
  payload: {
    pushChannelToken,
  },
});

const setNotificationList = (
  notificationList: Record<string, Array<NotificationListObjModel>>,
  unseenNotificationsNumber: number,
) : SetNotificationListActionModel => ({
  type: PersistentActionTypesModel.SET_NOTIFICATION_LIST,
  payload: {
    notificationList,
    unseenNotificationsNumber,
  },
});

export default {
  setAuthStatus,
  setPushChannelToken,
  setNotificationList,
};
