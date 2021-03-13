import notificationReducer from '../../../src/store/notifications/notificationsReducer';
import NotificationActionTypesModel from '../../../src/models/notifications/notificationActionsTypes';
import { NotificationStateModel } from '../../../src/models/notifications/notificationState';

describe('root reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      messages: [],
    };
    expect(
      notificationReducer(undefined, { type: '', payload: undefined }),
    ).toEqual(expected);
  });

  it('should handle DISPLAY_NOTIFICATION', () => {
    const payload = {
      message: {
        messageId: 'id-1',
        notification: {
          title: 'test-1',
        },
      },
    };
    const expected = {
      messages: [
        {
          messageId: 'id-1',
          notification: {
            title: 'test-1',
          },
        },
      ],
    };
    expect(
      notificationReducer(undefined, {
        type: NotificationActionTypesModel.DISPLAY_NOTIFICATION,
        payload,
      }),
    ).toEqual(expected);
  });

  it('should handle DISMISS_NOTIFICATION', () => {
    const initialState: NotificationStateModel = {
      messages: [
        {
          messageId: 'id-1',
          notification: {
            title: 'test-1',
          },
        },
        {
          messageId: 'id-2',
          notification: {
            title: 'test-2',
          },
        },
      ],
    };

    const expected = {
      messages: [
        {
          messageId: 'id-2',
          notification: {
            title: 'test-2',
          },
        },
      ],
    };
    expect(
      notificationReducer(initialState, {
        type: NotificationActionTypesModel.DISMISS_NOTIFICATION,
        payload: {
          messageId: 'id-1',
        },
      }),
    ).toEqual(expected);
  });
});
