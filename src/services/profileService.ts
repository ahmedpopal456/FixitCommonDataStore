import axios from 'axios';
import setProfileInfo from '../store/profile/profileActions';
import ConfigFactory from '../config/factory/configFactory';
import { store } from '../index';

export default class ProfileService {
  configFactory: ConfigFactory;

  constructor(configFactory: ConfigFactory) {
    this.configFactory = configFactory;
  }

  getUserProfile(userId: string) {
    return (axios.get(`http://localhost:7071/api/${userId}/account/profile`)
      .then((response) => {
        store.dispatch(
          setProfileInfo(response.data.firstName, response.data.lastName, response.data.address, response.data.profilePictureUrl));
        return response.data;
      })
      .catch((error) => console.error(error))
    );
  }

}