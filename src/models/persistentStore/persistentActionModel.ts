import { ActionModel } from '../ActionModel';
import NotificationModel from './notificationModel';
import { UserStatusModel } from './userStatusModel';

export interface SetAuthStatusActionModel extends ActionModel {
  payload: {
    isAuthenticated: boolean,
    authToken: string | undefined,
  };
}

export interface SetUserInfoActionModel extends ActionModel {
  payload: {
    userId: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    role: number,
    status: UserStatusModel | undefined,
  };
}

export interface SetPushChannelTokenActionModel extends ActionModel {
  payload: {
    pushChannelToken: string | undefined,
  };
}

export interface SetNotificationListActionModel extends ActionModel {
  payload: {
    notificationList: Record<string, Array<NotificationModel>>,
    unseenNotificationsNumber: number,
  };
}
