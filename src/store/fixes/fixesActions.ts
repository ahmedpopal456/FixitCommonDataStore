import { FixesObjModel } from '../../models/fixes/fixesObjModel';
import FixesActionTypesModel from '../../models/fixes/fixesActionTypesMode';
import {
  SetNewFixesActionModel,
  SetPendingFixesActionModel,
  SetInProgressFixesActionModel,
  SetInReviewFixesActionModel,
  SetCompletedFixesActionModel,
  SetTerminatedFixesActionModel,
} from '../../models/fixes/fixesActionModel';

const setNewFixes = (newFixes: Array<FixesObjModel>): SetNewFixesActionModel => ({
  type: FixesActionTypesModel.SET_NEW_FIXES,
  payload: {
    newFixes,
  },
});

const setPendingFixes = (pendingFixes: Array<FixesObjModel>): SetPendingFixesActionModel => ({
  type: FixesActionTypesModel.SET_PENDING_FIXES,
  payload: {
    pendingFixes,
  },
});

const setInProgressFixes = (inProgressFixes: Array<FixesObjModel>)
: SetInProgressFixesActionModel => ({
  type: FixesActionTypesModel.SET_IN_PROGRESS_FIXES,
  payload: {
    inProgressFixes,
  },
});

const setInReviewFixes = (inReviewFixes: Array<FixesObjModel>): SetInReviewFixesActionModel => ({
  type: FixesActionTypesModel.SET_IN_REVIEW_FIXES,
  payload: {
    inReviewFixes,
  },
});

const setCompletedFixes = (completedFixes: Array<FixesObjModel>): SetCompletedFixesActionModel => ({
  type: FixesActionTypesModel.SET_COMPLETED_FIXES,
  payload: {
    completedFixes,
  },
});

const setTerminatedFixes = (terminatedFixes: Array<FixesObjModel>)
: SetTerminatedFixesActionModel => ({
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
