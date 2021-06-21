import {
  FETCH_PROFILEINFO_BEGIN,
} from '../../../src/slices/profileSlice';

describe('profile action', () => {
  it('should create an action to begin fetching profile info', () => {
    const expectedAction = {
      type: 'profile/FETCH_PROFILEINFO_BEGIN',
      payload: undefined,
    };
    expect(FETCH_PROFILEINFO_BEGIN()).toEqual(expectedAction);
  });
});
