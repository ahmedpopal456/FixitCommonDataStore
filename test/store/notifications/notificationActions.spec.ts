import { displayNotification, dismissNotification } from '../../../src/slices/notificationSlice';

describe('notification actions', () => {
  it('should create an action to display a notification', () => {
    const notification = {
      messageId: 'id-1',
      notification: {
        title: 'test-1',
      },
    };
    const expectedAction = {
      type: 'notification/displayNotification',
      payload: {
        messages: [notification],
      },
    };
    expect(displayNotification({ messages: [notification] })).toEqual(
      expectedAction,
    );
  });

  it('should create an action to dismiss a notification', () => {
    const messageId = 'id-1';
    const expectedAction = {
      type: 'notification/dismissNotification',
      payload: { messageId },
    };
    expect(dismissNotification({ messageId })).toEqual(
      expectedAction,
    );
  });
});
