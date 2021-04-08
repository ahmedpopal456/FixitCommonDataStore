import { UserStatusModel } from '../models/persistentStore/userStatusModel';
import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import {
  SetAuthStatusActionModel,
  SetPushChannelTokenActionModel,
  SetNotificationListActionModel,
  SetUserInfoActionModel,
} from '../models/persistentStore/persistentActionModel';
import NotificationModel from '../models/persistentStore/notificationModel';

const setAuthStatus = (
  authStatus: boolean,
  token: string,
) : SetAuthStatusActionModel => ({
  type: PersistentActionTypesModel.SET_AUTH_STATUS,
  payload: {
    isAuthenticated: authStatus,
    authToken: token,
  },
});

const setUserInfo = (
  id: string,
  userFirstName: string,
  userLastName: string,
  userEmail: string,
  userRole: number,
  userStatus: UserStatusModel,
) : SetUserInfoActionModel => ({
  type: PersistentActionTypesModel.SET_USER_INFO,
  payload: {
    userId: id,
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    role: userRole,
    status: userStatus,
  },
});

const setPushChannelToken = (pushChannelToken: string): SetPushChannelTokenActionModel => ({
  type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
  payload: {
    pushChannelToken,
  },
});

const setNotificationList = (
  notificationList: Record<string, Array<NotificationModel>>,
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
  setUserInfo,
  setPushChannelToken,
  setNotificationList,
};
