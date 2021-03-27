import axios from 'axios';
import { RatingsModel } from 'src/models/ratings/ratingsModel';
import setRatingsInfo from '../store/ratings/ratingsActions';
import ConfigFactory from '../config/factory/configFactory';

export default class RatingsService {
  configFactory: ConfigFactory;

  store: any;

  constructor(configFactory: ConfigFactory, store: any) {
    this.configFactory = configFactory;
    this.store = store;
  }

  getUserRatingsAverage(userId: string) : Promise<RatingsModel> {
    return (axios.get(`https://fixit-dev-ums-api.azurewebsites.net/api/users/${userId}/account/ratings`)
      .then((response) => {
        this.store.dispatch(
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
