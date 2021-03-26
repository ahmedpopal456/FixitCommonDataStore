import { AnyAction } from 'redux';
import FixesActionTypesModel from '../../models/fixes/fixesActionTypesMode';
import { FixesStateModel } from '../../models/fixes/fixesStateModel';

const initialState: FixesStateModel = {
  newFixes: [],
  pendingFixes: [],
  inProgressFixes: [],
  inReviewFixes: [],
  completedFixes: [],
  terminatedFixes: [],
};

export default function fixesReducer(state = initialState, action: AnyAction): // NOSONAR
FixesStateModel {
  switch (action.type) { // NOSONAR
    case FixesActionTypesModel.SET_NEW_FIXES:
      return {
        ...state,
        newFixes: action.payload.newFixes,
      };

    case FixesActionTypesModel.SET_PENDING_FIXES:
      return {
        ...state,
        pendingFixes: action.payload.pendingFixes,
      };

    case FixesActionTypesModel.SET_IN_PROGRESS_FIXES:
      return {
        ...state,
        inProgressFixes: action.payload.inProgressFixes,
      };

    case FixesActionTypesModel.SET_IN_REVIEW_FIXES:
      return {
        ...state,
        inReviewFixes: action.payload.inReviewFixes,
      };

    case FixesActionTypesModel.SET_COMPLETED_FIXES:
      return {
        ...state,
        completedFixes: action.payload.completedFixes,
      };

    case FixesActionTypesModel.SET_TERMINATED_FIXES:
      return {
        ...state,
        terminatedFixes: action.payload.terminatedFixes,
      };

    default:
      return state;
  }
}
