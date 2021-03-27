import axios from 'axios';
import { ProfileModel } from '../models/profile/profileModel';
import setProfileInfo from '../store/profile/profileActions';
import ConfigFactory from '../config/factory/configFactory';

export default class ProfileService {
  configFactory: ConfigFactory;

  store: any;

  constructor(configFactory: ConfigFactory, store: any) {
    this.configFactory = configFactory;
    this.store = store;
  }

  getUserProfile(userId: string) : Promise<ProfileModel> {
    return (axios.get(`https://fixit-dev-ums-api.azurewebsites.net/api/${userId}/account/profile`)
      .then((response) => {
        this.store.dispatch(
          setProfileInfo(
            response.data.firstName,
            response.data.lastName,
            response.data.address,
            response.data.profilePictureUrl,
          ),
        );
        return response.data;
      })
      .catch((error) => console.error(error))
    );
  }
}
