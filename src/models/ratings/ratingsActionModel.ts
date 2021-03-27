import { ActionModel } from '../ActionModel';
import { RatingsOfUserModel } from './ratingsModel';

export interface SetRatingsInfoActionModel extends ActionModel {
  payload: {
    ratingsId: string,
    averageRating: number,
    ratings: [],
    ratingsOfUser: RatingsOfUserModel,
  }
}
