export interface FixesStateModel {
  readonly newFixes: {
    newFixes: [],
  },
  readonly pendingFixes: {
    pendingFixes: [],
  },
  readonly inProgressFixes: {
    inProgressFixes: [],
  },
  readonly inReviewFixes: {
    inReviewFixes: [],
  },
  readonly completedFixes: {
    completedFixes: [],
  },
  readonly terminatedFixes: {
    terminatedFixes: [],
  }
}
