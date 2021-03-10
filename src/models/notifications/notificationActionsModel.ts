import {FirebaseMessagingTypes} from "@react-native-firebase/messaging";
import {ActionModel} from "../ActionModel";

export interface SetNotificationActionsModel extends ActionModel {
  payload: {
    messageId?: string,
    message?: FirebaseMessagingTypes.RemoteMessage,
  };
}
