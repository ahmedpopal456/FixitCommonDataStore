import { UserBaseModel } from '../user';
import { NotificationStatus, NotificationTypes } from './enums';

export interface NotificationDocument {
  id: string;
  entityId: string;
  message: string;
  systemPayload: any;
  action: NotificationTypes;
  recipientUser: UserBaseModel;
  status: NotificationStatus;
  silent: boolean;
  createdTimestampUtc: number;
  updatedTimestampUtc: number;
}