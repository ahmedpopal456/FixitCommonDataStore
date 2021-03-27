export interface RatingsOfUserModel {
  id: string,
  firstName: string,
  lastName: string,
  profilePictureUrl: string,
  role: number,
  status: any,
}

export interface RatingsModel {
  ratingsId: string,
  averageRating: number,
  ratings: [],
  ratingsOfUser: RatingsOfUserModel,
}
