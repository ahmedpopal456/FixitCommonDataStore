/* istanbul ignore file */
import { PagedDocumentCollection } from '../models/common/pagedDocumentCollection';
import {
  DeviceInstallationUpsertRequestDto,
  EnqueueNotificationRequestDto,
  NotificationStatusUpdateResponseDto,
  NotificationStatusUpdateRequestDto,
} from '../models/notification';
import BaseConfigProvider from '../config/providers/baseConfigProvider';
import { NotificationDocument } from '../models/notification/notificationDocument';
import { OperationStatus } from '../models/common/operationStatus';
import {
  ENQUEUE_NOTIFICATION_BEGIN,
  ENQUEUE_NOTIFICATION_FAILURE,
  ENQUEUE_NOTIFICATION_SUCCESS,
  FETCH_NOTIFICATIONS_BYPAGE_BEGIN,
  FETCH_NOTIFICATIONS_BYPAGE_FAILURE,
  FETCH_NOTIFICATIONS_BYPAGE_SUCCESS,
  UPDATE_INSTALLATION_BEGIN,
  UPDATE_INSTALLATION_FAILURE,
  UPDATE_INSTALLATION_SUCCESS,
  UPDATE_NOTIFICATION_STATUS_BEGIN,
  UPDATE_NOTIFICATION_STATUS_FAILURE,
  UPDATE_NOTIFICATION_STATUS_SUCCESS,
} from '../slices/notificationsSlice';

export default class NotificationService {
  config: BaseConfigProvider;
  store: any;

  constructor(config: BaseConfigProvider, store: any) {
    this.config = config;
    this.store = store;
  }

  async installDevice(deviceInstallationUpsertRequest: DeviceInstallationUpsertRequestDto): Promise<OperationStatus> {
    this.store.dispatch(UPDATE_INSTALLATION_BEGIN());
    const route = `${this.config.nmsBaseApiUrl}/Installations`;
    const response = await fetch(route, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deviceInstallationUpsertRequest),
    }).catch((error) => this.store.dispatch(UPDATE_INSTALLATION_FAILURE(error)));

    const operation = await response.json();
    this.store.dispatch(
      UPDATE_INSTALLATION_SUCCESS({
        operationStatus: operation as OperationStatus,
        request: deviceInstallationUpsertRequest,
      }),
    );

    return operation;
  }

  async enqueue(notificationBody: EnqueueNotificationRequestDto): Promise<OperationStatus> {
    this.store.dispatch(ENQUEUE_NOTIFICATION_BEGIN());
    const response = await fetch(this.config.nmsBaseApiUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationBody),
    }).catch((error) => this.store.dispatch(ENQUEUE_NOTIFICATION_FAILURE(error)));

    const operation = response.json();
    this.store.dispatch(ENQUEUE_NOTIFICATION_SUCCESS(operation as OperationStatus));

    return operation;
  }

  async getNotificationsPaginated(
    userId: string,
    pageNumber: number,
    pageSize: number,
  ): Promise<PagedDocumentCollection<NotificationDocument>> {
    this.store.dispatch(FETCH_NOTIFICATIONS_BYPAGE_BEGIN());
    const response = await fetch(
      `${this.config.nmsBaseApiUrl}/Notifications/Entity/${userId}/Pages/${pageNumber}/${pageSize}`,
      { method: 'GET' },
    ).catch((error) => this.store.dispatch(FETCH_NOTIFICATIONS_BYPAGE_FAILURE(error)));

    const operation = response.json();
    this.store.dispatch(FETCH_NOTIFICATIONS_BYPAGE_SUCCESS(operation as PagedDocumentCollection<NotificationDocument>));

    return operation;
  }

  async updateNotificationsStatus(
    body: NotificationStatusUpdateRequestDto[],
  ): Promise<OperationStatus<NotificationStatusUpdateResponseDto>> {
    this.store.dispatch(UPDATE_NOTIFICATION_STATUS_BEGIN());
    const response = await fetch(`${this.config.nmsBaseApiUrl}/Notifications/Status`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).catch((error) => this.store.dispatch(UPDATE_NOTIFICATION_STATUS_FAILURE(error)));

    const operation = response.json();
    this.store.dispatch(
      UPDATE_NOTIFICATION_STATUS_SUCCESS(operation as OperationStatus<NotificationStatusUpdateResponseDto>),
    );
    return operation;
  }
}