import { ActionModel } from '../ActionModel';
import NotificationListObjModel from './notificationListObjModel';

export interface SetAuthStatusActionModel extends ActionModel {
  payload: {
    isAuthenticated: boolean,
    authToken: string | undefined,
  };
}

export interface SetPushChannelTokenActionModel extends ActionModel {
  payload: {
    pushChannelToken: string | undefined,
  };
}

export interface SetNotificationListActionModel extends ActionModel {
  payload: {
    notificationList: Record<string, Array<NotificationListObjModel>>,
    unseenNotificationsNumber: number,
  };
}
