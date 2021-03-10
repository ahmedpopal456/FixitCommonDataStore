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

  it('should create an action to set the push channel token', () => {
    const expectedAction = {
      type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
      payload: {
        pushChannelToken: 'my token',
      },
    };
    expect(persistentActions.setPushChannelToken('my token')).toEqual(
      expectedAction
    );
  });
});
