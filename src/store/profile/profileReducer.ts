import { AnyAction } from 'redux';
import ProfileActionTypesModel from '../../models/profile/profileActionTypesModel';
import { ProfileStateModel } from '../../models/profile/profileStateModel';

const initialState: ProfileStateModel = {
  profile: {
    firstName: '',
    lastName: '',
    address: {},
    profilePictureUrl: '',
  }
};

export default function profileReducer(state = initialState, action: AnyAction) : ProfileStateModel { // NOSONAR
  switch(action.type) { // NOSONAR
    case ProfileActionTypesModel.SET_PROFILE_INFO:
      return {
        ...state,
        profile: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          address: action.payload.address,
          profilePictureUrl: action.payload.profilePictureUrl,
        }
      };
    default:
      return state;
  }
}