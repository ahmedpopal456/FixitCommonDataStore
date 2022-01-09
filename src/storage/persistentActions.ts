import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import {
  SetPushChannelTokenActionModel,
  SetNotificationsActionModel,
  SetUserAddressActionModel,
} from '../models/persistentStore/persistentActionModel';
import { UserAddressModel } from '../slices/userSlice';
import { NotificationModel } from '../models/notification/NotificationModel';

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

const setNotifications = (
  notifications: Array<NotificationModel>,
  unseenNotificationsNumber: number,
) : SetNotificationsActionModel => ({
  type: PersistentActionTypesModel.SET_NOTIFICATIONS,
  payload: {
    notifications,
    unseenNotificationsNumber,
  },
});

export default {
  setPushChannelToken,
  setNotifications,
  setCurrentFixLocations,
};
