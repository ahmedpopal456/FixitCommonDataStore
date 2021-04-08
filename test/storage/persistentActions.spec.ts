import PersistentActionTypesModel from '../../src/models/persistentStore/persistentActionTypesModel';
import persistentActions from '../../src/storage/persistentActions';

describe('actions', () => {
  it('should create an action to set the auth status', () => {
    const expectedAction = {
      type: PersistentActionTypesModel.SET_AUTH_STATUS,
      payload: {
        isAuthenticated: true,
        authToken: 'my token',
      },
    };
    expect(persistentActions.setAuthStatus(true, 'my token')).toEqual(expectedAction);
  });

  it('should create an action to set the set user info', () => {
    const expectedAction = {
      type: PersistentActionTypesModel.SET_USER_INFO,
      payload: {
        userId: 'someId',
        firstName: 'Po',
        lastName: 'Tato',
        email: 'asd@email.com',
        role: 0,
        status: { status: 0, lastSeenTimestampUtc: 0 },
      },
    };
    expect(persistentActions.setUserInfo(
      'someId', 'Po', 'Tato', 'asd@email.com', 0, { status: 0, lastSeenTimestampUtc: 0 },
    )).toEqual(expectedAction);
  });

  it('should create an action to set the push channel token', () => {
    const expectedAction = {
      type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
      payload: {
        pushChannelToken: 'my token',
      },
    };
    expect(persistentActions.setPushChannelToken('my token')).toEqual(
      expectedAction,
    );
  });

  it('should create an action to set the notifications', () => {
    const expectedAction = {
      type: PersistentActionTypesModel.SET_NOTIFICATION_LIST,
      payload: {
        notificationList: {},
        unseenNotificationsNumber: 0,
      },
    };
    expect(persistentActions.setNotificationList({}, 0)).toEqual(expectedAction);
  });
});
