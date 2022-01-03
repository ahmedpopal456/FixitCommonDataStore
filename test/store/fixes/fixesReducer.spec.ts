import fixesReducer from '../../../src/slices/fixesSlice';

describe.only('fixes reducer', () => {
  it('should return the initla state of the fixes', () => {
    expect(fixesReducer(undefined, { type: '' })).toEqual({
      completedFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      inProgressFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      inReviewFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      newFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      pendingFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      terminatedFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      terminatedByCraftsmanFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      terminatedByClientFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      topFixTagsState: {
        error: null,
        isLoading: false,
        tags: [],
      },
      updateFixState: {
        error: null,
        fixes: undefined,
        isLoading: false,
      },
    });
  });

  it('should handle FETCH_NEWFIXES_SUCCESS', () => {
    expect(fixesReducer(undefined, {
      type: 'fixes/FETCH_NEWFIXES_SUCCESS',
      payload: [{
        id: '123',
        status: 0,
      }],
      error: null,
      meta: 'empty',
    })).toEqual({
      newFixesState: {
        error: null,
        fixes: [{
          id: '123',
          status: 0,
        }],
        isLoading: false,
      },
      completedFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      inProgressFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      inReviewFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      pendingFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      terminatedFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      terminatedByCraftsmanFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      terminatedByClientFixesState: {
        error: null,
        fixes: [],
        isLoading: false,
      },
      topFixTagsState: {
        error: null,
        isLoading: false,
        tags: [],
      },
      updateFixState: {
        error: null,
        fixes: undefined,
        isLoading: false,
      },
    });
  });
});
