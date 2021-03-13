import { ActionModel } from '../ActionModel';

export interface SetRatingsInfoActionModel extends ActionModel {
  payload: {
    ratingsId: string,
    averageRating: number,
    ratings: [],
    ratingsOfUser: {},
  }
}
