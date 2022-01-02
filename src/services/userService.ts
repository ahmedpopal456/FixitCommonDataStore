import {
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
  UserAddressModel,
  UserAddressModelBase,
  UserSummaryModel,
} from '../slices/userSlice';
import ConfigFactory from '../config/factory/configFactory';

export default class UserService {
  configFactory: ConfigFactory;

  store: any;

  constructor(configFactory: ConfigFactory, store: any) {
    this.configFactory = configFactory;
    this.store = store;
  }

  async fetchUser(userId: string): Promise<UserSummaryModel> {
    this.store.dispatch(FETCH_USER_BEGIN());
    const response = await fetch(
      `https://fixit-dev-ums-api.azurewebsites.net/api/users/${userId}/account/profile/summary`,
    ).catch((error) => this.store.dispatch(FETCH_USER_FAILURE(error)));

    const data = await response.json();
    this.store.dispatch(FETCH_USER_SUCCESS(data));
    return data;
  }

  async addUserAddresses(userId: string, addressModel: UserAddressModelBase): Promise<UserAddressModel> {
    this.store.dispatch(ADD_USERADDRESS_BEGIN());

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addressModel),
    };

    const response = await fetch(
      `https://fixit-dev-ums-api.azurewebsites.net/api/users/${userId}/addresses`,
      requestOptions,
    ).catch((error) => this.store.dispatch(ADD_USERADDRESS_FAILURE(error)));

    const data = await response.json();
    const userAddress = data.result;
    this.store.dispatch(ADD_USERADDRESS_SUCCESS(userAddress));
    this.fetchUser(userId);

    return userAddress;
  }

  async updateUserAddresses(
    userId: string,
    userAddressId: string,
    addressModel: UserAddressModel,
  ): Promise<UserAddressModel> {
    this.store.dispatch(UPDATE_USERADDRESS_BEGIN());

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addressModel),
    };

    const response = await fetch(
      `https://fixit-dev-ums-api.azurewebsites.net/api/users/${userId}/addresses/${userAddressId}`,
      requestOptions,
    ).catch((error) => this.store.dispatch(UPDATE_USERADDRESS_FAILURE(error)));

    const data = await response.json();
    const userAddress = data.result;

    this.store.dispatch(UPDATE_USERADDRESS_SUCCESS(userAddress));
    this.fetchUser(userId);

    return userAddress;
  }

  // TODO: Add OperationStatus Model
  async removeUserAddresses(userId: string, userAddressId: string): Promise<any> {
    this.store.dispatch(REMOVE_USERADDRESS_BEGIN());
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(
      `https://fixit-dev-ums-api.azurewebsites.net/api/users/${userId}/addresses/${userAddressId}`,
      requestOptions,
    ).catch((error) => this.store.dispatch(REMOVE_USERADDRESS_FAILURE(error)));

    const data = await response.json();
    this.store.dispatch(REMOVE_USERADDRESS_SUCCESS(userAddressId));
    this.fetchUser(userId);

    return data;
  }
}
