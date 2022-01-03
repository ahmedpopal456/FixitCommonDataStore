import PersistentActionTypesModel from '../../src/models/persistentStore/persistentActionTypesModel';
import persistentReducer from '../../src/storage/persistentReducer';

describe('persistent reducer', () => {
  it('should return the initial state', () => {
    expect(persistentReducer(undefined, { type: '' })).toEqual({
      pushChannelToken: undefined,
      notifications: [],
      unseenNotificationsNumber: 0,
      currentFixLocation: {
        id: '',
        isCurrentAddress: false,
        aptSuiteFloor: '',
        label: '',
        address: {
          AddressComponents: [],
          formattedAddress: '',
        },
      },
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
      pushChannelToken: 'my token',
      notifications: [],
      unseenNotificationsNumber: 0,
      currentFixLocation: {
        id: '',
        isCurrentAddress: false,
        aptSuiteFloor: '',
        label: '',
        address: {
          AddressComponents: [],
          formattedAddress: '',
        },
      },
    });
  });

  it('should handle SET_NOTIFICATIONS', () => {
    expect(
      persistentReducer(undefined, {
        type: PersistentActionTypesModel.SET_NOTIFICATIONS,
        payload: {
          notifications: [],
          unseenNotificationsNumber: 0,
        },
      }),
    ).toEqual({
      pushChannelToken: undefined,
      notifications: [],
      unseenNotificationsNumber: 0,
      currentFixLocation: {
        id: '',
        isCurrentAddress: false,
        aptSuiteFloor: '',
        label: '',
        address: {
          AddressComponents: [],
          formattedAddress: '',
        },
      },
    });
  });
});
