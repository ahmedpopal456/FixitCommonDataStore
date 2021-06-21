import PersistentActionTypesModel from '../../src/models/persistentStore/persistentActionTypesModel';
import persistentReducer from '../../src/storage/persistentReducer';

describe('persistent reducer', () => {
  it('should return the initial state', () => {
    expect(persistentReducer(undefined, { type: '' })).toEqual(
      {
        pushChannelToken: undefined,
        notificationList: { notifications: [] },
        unseenNotificationsNumber: 0,
      },
    );
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
      pushChannelToken: undefined,
      notificationList: {},
      unseenNotificationsNumber: 0,
    });
  });
});
