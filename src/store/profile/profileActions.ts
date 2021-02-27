import ProfileActionTypesModel from '../../models/profile/profileActionTypesModel';
import { SetProfileInfoActionModel } from '../../models/profile/profileActionModel';

const setProfileInfo = (firstName: string, lastName: string, address: {}, profilePictureUrl: string) : SetProfileInfoActionModel => ({
  type: ProfileActionTypesModel.SET_PROFILE_INFO,
  payload: {
    firstName: firstName,
    lastName: lastName,
    address: address,
    profilePictureUrl: profilePictureUrl,
  },
});

export default setProfileInfo;