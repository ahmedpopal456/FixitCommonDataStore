import { UserBaseModel } from '../user';
import { NotificationTagDto } from './notificationTagDto';

export interface EnqueueNotificationRequestDto {
  title: string;
  message: string;
  payload: any;
  tags: NotificationTagDto[];
  recipientUsers: UserBaseModel[];
  silent: boolean;
}
