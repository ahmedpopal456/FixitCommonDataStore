import { AnyAction } from 'redux';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging/lib';
import NotificationActionTypesModel from '../../models/notifications/notificationActionsTypes';
import { NotificationStateModel } from '../../models/notifications/notificationState';

const initialState: NotificationStateModel = {
  messages: [],
};

export default function notificationReducer(state = initialState, action: AnyAction) // NOSONAR
: NotificationStateModel {
  switch (action.type) { // NOSONAR
    case NotificationActionTypesModel.DISPLAY_NOTIFICATION: {
      return {
        ...state,
        messages: state.messages.concat(action.payload.message),
      };
    }
    case NotificationActionTypesModel.DISMISS_NOTIFICATION: {
      return {
        ...state,
        messages: state.messages.filter(
          (message: FirebaseMessagingTypes.RemoteMessage) => message.messageId !== action.payload.messageId,
        ),
      };
    }
    default: {
      return state;
    }
  }
}
