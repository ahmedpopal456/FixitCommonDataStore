import { FixesModel } from './fixesModel';

export interface FixesStateModel {
  readonly newFixes: Array<FixesModel>,
  readonly pendingFixes: Array<FixesModel>,
  readonly inProgressFixes: Array<FixesModel>,
  readonly inReviewFixes: Array<FixesModel>,
  readonly completedFixes: Array<FixesModel>,
  readonly terminatedFixes: Array<FixesModel>,
}
