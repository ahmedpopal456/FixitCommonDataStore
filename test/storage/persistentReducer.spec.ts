import PersistentActionTypesModel from '../../src/models/persistentStore/persistentActionTypesModel';
import persistentReducer from '../../src/storage/persistentReducer';

describe('persistent reducer', () => {
  it('should return the initial state', () => {
    expect(persistentReducer(undefined, { type: '' })).toEqual(
      {
        user: {
          isAuthenticated: false,
          authToken: undefined,
          userId: undefined,
          firstName: undefined,
          lastName: undefined,
          email: undefined,
          role: 0,
          status: undefined,
        },
        pushChannelToken: undefined,
        notificationList: { notifications: [] },
        unseenNotificationsNumber: 0,
      },
    );
  });

  it('should handle SET_AUTH_STATUS', () => {
    expect(
      persistentReducer(undefined, {
        type: PersistentActionTypesModel.SET_AUTH_STATUS,
        payload: {
          isAuthenticated: true,
          authToken: 'my token',
        },
      }),
    ).toEqual({
      user: {
        authToken: 'my token',
        isAuthenticated: true,
        userId: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        role: 0,
        status: undefined,
      },
      pushChannelToken: undefined,
      notificationList: { notifications: [] },
      unseenNotificationsNumber: 0,
    });
  });

  it('should handle SET_USER_INFO', () => {
    expect(
      persistentReducer(undefined, {
        type: PersistentActionTypesModel.SET_USER_INFO,
        payload: {
          userId: 'someId',
          firstName: 'Po',
          lastName: 'Tato',
          email: 'asd@email.com',
          role: 0,
          status: { status: 0, lastSeenTimestampUtc: 0 },
        },
      }),
    ).toEqual({
      user: {
        isAuthenticated: false,
        authToken: undefined,
        firstName: 'Po',
        status: { status: 0, lastSeenTimestampUtc: 0 },
        role: 0,
        userId: 'someId',
        lastName: 'Tato',
        email: 'asd@email.com',
      },
      pushChannelToken: undefined,
      notificationList: { notifications: [] },
      unseenNotificationsNumber: 0,
    });
  });

  it('should handle SET_NOTIFICATION_TOKEN', () => {
    expect(
      persistentReducer(undefined, {
        type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
        payload: {
          pushChannelToken: 'my token',
        },
      }),
    ).toEqual({
      user: {
        authToken: undefined,
        isAuthenticated: false,
        userId: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        role: 0,
        status: undefined,
      },
      pushChannelToken: 'my token',
      notificationList: { notifications: [] },
      unseenNotificationsNumber: 0,
    });
  });

  it('should handle SET_NOTIFICATION_LIST', () => {
    expect(
      persistentReducer(undefined, {
        type: PersistentActionTypesModel.SET_NOTIFICATION_LIST,
        payload: {
          notificationList: {},
          unseenNotificationsNumber: 0,
        },
      }),
    ).toEqual({
      user: {
        authToken: undefined,
        isAuthenticated: false,
        userId: undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        role: 0,
        status: undefined,
      },
      pushChannelToken: undefined,
      notificationList: {},
      unseenNotificationsNumber: 0,
    });
  });
});
