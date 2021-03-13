import axios from 'axios';
import setRatingsInfo from '../store/ratings/ratingsActions';
import ConfigFactory from '../config/factory/configFactory';
import { store } from '../index';

export default class RatingsService {
  configFactory: ConfigFactory;

  constructor(configFactory: ConfigFactory) {
    this.configFactory = configFactory;
  }

  getUserRatingsAverage(userId: string) {
    return (axios.get(`http://localhost:7071/api/users/${userId}/account/ratings`)
      .then((response) => {
        store.dispatch(
          setRatingsInfo(
            response.data.ratings.id,
            response.data.ratings.averageRating,
            response.data.ratings.ratings,
            response.data.ratings.ratingsOfUser,
          ),
        );
        return response.data;
      })
      .catch((error) => console.error(error))
    );
  }
}
