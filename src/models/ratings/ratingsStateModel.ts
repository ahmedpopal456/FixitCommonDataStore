export interface RatingsStateModel {
  readonly ratings: {
    ratingsId: string,
    averageRating: number,
    ratings: [],
    ratingsOfUser: {},
  }
}