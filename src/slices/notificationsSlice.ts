import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationDocument } from '../models/notification/notificationDocument';
import { FixitAction } from '../models/common/fixitAction';
import { PagedDocumentCollection } from '../models/common/pagedDocumentCollection';
import {
  DeviceInstallation,
  DeviceInstallationUpsertRequestDto,
  NotificationStatusUpdateResponseDto,
} from '../models/notification';
import { NotificationPlatform, NotificationStatus } from '../models/notification/enums';
import { OperationStatus } from '../models/common/operationStatus';
import { FixesModel } from './fixesSlice';

export interface NotificationsStateWithAction {
  notifications: NotificationDocument[];
  isLoading: boolean;
  error: any;
}

export interface InstallationsStateWithAction {
  currentInstallation: DeviceInstallation;
  isLoading: boolean;
  error: any;
}

export interface NotificationsStates {
  readonly notifications: NotificationsStateWithAction;
  readonly installations: InstallationsStateWithAction;
  readonly currentDisplayedRemoteMessage: any | FixesModel;
}

const initialState: NotificationsStates = {
  currentDisplayedRemoteMessage: {},
  notifications: {
    notifications: [],
    isLoading: false,
    error: null,
  },
  installations: {
    currentInstallation: {
      installationId: '',
      installedTimestampUtc: 0,
      platform: NotificationPlatform.APNS,
      pushChannelToken: '',
      pushChannelTokenExpired: false,
      tags: [],
      templates: {
        ['userId']: {
          body: '',
          tags: [],
        },
      },
      updatedTimestampUtc: 0,
      userId: '',
    },
    isLoading: false,
    error: null,
  },
};

export interface DeviceInstallationUpsertResponse {
  operationStatus: OperationStatus;
  request: DeviceInstallationUpsertRequestDto;
}

const prepareSuccess = <T>(payload: T): FixitAction<T> => ({
  payload,
  type: 'inherit',
  meta: 'empty',
  error: null,
});

const prepareFailure = <T>(error: any): FixitAction<T> => ({
  payload: {} as T,
  type: 'inherit',
  meta: 'empty',
  error,
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    RESET_NOTIFICATIONS_SLICE: () => initialState,
    UPDATE_INSTALLATION_BEGIN: (state) => {
      state.installations.error = null;
      state.installations.isLoading = true;
    },
    UPDATE_INSTALLATION_SUCCESS: {
      reducer: (state, action: FixitAction<DeviceInstallationUpsertResponse>) => {
        state.installations.isLoading = false;
        state.installations.error = null;
        state.installations.currentInstallation = {
          installationId: action.payload.request.installationId,
          platform: action.payload.request.platform,
          pushChannelToken: action.payload.request.pushChannelToken,
          pushChannelTokenExpired: false,
          tags: action.payload.request.tags,
          userId: action.payload.request.userId,
          templates: {
            ['userId']: {
              body: '',
              tags: [],
            },
          },
          installedTimestampUtc: 0,
          updatedTimestampUtc: 0,
        };
      },
      prepare: (payload: DeviceInstallationUpsertResponse) => prepareSuccess(payload),
    },
    UPDATE_INSTALLATION_FAILURE: {
      reducer: (state, action: FixitAction<DeviceInstallationUpsertResponse>) => {
        state.installations.isLoading = false;
        state.installations.error = action.error;
      },
      prepare: (error: any) => prepareFailure<DeviceInstallationUpsertResponse>(error),
    },
    ENQUEUE_NOTIFICATION_BEGIN: (state) => {
      state.installations.error = null;
      state.installations.isLoading = true;
    },
    ENQUEUE_NOTIFICATION_SUCCESS: {
      reducer: (state, action: FixitAction<OperationStatus>) => {
        state.notifications.isLoading = false;
        state.notifications.error = null;
      },
      prepare: (payload: OperationStatus) => prepareSuccess(payload),
    },
    ENQUEUE_NOTIFICATION_FAILURE: {
      reducer: (state, action: FixitAction<OperationStatus>) => {
        state.notifications.isLoading = false;
        state.notifications.error = action.error;
      },
      prepare: (error: any) => prepareFailure<OperationStatus>(error),
    },
    FETCH_NOTIFICATIONS_BYPAGE_BEGIN: (state) => {
      state.installations.error = null;
      state.installations.isLoading = true;
    },
    FETCH_NOTIFICATIONS_BYPAGE_SUCCESS: {
      reducer: (state, action: FixitAction<PagedDocumentCollection<NotificationDocument>>) => {
        let distinctArray = state.notifications.notifications
          ? state.notifications.notifications?.concat(action.payload.results as NotificationDocument[])
          : action.payload.results;

        state.notifications.isLoading = false;
        state.notifications.error = null;
      },
      prepare: (payload: PagedDocumentCollection<NotificationDocument>) => prepareSuccess(payload),
    },
    FETCH_NOTIFICATIONS_BYPAGE_FAILURE: {
      reducer: (state, action: FixitAction<PagedDocumentCollection<NotificationDocument>>) => {
        state.notifications.isLoading = false;
        state.notifications.error = action.error;
      },
      prepare: (error: any) => prepareFailure<PagedDocumentCollection<NotificationDocument>>(error),
    },
    UPDATE_NOTIFICATION_STATUS_BEGIN: (state) => {
      state.notifications.error = null;
      state.notifications.isLoading = true;
    },
    UPDATE_NOTIFICATION_STATUS_SUCCESS: {
      reducer: (state, action: FixitAction<OperationStatus<NotificationStatusUpdateResponseDto>>) => {
        state.notifications.isLoading = false;
        state.notifications.error = null;
        const notificationToUpdate = state.notifications.notifications?.find(
          (item) => item.id === action.payload.result?.notificationId,
        );

        if (notificationToUpdate) {
          notificationToUpdate.status = NotificationStatus.READ;
        }
      },
      prepare: (payload: OperationStatus<NotificationStatusUpdateResponseDto>) => prepareSuccess(payload),
    },
    UPDATE_NOTIFICATION_STATUS_FAILURE: {
      reducer: (state, action: FixitAction<OperationStatus<NotificationStatusUpdateResponseDto>>) => {
        state.notifications.isLoading = false;
        state.notifications.error = action.error;
      },
      prepare: (error: any) => prepareFailure<OperationStatus<NotificationStatusUpdateResponseDto>>(error),
    },
    DISPLAY_NOTIFICATION: (state, action: PayloadAction<any>) => {
      state.currentDisplayedRemoteMessage = action.payload.currentDisplayedRemoteMessage;
    },
  },
});

function removeDuplicates(array: any, key: any) {
  let lookup: any = {};
  array.forEach((element: any) => {
    lookup[element[key]] = element;
  });
  return Object.keys(lookup).map((key) => lookup[key]);
}

export const {
  RESET_NOTIFICATIONS_SLICE,
  UPDATE_INSTALLATION_BEGIN,
  UPDATE_INSTALLATION_SUCCESS,
  UPDATE_INSTALLATION_FAILURE,
  ENQUEUE_NOTIFICATION_BEGIN,
  ENQUEUE_NOTIFICATION_SUCCESS,
  ENQUEUE_NOTIFICATION_FAILURE,
  FETCH_NOTIFICATIONS_BYPAGE_BEGIN,
  FETCH_NOTIFICATIONS_BYPAGE_SUCCESS,
  FETCH_NOTIFICATIONS_BYPAGE_FAILURE,
  UPDATE_NOTIFICATION_STATUS_BEGIN,
  UPDATE_NOTIFICATION_STATUS_SUCCESS,
  UPDATE_NOTIFICATION_STATUS_FAILURE,
  DISPLAY_NOTIFICATION,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
