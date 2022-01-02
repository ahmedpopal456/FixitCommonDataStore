import { UserAddressModel } from '../../slices/userSlice';
import { ActionModel } from '../actionModel';
import NotificationModel from '../notification/notificationModel';

export interface SetPushChannelTokenActionModel extends ActionModel {
  payload: {
    pushChannelToken: string | undefined,
  };
}
export interface SetUserAddressActionModel extends ActionModel {
  payload: {
    currentFixLocation: UserAddressModel,
  };
}
export interface SetNotificationListActionModel extends ActionModel {
  payload: {
    notificationList: Record<string, Array<NotificationModel>>,
    unseenNotificationsNumber: number,
  };
}
