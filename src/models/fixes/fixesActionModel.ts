import { ActionModel } from '../ActionModel';
import { FixesObjModel } from './fixesObjModel';

export interface SetNewFixesActionModel extends ActionModel {
  payload: {
    newFixes: Array<FixesObjModel>,
  }
}

export interface SetPendingFixesActionModel extends ActionModel {
  payload: {
    pendingFixes: Array<FixesObjModel>,
  }
}

export interface SetInProgressFixesActionModel extends ActionModel {
  payload: {
    inProgressFixes: Array<FixesObjModel>,
  }
}

export interface SetInReviewFixesActionModel extends ActionModel {
  payload: {
    inReviewFixes: Array<FixesObjModel>,
  }
}

export interface SetCompletedFixesActionModel extends ActionModel {
  payload: {
    completedFixes: Array<FixesObjModel>,
  }
}

export interface SetTerminatedFixesActionModel extends ActionModel {
  payload: {
    terminatedFixes: Array<FixesObjModel>,
  }
}
