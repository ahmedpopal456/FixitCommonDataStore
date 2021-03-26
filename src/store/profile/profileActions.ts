import ProfileActionTypesModel from '../../models/profile/profileActionTypesModel';
import { SetProfileInfoActionModel } from '../../models/profile/profileActionModel';
import { AddressObjModel } from '../../models/profile/addressObjModel';

const setProfileInfo = (
  firstName: string,
  lastName: string,
  address: Record<string, AddressObjModel>,
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
