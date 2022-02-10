import { FixesModel } from '../../slices/fixesSlice';
import { ReceivedNotification } from 'react-native-push-notification';

export interface NotificationModel {
  remoteMessage: ReceivedNotification;
  fix: FixesModel;
  visited: boolean;
}
