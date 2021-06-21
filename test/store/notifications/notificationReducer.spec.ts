import notificationReducer from '../../../src/slices/notificationSlice';

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
      messages: [{
        messageId: 'id-1',
        notification: {
          title: 'test-1',
        },
      }],
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
        type: 'notification/displayNotification',
        payload,
      }),
    ).toEqual(expected);
  });

  it('should handle DISMISS_NOTIFICATION', () => {
    const initialState = {
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
        type: 'notification/dismissNotification',
        payload: {
          messageId: 'id-1',
        },
      }),
    ).toEqual(expected);
  });
});
