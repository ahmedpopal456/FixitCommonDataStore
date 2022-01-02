import PersistentActionTypesModel from '../../src/models/persistentStore/persistentActionTypesModel';
import persistentActions from '../../src/storage/persistentActions';
import { FETCH_USER_BEGIN, UPDATE_AUTH_STATUS } from '../../src/slices/userSlice';

describe('actions', () => {
  it('should create an action to set the auth status', () => {
    const expectedAction = {
      type: 'user/UPDATE_AUTH_STATUS',
      payload: {
        isAuthenticated: true,
        authToken: 'my token',
      },
    };
    expect(UPDATE_AUTH_STATUS({ isAuthenticated: true, authToken: 'my token' })).toEqual(expectedAction);
  });

  it('should create an action to begin fetching the set user info', () => {
    const expectedAction = {
      type: 'user/FETCH_USER_BEGIN',
      payload: undefined,
    };
    expect(FETCH_USER_BEGIN()).toEqual(expectedAction);
  });

  it('should create an action to set the push channel token', () => {
    const expectedAction = {
      type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
      payload: {
        pushChannelToken: 'my token',
      },
    };
    expect(persistentActions.setPushChannelToken('my token')).toEqual(expectedAction);
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
