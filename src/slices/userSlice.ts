import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FixitAction } from '../models/common/fixitAction';
import { AddressModel } from './addressSlice';

export interface UserStatus {
  status: number;
  lastSeenTimestampUtc: number;
}
export interface UserAddressModelBase {
  address: AddressModel;
  aptSuiteFloor: string | undefined;
  label: string | undefined;
  isCurrentAddress: boolean;
}
export interface UserAddressModel extends UserAddressModelBase {
  id: string;
}
export interface UserSummaryModel {
  id?: string;
  firstName: string;
  lastName: string;
  profilePictureUrl?: string;
  userPrincipalName: string;
  role: number;
  savedAddresses: Array<UserAddressModel>;
  status: UserStatus;
}
export interface UserModel {
  isAuthenticated: boolean;
  authToken: string | undefined;
  userPrincipalName: string | undefined;
  userId: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  role: number;
  savedAddresses: Array<UserAddressModel>;
  status: UserStatus | undefined;
}
export interface UserState extends UserModel {
  isLoading: boolean;
  error: any;
}

const initialState: UserState = {
  isAuthenticated: false,
  userPrincipalName: undefined,
  authToken: undefined,
  userId: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  role: 0,
  status: undefined,
  savedAddresses: [],
  isLoading: false,
  error: null,
};

type AuthStatusPicked = Pick<UserState, 'isAuthenticated' | 'authToken'>;

const prepareSuccess = <T>(payload: T): FixitAction<T> => ({
  payload,
  type: 'inherit',
  meta: 'empty',
  error: null,
});

const prepareFailure = <T>(payload: T, error: any): FixitAction<T> => ({
  payload,
  type: 'inherit',
  meta: 'empty',
  error,
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UPDATE_AUTH_STATUS: (state, action: PayloadAction<AuthStatusPicked>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.authToken = action.payload.authToken;
    },
    FETCH_USER_BEGIN: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    FETCH_USER_SUCCESS: {
      reducer: (state, action: FixitAction<UserSummaryModel>) => {
        state.userId = action.payload.id;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userPrincipalName = action.payload.userPrincipalName;
        state.role = action.payload.role;
        state.status = action.payload.status;
        state.savedAddresses = action.payload.savedAddresses;
        state.isLoading = false;
        state.error = null;
      },
      prepare: (payload: UserSummaryModel) => prepareSuccess(payload),
    },
    FETCH_USER_FAILURE: {
      reducer: (state, action: FixitAction<UserSummaryModel>) => {
        state.isLoading = false;
        state.error = action.error;
      },
      prepare: (error: any) => prepareFailure<UserSummaryModel>({} as UserSummaryModel, error),
    },
    ADD_USERADDRESS_BEGIN: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    ADD_USERADDRESS_SUCCESS: {
      reducer: (state, action: FixitAction<UserAddressModel>) => {
        state.isLoading = false;
        state.error = null;
      },
      prepare: (payload: UserAddressModel) => prepareSuccess(payload),
    },
    ADD_USERADDRESS_FAILURE: {
      reducer: (state, action: FixitAction<UserAddressModel>) => {
        state.isLoading = false;
        state.error = action.error;
      },
      prepare: (error: any) => prepareFailure<UserAddressModel>({} as UserAddressModel, error),
    },
    UPDATE_USERADDRESS_BEGIN: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    UPDATE_USERADDRESS_SUCCESS: {
      reducer: (state, action: FixitAction<UserAddressModel>) => {
        state.isLoading = false;
        state.error = null;
      },
      prepare: (payload: UserAddressModel) => prepareSuccess(payload),
    },
    UPDATE_USERADDRESS_FAILURE: {
      reducer: (state, action: FixitAction<UserAddressModel>) => {
        state.isLoading = false;
        state.error = action.error;
      },
      prepare: (error: any) => prepareFailure<UserAddressModel>({} as UserAddressModel, error),
    },
    REMOVE_USERADDRESS_BEGIN: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    REMOVE_USERADDRESS_SUCCESS: {
      reducer: (state, action: FixitAction<string>) => {
        state.isLoading = false;
        state.error = null;
      },
      prepare: (payload: string) => prepareSuccess<string>(payload),
    },
    REMOVE_USERADDRESS_FAILURE: {
      reducer: (state, action: FixitAction<string>) => {
        state.isLoading = false;
        state.error = action.error;
      },
      prepare: (error: any) => prepareFailure<string>('', error),
    },
  },
});

export const {
  UPDATE_AUTH_STATUS,
  ADD_USERADDRESS_BEGIN,
  ADD_USERADDRESS_SUCCESS,
  ADD_USERADDRESS_FAILURE,
  UPDATE_USERADDRESS_BEGIN,
  UPDATE_USERADDRESS_SUCCESS,
  UPDATE_USERADDRESS_FAILURE,
  REMOVE_USERADDRESS_BEGIN,
  REMOVE_USERADDRESS_SUCCESS,
  REMOVE_USERADDRESS_FAILURE,
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} = userSlice.actions;
export default userSlice.reducer;
