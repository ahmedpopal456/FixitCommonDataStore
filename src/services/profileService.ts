import axios from 'axios';
import {
  ProfileModel, FETCH_PROFILEINFO_BEGIN, FETCH_PROFILEINFO_SUCCESS, FETCH_PROFILEINFO_FAILURE,
} from '../slices/profileSlice';
import ConfigFactory from '../config/factory/configFactory';

export default class ProfileService {
  configFactory: ConfigFactory;

  store: any;

  constructor(configFactory: ConfigFactory, store: any) {
    this.configFactory = configFactory;
    this.store = store;
  }

  getUserProfile(userId: string) : Promise<ProfileModel> {
    this.store.dispatch(FETCH_PROFILEINFO_BEGIN());
    return (
      axios.get(`https://fixit-dev-ums-api.azurewebsites.net/api/${userId}/account/profile`)
        .then((response) => {
          this.store.dispatch(FETCH_PROFILEINFO_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_PROFILEINFO_FAILURE(error));
        }));
  }
}
