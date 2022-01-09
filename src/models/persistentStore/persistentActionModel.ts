import { UserAddressModel } from '../../slices/userSlice';
import { ActionModel } from '../actionModel';
import { NotificationModel } from '../notification/NotificationModel';

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

export interface SetNotificationsActionModel extends ActionModel {
  payload: {
    notifications: Array<NotificationModel>,
    unseenNotificationsNumber: number,
  };
}
