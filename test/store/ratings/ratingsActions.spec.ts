import RatingsActionTypesModel from '../../../src/models/ratings/ratingsActionTypesModel';
import { RatingsOfUserModel } from '../../../src/models/ratings/ratingsModel';
import setRatingsInfo from '../../../src/store/ratings/ratingsActions';

describe('ratings action', () => {
  it('should create an action to set ratings info', () => {
    const expectedAction = {
      type: RatingsActionTypesModel.SET_RATINGS_INFO,
      payload: {
        ratingsId: '123',
        averageRating: 5,
        ratings: [],
        ratingsOfUser: {},
      },
    };
    expect(setRatingsInfo('123', 5, [], {} as RatingsOfUserModel)).toEqual(expectedAction);
  });
});
