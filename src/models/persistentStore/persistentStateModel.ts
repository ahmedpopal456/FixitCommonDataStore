import { UserAddressModel } from '../../slices/userSlice';
import { NotificationModel } from '../notification/NotificationModel';

export interface PersistentStateModel {
  readonly pushChannelToken: string | undefined;
  readonly notifications: Array<NotificationModel>;
  readonly unseenNotificationsNumber: number,
  readonly currentFixLocation: UserAddressModel,
}
