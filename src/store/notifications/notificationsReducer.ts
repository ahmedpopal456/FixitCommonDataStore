import {AnyAction} from 'redux';
import NotificationActionTypesModel from "../../models/notifications/notificationActionsTypes";
import {NotificationStateModel} from "../../models/notifications/notificationState";
import {FirebaseMessagingTypes} from "@react-native-firebase/messaging/lib";

const initialState: NotificationStateModel = {
  messages: [],
};

export default function notificationReducer(state = initialState, action: AnyAction): NotificationStateModel { //NOSONAR
  switch (action.type) { //NOSONAR
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
          (message: FirebaseMessagingTypes.RemoteMessage) =>
            message.messageId !== action.payload.messageId
        ),
      };
    }
    default: {
      return state;
    }
  }
}
