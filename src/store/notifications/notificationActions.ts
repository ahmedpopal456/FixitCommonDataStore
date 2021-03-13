import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import NotificationActionTypes from '../../models/notifications/notificationActionsTypes';
import { SetNotificationActionsModel } from '../../models/notifications/notificationActionsModel';

const displayNotification = (
  notification: FirebaseMessagingTypes.RemoteMessage,
): SetNotificationActionsModel => ({
  type: NotificationActionTypes.DISPLAY_NOTIFICATION,
  payload: {
    message: notification,
  },
});

const dismissNotification = (
  notificationId: string,
): SetNotificationActionsModel => ({
  type: NotificationActionTypes.DISMISS_NOTIFICATION,
  payload: {
    messageId: notificationId,
  },
});

export default {
  displayNotification,
  dismissNotification,
};
