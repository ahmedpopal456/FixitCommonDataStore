import RatingsActionTypesModel from '../../../src/models/ratings/ratingsActionTypesModel';
import ratingsReducer from '../../../src/store/ratings/ratingsReducer';

describe('ratings reducer', () => {
  it('should return the initial state of ratings', () => {
    expect(ratingsReducer(undefined, { type: '' })).toEqual({
      ratingsId: '',
      averageRating: 0,
      ratings: [],
      ratingsOfUser: {},
    });
  });

  it('should handle SET_RATINGS_INFO', () => {
    expect(ratingsReducer(undefined, {
      type: RatingsActionTypesModel.SET_RATINGS_INFO,
      payload: {
        ratingsId: '123',
        averageRating: 5,
        ratings: [],
        ratingsOfUser: {},
      },
    })).toEqual({
      ratings: [],
      ratingsId: '123',
      ratingsOfUser: {},
      averageRating: 5,
    });
  });
});
