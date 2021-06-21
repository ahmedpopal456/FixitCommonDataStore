import {
  FETCH_NEWFIXES_BEGIN,
  FETCH_NEWFIXES_SUCCESS,
  FETCH_NEWFIXES_FAILURE,
} from '../../../src/slices/fixesSlice';

describe('fixes action', () => {
  it('should create an action to begin fetching new fixes', () => {
    const expectedAction = {
      type: 'fixes/FETCH_NEWFIXES_BEGIN',
      payload: undefined,
    };
    expect(FETCH_NEWFIXES_BEGIN()).toEqual(expectedAction);
  });

  it('should create an action when successfully finished fetching new fixes', () => {
    const expectedAction = {
      type: 'fixes/FETCH_NEWFIXES_SUCCESS',
      payload: [],
      error: null,
      meta: 'empty',
    };
    expect(FETCH_NEWFIXES_SUCCESS([])).toEqual(expectedAction);
  });

  it('should create an action when failed finished fetching new fixes', () => {
    const expectedAction = {
      type: 'fixes/FETCH_NEWFIXES_FAILURE',
      payload: [],
      error: 'failure',
      meta: 'empty',
    };
    expect(FETCH_NEWFIXES_FAILURE('failure')).toEqual(expectedAction);
  });
});
