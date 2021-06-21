import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FixitAction } from 'src/models/common/fixitAction';

export interface UserStatus {
  status: number,
  lastSeenTimestampUtc: number,
}

export interface UserModel {
  isAuthenticated: boolean,
  authToken: string | undefined,
  userId: string | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  email: string | undefined,
  role: number,
  status: UserStatus | undefined,
}

export interface UserState extends UserModel
{
  isLoading: boolean,
  error: any,
}

const initialState: UserState = {
  isAuthenticated: false,
  authToken: undefined,
  userId: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  role: 0,
  status: undefined,
  isLoading: false,
  error: null,
};

type AuthStatusPicked = Pick<UserState, 'isAuthenticated' | 'authToken'>;
type UserInfoPicked = Pick<UserState, 'userId' | 'firstName' | 'lastName' | 'email' | 'role' | 'status'>

const prepareSuccess = <T> (payload: T) : FixitAction<T> => ({
  payload, type: 'inherit', meta: 'empty', error: null,
});

const prepareFailure = <T> (error: any) : FixitAction<T> => ({
  payload: {} as T, type: 'inherit', meta: 'empty', error,
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UPDATE_AUTH_STATUS: (state, action: PayloadAction<AuthStatusPicked>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.authToken = action.payload.authToken;
    },
    FETCH_USERINFO_BEGIN: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    FETCH_USERINFO_SUCCESS: {
      reducer: (state, action: FixitAction<UserInfoPicked>) => {
        state.userId = action.payload.userId;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.status = action.payload.status;
        state.isLoading = false;
        state.error = null;
      },
      prepare: (payload : UserInfoPicked) => prepareSuccess(payload),
    },
    FETCH_USERINFO_FAILURE: {
      reducer: (state, action: FixitAction<UserInfoPicked>) => {
        state.isLoading = false;
        state.error = action.error;
      },
      prepare: (error : any) => prepareFailure<UserInfoPicked>(error),
    },
    setUserInfo: (state, action: PayloadAction<UserInfoPicked>) => {
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.status = action.payload.status;
    },
  },
});

export const {
  UPDATE_AUTH_STATUS,
  FETCH_USERINFO_BEGIN,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE,
  setUserInfo,
} = userSlice.actions;
export default userSlice.reducer;
