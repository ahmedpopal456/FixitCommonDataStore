import { createSlice } from '@reduxjs/toolkit';
import { FixitAction } from '../models/common/fixitAction';
import { AddressModel } from '../models/common/addressModel';

export interface ProfileModel {
  firstName: string,
  lastName: string,
  address: AddressModel,
  profilePictureUrl: string,
}

export interface ProfileState extends ProfileModel {
  isLoading: boolean,
  error: any,
}

export const initialState: ProfileState = {
  firstName: '',
  lastName: '',
  address: {} as AddressModel,
  profilePictureUrl: '',
  isLoading: false,
  error: null,
};

const prepareSuccess = (payload: ProfileModel): FixitAction<ProfileModel> => ({
  payload, type: 'inherit', meta: 'empty', error: null,
});

const prepareFailure = (error: any | null = null): FixitAction<ProfileModel> => ({
  payload: initialState, type: 'inherit', meta: 'empty', error,
});

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    FETCH_PROFILEINFO_BEGIN: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    FETCH_PROFILEINFO_SUCCESS: {
      reducer: (state, action: FixitAction<ProfileModel>) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.profilePictureUrl = action.payload.profilePictureUrl;
        state.address = action.payload.address;
        state.isLoading = false;
        state.error = null;
      },
      prepare: prepareSuccess,
    },
    FETCH_PROFILEINFO_FAILURE: {
      reducer: (state, action: FixitAction<ProfileModel>) => {
        state.isLoading = false;
        state.error = action.error;
      },
      prepare: prepareFailure,
    },
  },
});

export const {
  FETCH_PROFILEINFO_BEGIN,
  FETCH_PROFILEINFO_SUCCESS,
  FETCH_PROFILEINFO_FAILURE,
} = profileSlice.actions;
export default profileSlice.reducer;
