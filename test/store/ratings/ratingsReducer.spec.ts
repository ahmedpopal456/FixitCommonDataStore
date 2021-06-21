import ratingsReducer from '../../../src/slices/ratingSlice';

describe('ratings reducer', () => {
  it('should handle FETCH_USERRATINGS_BEGIN', () => {
    expect(ratingsReducer(undefined, {
      type: 'rating/FETCH_USERRATINGS_BEGIN',
      payload: {
        ratingsId: '123',
        averageRating: 5,
        ratings: [],
        ratingsOfUser: {},
      },
    })).toEqual({
      isLoading: true,
      error: null,
      ratings: [],
      ratingsId: '',
      ratingsOfUser: {},
      averageRating: 0,
    });
  });
});
