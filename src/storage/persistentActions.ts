import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import {
  SetPushChannelTokenActionModel,
  SetNotificationListActionModel,
} from '../models/persistentStore/persistentActionModel';
import NotificationModel from '../models/notification/notificationModel';

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
  setPushChannelToken,
  setNotificationList,
};
