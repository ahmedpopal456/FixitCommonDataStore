import {
  FETCH_USERRATINGS_BEGIN,
} from '../../../src/slices/ratingSlice';

describe('ratings action', () => {
  it('should create an action to begin fetching ratings info', () => {
    const expectedAction = {
      type: 'rating/FETCH_USERRATINGS_BEGIN',
      payload: undefined,
    };
    expect(FETCH_USERRATINGS_BEGIN()).toEqual(expectedAction);
  });
});
