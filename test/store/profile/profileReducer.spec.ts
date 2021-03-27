import ProfileActionTypesModel from '../../../src/models/profile/profileActionTypesModel';
import profileReducer from '../../../src/store/profile/profileReducer';

describe('profile reducer', () => {
  it('should return the inital state of profile', () => {
    expect(profileReducer(undefined, { type: '' })).toEqual({
      firstName: '',
      lastName: '',
      address: {},
      profilePictureUrl: '',
    });
  });

  it('should hande SET_PROFILE_INFO', () => {
    expect(profileReducer(undefined, {
      type: ProfileActionTypesModel.SET_PROFILE_INFO,
      payload: {
        firstName: 'Po',
        lastName: 'Tato',
        address: {},
        profilePictureUrl: 'someUrl',
      },
    })).toEqual({
      address: {},
      lastName: 'Tato',
      profilePictureUrl: 'someUrl',
      firstName: 'Po',
    });
  });
});
