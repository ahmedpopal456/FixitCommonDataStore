import NotificationModel from './notificationModel';
import { UserStatusModel } from './userStatusModel';

export interface PersistentStateModel {
  readonly user: {
    isAuthenticated: boolean,
    authToken: string | undefined,
    userId: string | undefined,
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    role: number,
    status: UserStatusModel | undefined,
  };
  readonly pushChannelToken: string | undefined;
  readonly notificationList: Record<string, Array<NotificationModel>>;
  readonly unseenNotificationsNumber: number,
}
