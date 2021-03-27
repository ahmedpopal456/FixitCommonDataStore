import NotificationModel from './notificationModel';

export interface PersistentStateModel {
  readonly user: {
    isAuthenticated: boolean,
    authToken: string | undefined,
  };
  readonly pushChannelToken: string | undefined;
  readonly notificationList: Record<string, Array<NotificationModel>>;
  readonly unseenNotificationsNumber: number,
}
