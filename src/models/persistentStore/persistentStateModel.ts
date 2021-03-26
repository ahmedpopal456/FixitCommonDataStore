import NotificationListObjModel from './notificationListObjModel';

export interface PersistentStateModel {
  readonly user: {
    isAuthenticated: boolean,
    authToken: string | undefined,
  };
  readonly pushChannelToken: string | undefined;
  readonly notificationList: Record<string, Array<NotificationListObjModel>>;
  readonly unseenNotificationsNumber: number,
}
