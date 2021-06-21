import { FirebaseMessagingTypes } from '@react-native-firebase/messaging/lib';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationModel {
  readonly messages: FirebaseMessagingTypes.RemoteMessage[];
}

export type NotificationState = NotificationModel;

const initialState: NotificationState = {
  messages: [],
};

type displayNotificationPicked = Pick<NotificationState, 'messages'>;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayNotification: (state, action: PayloadAction<displayNotificationPicked>) => {
      state.messages = action.payload.messages;
    },
    dismissNotification: (state, action: PayloadAction<{messageId: string}>) => {
      state.messages = state.messages.filter(
        (message: FirebaseMessagingTypes.RemoteMessage) => message.messageId !== action.payload.messageId,
      );
    },
  },
});

export const { displayNotification, dismissNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
