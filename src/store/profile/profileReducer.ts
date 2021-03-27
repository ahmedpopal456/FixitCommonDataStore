import { AnyAction } from 'redux';
import { AddressModel } from '../../models/profile/profileModel';
import ProfileActionTypesModel from '../../models/profile/profileActionTypesModel';
import { ProfileStateModel } from '../../models/profile/profileStateModel';

const initialState: ProfileStateModel = {
  firstName: '',
  lastName: '',
  address: {} as AddressModel,
  profilePictureUrl: '',
};

export default function profileReducer(state = initialState, action: AnyAction) // NOSONAR
: ProfileStateModel {
  switch (action.type) { // NOSONAR
    case ProfileActionTypesModel.SET_PROFILE_INFO:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        address: action.payload.address,
        profilePictureUrl: action.payload.profilePictureUrl,
      };
    default:
      return state;
  }
}
