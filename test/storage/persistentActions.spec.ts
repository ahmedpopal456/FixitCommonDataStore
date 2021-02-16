import PersistentActionTypesModel from '../../src/models/persistentStore/persistentActionTypesModel';
import setAuthStatus from '../../src/storage/persistentActions';

describe('actions', () => {
  it('should create an action to set the auth status', () => {
    const expectedAction = {
      type: PersistentActionTypesModel.SET_AUTH_STATUS,
      payload: {
        isAuthenticated: true,
        authToken: 'my token',
      },
    };
    expect(setAuthStatus(true, 'my token')).toEqual(expectedAction);
  });
});
