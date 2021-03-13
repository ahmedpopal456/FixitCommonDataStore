import FixesActionTypesModel from '../../../src/models/fixes/fixesActionTypesMode';
import {
  setNewFixes,
  setPendingFixes,
  setInProgressFixes,
  setInReviewFixes,
  setCompletedFixes,
  setTerminatedFixes,
} from '../../../src/store/fixes/fixesActions';

describe('fixes action', () => {
  it('should create an action to set new fixes', () => {
    const expectedAction = {
      type: FixesActionTypesModel.SET_NEW_FIXES,
      payload: {
        newFixes: [],
      },
    };
    expect(setNewFixes([])).toEqual(expectedAction);
  });

  it('should create an action to set pending fixes', () => {
    const expectedAction = {
      type: FixesActionTypesModel.SET_PENDING_FIXES,
      payload: {
        pendingFixes: [],
      },
    };
    expect(setPendingFixes([])).toEqual(expectedAction);
  });

  it('should create an action to set in progress fixes', () => {
    const expectedAction = {
      type: FixesActionTypesModel.SET_IN_PROGRESS_FIXES,
      payload: {
        inProgressFixes: [],
      },
    };
    expect(setInProgressFixes([])).toEqual(expectedAction);
  });

  it('should create an action to set in review fixes', () => {
    const expectedAction = {
      type: FixesActionTypesModel.SET_IN_REVIEW_FIXES,
      payload: {
        inReviewFixes: [],
      },
    };
    expect(setInReviewFixes([])).toEqual(expectedAction);
  });

  it('should create an action to set completed fixes', () => {
    const expectedAction = {
      type: FixesActionTypesModel.SET_COMPLETED_FIXES,
      payload: {
        completedFixes: [],
      },
    };
    expect(setCompletedFixes([])).toEqual(expectedAction);
  });

  it('should create an action to set terminated fixes', () => {
    const expectedAction = {
      type: FixesActionTypesModel.SET_TERMINATED_FIXES,
      payload: {
        terminatedFixes: [],
      },
    };
    expect(setTerminatedFixes([])).toEqual(expectedAction);
  });
});
