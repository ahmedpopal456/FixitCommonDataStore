import FixesActionTypesModel from '../../models/fixes/fixesActionTypesMode';
import {
  SetNewFixesActionModel,
  SetPendingFixesActionModel,
  SetInProgressFixesActionModel,
  SetInReviewFixesActionModel,
  SetCompletedFixesActionModel,
  SetTerminatedFixesActionModel,
} from '../../models/fixes/fixesActionModel';

const setNewFixes = (newFixes: []): SetNewFixesActionModel => ({
  type: FixesActionTypesModel.SET_NEW_FIXES,
  payload: {
    newFixes,
  },
});

const setPendingFixes = (pendingFixes: []): SetPendingFixesActionModel => ({
  type: FixesActionTypesModel.SET_PENDING_FIXES,
  payload: {
    pendingFixes,
  },
});

const setInProgressFixes = (inProgressFixes: []): SetInProgressFixesActionModel => ({
  type: FixesActionTypesModel.SET_IN_PROGRESS_FIXES,
  payload: {
    inProgressFixes,
  },
});

const setInReviewFixes = (inReviewFixes: []): SetInReviewFixesActionModel => ({
  type: FixesActionTypesModel.SET_IN_REVIEW_FIXES,
  payload: {
    inReviewFixes,
  },
});

const setCompletedFixes = (completedFixes: []): SetCompletedFixesActionModel => ({
  type: FixesActionTypesModel.SET_COMPLETED_FIXES,
  payload: {
    completedFixes,
  },
});

const setTerminatedFixes = (terminatedFixes: []): SetTerminatedFixesActionModel => ({
  type: FixesActionTypesModel.SET_TERMINATED_FIXES,
  payload: {
    terminatedFixes,
  },
});

export {
  setNewFixes,
  setPendingFixes,
  setInProgressFixes,
  setInReviewFixes,
  setCompletedFixes,
  setTerminatedFixes,
};
