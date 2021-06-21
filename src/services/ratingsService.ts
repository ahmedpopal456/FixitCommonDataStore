import {
  RatingsModel, FETCH_USERRATINGS_BEGIN, FETCH_USERRATINGS_SUCCESS, FETCH_USERRATINGS_FAILURE,
} from '../slices/ratingSlice';
import ConfigFactory from '../config/factory/configFactory';

export default class RatingsService {
  configFactory: ConfigFactory;

  store: any;

  constructor(configFactory: ConfigFactory, store: any) {
    this.configFactory = configFactory;
    this.store = store;
  }

  async getUserRatingsAverage(userId: string) :Promise<RatingsModel> {
    this.store.dispatch(FETCH_USERRATINGS_BEGIN());
    const response = await fetch(`https://fixit-dev-ums-api.azurewebsites.net/api/users/${userId}/account/ratings`)
      .catch((error) => this.store.dispatch(FETCH_USERRATINGS_FAILURE(error)));

    const data = await response.json();
    const ratingsResponse: RatingsModel = {
      ratingsId: data.ratings.id,
      averageRating: data.ratings.averageRating,
      ratings: data.ratings.ratings,
      ratingsOfUser: data.ratings.ratingsOfUser,
    };

    this.store.dispatch(FETCH_USERRATINGS_SUCCESS(ratingsResponse));
    return ratingsResponse;
  }
}
