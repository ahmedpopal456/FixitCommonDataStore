import { FixesObjModel } from './fixesObjModel';

export interface FixesStateModel {
  readonly newFixes: Array<FixesObjModel>,
  readonly pendingFixes: Array<FixesObjModel>,
  readonly inProgressFixes: Array<FixesObjModel>,
  readonly inReviewFixes: Array<FixesObjModel>,
  readonly completedFixes: Array<FixesObjModel>,
  readonly terminatedFixes: Array<FixesObjModel>,
}
