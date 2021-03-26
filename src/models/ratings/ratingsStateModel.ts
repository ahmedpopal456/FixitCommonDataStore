import { RatingsOfUserModel } from './ratingsOfUserModel';

export interface RatingsStateModel {
  readonly ratings: {
    ratingsId: string,
    averageRating: number,
    ratings: [],
    ratingsOfUser: Record<string, RatingsOfUserModel>,
  }
}
