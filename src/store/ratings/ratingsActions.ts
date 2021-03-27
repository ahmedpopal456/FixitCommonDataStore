import { RatingsOfUserModel } from '../../models/ratings/ratingsModel';
import RatingsActionTypesModel from '../../models/ratings/ratingsActionTypesModel';
import { SetRatingsInfoActionModel } from '../../models/ratings/ratingsActionModel';

const setRatingsInfo = (
  ratingsId: string,
  averageRating: number,
  ratings: [],
  ratingsOfUser: RatingsOfUserModel,
) : SetRatingsInfoActionModel => ({
  type: RatingsActionTypesModel.SET_RATINGS_INFO,
  payload: {
    ratingsId,
    averageRating,
    ratings,
    ratingsOfUser,
  },
});

export default setRatingsInfo;
