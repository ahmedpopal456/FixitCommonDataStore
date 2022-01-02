import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import {
  SetPushChannelTokenActionModel,
  SetNotificationListActionModel,
  SetUserAddressActionModel,
} from '../models/persistentStore/persistentActionModel';
import NotificationModel from '../models/notification/notificationModel';
import { UserAddressModel } from '../slices/userSlice';

const setPushChannelToken = (pushChannelToken: string): SetPushChannelTokenActionModel => ({
  type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
  payload: {
    pushChannelToken,
  },
});

const setCurrentFixLocations = (userAddress :UserAddressModel): SetUserAddressActionModel => ({
  type: PersistentActionTypesModel.SET_CURRENT_FIX_LOCATION,
  payload: {
    currentFixLocation: userAddress,
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
  setCurrentFixLocations,
};
