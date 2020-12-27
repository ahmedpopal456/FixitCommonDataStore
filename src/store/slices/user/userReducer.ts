import UserActionTypes from '../../../models/user/userActionTypes';
import { UserState } from '../../../models/user/userState';
import { UserAction } from '../../../models/user/userAction';

const initialState: UserState = {
  id: 23,
  displayName: 'Fixit test user',
  logedIn: false,
};

export default function userReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
  // state is mutated here, but no business logic
    case UserActionTypes.LOG_USER_IN_SUCCESS:
      return {
        ...state,
        logedIn: true,
      };
    case UserActionTypes.LOG_USER_IN_ERROR:
      return {
        ...state,
        logedIn: false,
        errors: action.payload,
      };
    case UserActionTypes.CHANGE_USER_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.payload,
      };
    default:
      return state;
  }
}
