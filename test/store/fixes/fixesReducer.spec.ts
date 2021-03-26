import FixesActionTypesModel from '../../../src/models/fixes/fixesActionTypesMode';
import fixesReducer from '../../../src/store/fixes/fixesReducer';

describe('fixes reducer', () => {
  it('should return the initla state of the fixes', () => {
    expect(fixesReducer(undefined, { type: '' })).toEqual({
      newFixes: [],
      pendingFixes: [],
      inProgressFixes: [],
      inReviewFixes: [],
      completedFixes: [],
      terminatedFixes: [],
    });
  });

  it('should handle SET_NEW_FIXES', () => {
    expect(fixesReducer(undefined, {
      type: FixesActionTypesModel.SET_NEW_FIXES,
      payload: {
        newFixes: [{
          id: '123',
          status: 0,
        }],
      },
    })).toEqual({
      newFixes: [{
        id: '123',
        status: 0,
      }],
      pendingFixes: [],
      inProgressFixes: [],
      inReviewFixes: [],
      completedFixes: [],
      terminatedFixes: [],
    });
  });

  it('should handle SET_PENDING_FIXES', () => {
    expect(fixesReducer(undefined, {
      type: FixesActionTypesModel.SET_PENDING_FIXES,
      payload: {
        pendingFixes: [{
          id: '123',
          status: 1,
        }],
      },
    })).toEqual({
      pendingFixes: [{
        status: 1,
        id: '123',
      }],
      newFixes: [],
      inProgressFixes: [],
      inReviewFixes: [],
      completedFixes: [],
      terminatedFixes: [],
    });
  });

  it('should handle SET_IN_PROGRESS_FIXES', () => {
    expect(fixesReducer(undefined, {
      type: FixesActionTypesModel.SET_IN_PROGRESS_FIXES,
      payload: {
        inProgressFixes: [{
          id: '123',
          status: 2,
        }],
      },
    })).toEqual({
      inProgressFixes: [{
        status: 2,
        id: '123',
      }],
      newFixes: [],
      pendingFixes: [],
      inReviewFixes: [],
      completedFixes: [],
      terminatedFixes: [],
    });
  });

  it('should handle SET_IN_REVIEW_FIXES', () => {
    expect(fixesReducer(undefined, {
      type: FixesActionTypesModel.SET_IN_REVIEW_FIXES,
      payload: {
        inReviewFixes: [{
          id: '123',
          status: 3,
        }],
      },
    })).toEqual({
      inReviewFixes: [{
        status: 3,
        id: '123',
      }],
      newFixes: [],
      pendingFixes: [],
      inProgressFixes: [],
      completedFixes: [],
      terminatedFixes: [],
    });
  });

  it('should handle SET_COMPLETED_FIXES', () => {
    expect(fixesReducer(undefined, {
      type: FixesActionTypesModel.SET_COMPLETED_FIXES,
      payload: {
        completedFixes: [{
          id: '123',
          status: 4,
        }],
      },
    })).toEqual({
      completedFixes: [{
        status: 4,
        id: '123',
      }],
      newFixes: [],
      pendingFixes: [],
      inProgressFixes: [],
      inReviewFixes: [],
      terminatedFixes: [],
    });
  });

  it('should handle SET_TERMINATED_FIXES', () => {
    expect(fixesReducer(undefined, {
      type: FixesActionTypesModel.SET_TERMINATED_FIXES,
      payload: {
        terminatedFixes: [{
          id: '123',
          status: 5,
        }],
      },
    })).toEqual({
      terminatedFixes: [{
        status: 5,
        id: '123',
      }],
      newFixes: [],
      pendingFixes: [],
      inProgressFixes: [],
      inReviewFixes: [],
      completedFixes: [],
    });
  });
});
