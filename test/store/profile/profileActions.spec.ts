import ProfileActionTypesModel from '../../../src/models/profile/profileActionTypesModel';
import { AddressModel } from '../../../src/models/profile/profileModel';
import setProfileInfo from '../../../src/store/profile/profileActions';

describe('profile action', () => {
  it('should create an action to set profile info', () => {
    const expectedAction = {
      type: ProfileActionTypesModel.SET_PROFILE_INFO,
      payload: {
        firstName: 'Po',
        lastName: 'Tato',
        address: {},
        profilePictureUrl: 'something/something.png',
      },
    };
    expect(setProfileInfo('Po', 'Tato', {} as AddressModel, 'something/something.png')).toEqual(expectedAction);
  });
});
