import { ActionModel } from '../ActionModel';
import { FixesModel } from './fixesModel';

export interface SetNewFixesActionModel extends ActionModel {
  payload: {
    newFixes: Array<FixesModel>,
  }
}

export interface SetPendingFixesActionModel extends ActionModel {
  payload: {
    pendingFixes: Array<FixesModel>,
  }
}

export interface SetInProgressFixesActionModel extends ActionModel {
  payload: {
    inProgressFixes: Array<FixesModel>,
  }
}

export interface SetInReviewFixesActionModel extends ActionModel {
  payload: {
    inReviewFixes: Array<FixesModel>,
  }
}

export interface SetCompletedFixesActionModel extends ActionModel {
  payload: {
    completedFixes: Array<FixesModel>,
  }
}

export interface SetTerminatedFixesActionModel extends ActionModel {
  payload: {
    terminatedFixes: Array<FixesModel>,
  }
}
