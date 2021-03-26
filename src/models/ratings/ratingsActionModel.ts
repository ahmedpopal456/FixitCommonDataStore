import { ActionModel } from '../ActionModel';
import { RatingsOfUserModel } from './ratingsOfUserModel';

export interface SetRatingsInfoActionModel extends ActionModel {
  payload: {
    ratingsId: string,
    averageRating: number,
    ratings: [],
    ratingsOfUser: Record<string, RatingsOfUserModel>,
  }
}
