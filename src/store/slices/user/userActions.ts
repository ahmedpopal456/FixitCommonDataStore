import UserActionTypes from '../../../models/user/userActionTypes';
import { UserAction } from '../../../models/user/userAction';
import { AppThunk } from '../../../types';
import authenticateUserAzureB2C from './userEffects';
import UserService from '../../../services/userService';
import { UserActions } from '../../../models/user/userActions';

// wrap actions in a function so that we can inject a service (makes it more testable)
const initUserActions = function (userService : UserService): UserActions {
  // sync Actions
  const logUserInSuccess = (id:number): UserAction => ({
    type: UserActionTypes.LOG_USER_IN_SUCCESS,
    payload: id,
  });

  const logUserInError = (error:string): UserAction => ({
    type: UserActionTypes.LOG_USER_IN_ERROR,
    payload: error,
  });

  const changeUserDisplayName = (name: string): UserAction => ({
    type: UserActionTypes.CHANGE_USER_DISPLAY_NAME,
    payload: name,
  });

  // async action
  const logUserIn = (
    id:number,
    token:string,
  ): AppThunk<void> => async (dispatch) => {
    authenticateUserAzureB2C(id, token, userService).then((rid:number) => {
      dispatch(logUserInSuccess(rid));
    }).catch((error) => {
      dispatch(logUserInError(error));
    });
  };

  return {
    logUserInSuccess,
    logUserInError,
    changeUserDisplayName,
    logUserIn,
  };
};

export default initUserActions;
