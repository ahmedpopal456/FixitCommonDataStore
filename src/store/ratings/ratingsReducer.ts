import { AnyAction } from 'redux';
import { RatingsOfUserModel } from '../../models/ratings/ratingsModel';
import RatingActionTypesModel from '../../models/ratings/ratingsActionTypesModel';
import { RatingsStateModel } from '../../models/ratings/ratingsStateModel';

const initialState: RatingsStateModel = {
  ratingsId: '',
  averageRating: 0,
  ratings: [],
  ratingsOfUser: {} as RatingsOfUserModel,
};

export default function ratingsReducer(state = initialState, action: AnyAction) // NOSONAR
: RatingsStateModel {
  switch (action.type) { // NOSONAR
    case RatingActionTypesModel.SET_RATINGS_INFO:
      return {
        ...state,
        ratingsId: action.payload.ratingsId,
        averageRating: action.payload.averageRating,
        ratings: action.payload.ratings,
        ratingsOfUser: action.payload.ratingsOfUser,
      };
    default:
      return state;
  }
}
