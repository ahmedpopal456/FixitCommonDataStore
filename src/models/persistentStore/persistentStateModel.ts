import { UserAddressModel } from '../../slices/userSlice';
import NotificationModel from '../notification/notificationModel';

export interface PersistentStateModel {
  readonly pushChannelToken: string | undefined;
  readonly notificationList: Record<string, Array<NotificationModel>>;
  readonly unseenNotificationsNumber: number,
  readonly currentFixLocation: UserAddressModel,
}
