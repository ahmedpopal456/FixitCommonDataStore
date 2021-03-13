import NotificationActionTypesModel from '../../../src/models/notifications/notificationActionsTypes';
import notificationReducer from '../../../src/store/notifications/notificationActions';

describe('notification actions', () => {
  it('should create an action to display a notification', () => {
    const notification = {
      messageId: 'id-1',
      notification: {
        title: 'test-1',
      },
    };
    const expectedAction = {
      type: NotificationActionTypesModel.DISPLAY_NOTIFICATION,
      payload: {
        message: {
          ...notification,
        },
      },
    };
    expect(notificationReducer.displayNotification(notification)).toEqual(
      expectedAction,
    );
  });

  it('should create an action to dismiss a notification', () => {
    const messageId = 'id-1';
    const expectedAction = {
      type: NotificationActionTypesModel.DISMISS_NOTIFICATION,
      payload: { messageId },
    };
    expect(notificationReducer.dismissNotification(messageId)).toEqual(
      expectedAction,
    );
  });
});
