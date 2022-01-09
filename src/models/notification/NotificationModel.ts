import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { FixesModel } from '../../slices/fixesSlice';

export interface NotificationModel {
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
  fix: FixesModel,
  visited: boolean,
}
