import profileReducer from '../../../src/slices/profileSlice';

describe('profile reducer', () => {
  it('should return the inital state of profile', () => {
    expect(profileReducer(undefined, { type: '' })).toEqual({
      firstName: '',
      lastName: '',
      address: {},
      profilePictureUrl: '',
      isLoading: false,
      error: null,
      availability: [],
    });
  });

  it('should handle FETCH_PROFILEINFO_BEGIN', () => {
    expect(profileReducer(undefined, {
      type: 'profile/FETCH_PROFILEINFO_BEGIN',
      payload: {
        firstName: 'Po',
        lastName: 'Tato',
        address: {},
        profilePictureUrl: 'someUrl',
      },
    })).toEqual({
      address: {},
      lastName: '',
      profilePictureUrl: '',
      firstName: '',
      isLoading: true,
      error: null,
      availability: [],
    });
  });
});
