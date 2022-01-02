import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Store } from 'redux';
import { RootState } from '../rootReducer';
import ConfigFactory from '../config/factory/configFactory';
import {
  AddressModel,
  AddressQueryItemModel,
  FETCH_ADDRESSESBYSEARCH_BEGIN,
  FETCH_ADDRESSESBYSEARCH_SUCCESS,
  FETCH_ADDRESSESBYSEARCH_FAILURE,
  FETCH_ADDRESSBYID_BEGIN,
  FETCH_ADDRESSBYID_SUCCESS,
  FETCH_ADDRESSBYID_FAILURE,
} from '../slices/addressSlice';

export default class AddressService {
  configFactory: ConfigFactory;

  store: any;

  constructor(
    configFactory: ConfigFactory,
    store: Store<RootState & PersistPartial, any> & {
      dispatch: unknown;
    },
  ) {
    this.configFactory = configFactory;
    this.store = store;
  }

  async getAddressBySearch(search: string): Promise<Array<AddressQueryItemModel>> {
    this.store.dispatch(FETCH_ADDRESSESBYSEARCH_BEGIN());
    const response = await fetch(`https://fixit-dev-ums-api.azurewebsites.net/api/addresses/search/${search}`).catch(
      (error) => this.store.dispatch(FETCH_ADDRESSESBYSEARCH_FAILURE(error)),
    );

    const data = await response.json();
    const queryResponse: Array<AddressQueryItemModel> = data.result;

    this.store.dispatch(FETCH_ADDRESSESBYSEARCH_SUCCESS(queryResponse));
    return queryResponse;
  }

  async getAddressById(addressId: string): Promise<AddressModel> {
    this.store.dispatch(FETCH_ADDRESSBYID_BEGIN());
    const response = await fetch(`https://fixit-dev-ums-api.azurewebsites.net/api/addresses/${addressId}`).catch(
      (error) => this.store.dispatch(FETCH_ADDRESSBYID_FAILURE(error)),
    );

    const data = await response.json();
    const addressResponse: AddressModel = data.result;

    this.store.dispatch(FETCH_ADDRESSBYID_SUCCESS(addressResponse));
    return addressResponse;
  }
}
