import { ActionModel } from '../ActionModel';

export interface SetNewFixesActionModel extends ActionModel {
  payload: {
    newFixes: [],
  }
}

export interface SetPendingFixesActionModel extends ActionModel {
  payload: {
    pendingFixes: [],
  }
}

export interface SetInProgressFixesActionModel extends ActionModel {
  payload: {
    inProgressFixes: [],
  }
}

export interface SetInReviewFixesActionModel extends ActionModel {
  payload: {
    inReviewFixes: [],
  }
}

export interface SetCompletedFixesActionModel extends ActionModel {
  payload: {
    completedFixes: [],
  }
}

export interface SetTerminatedFixesActionModel extends ActionModel {
  payload: {
    terminatedFixes: [],
  }
}
