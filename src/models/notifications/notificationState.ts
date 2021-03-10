import {FirebaseMessagingTypes} from "@react-native-firebase/messaging/lib";

export interface NotificationStateModel {
  readonly messages: FirebaseMessagingTypes.RemoteMessage[];
}
