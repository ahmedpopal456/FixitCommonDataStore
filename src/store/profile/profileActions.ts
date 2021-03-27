import ProfileActionTypesModel from '../../models/profile/profileActionTypesModel';
import { SetProfileInfoActionModel } from '../../models/profile/profileActionModel';
import { AddressModel } from '../../models/profile/profileModel';

const setProfileInfo = (
  firstName: string,
  lastName: string,
  address: AddressModel,
  profilePictureUrl: string,
) : SetProfileInfoActionModel => ({
  type: ProfileActionTypesModel.SET_PROFILE_INFO,
  payload: {
    firstName,
    lastName,
    address,
    profilePictureUrl,
  },
});

export default setProfileInfo;
