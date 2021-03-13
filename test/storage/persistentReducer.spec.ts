import PersistentActionTypesModel from '../../src/models/persistentStore/persistentActionTypesModel';
import persistentReducer from '../../src/storage/persistentReducer';

describe('persistent reducer', () => {
  it('should return the initial state', () => {
    expect(persistentReducer(undefined, { type: '' })).toEqual(
      {
        user: {
          isAuthenticated: false,
          authToken: undefined,
        },
        pushChannelToken: undefined,
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
      },
      pushChannelToken: undefined,
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
      },
      pushChannelToken: 'my token',
    });
  });
});
