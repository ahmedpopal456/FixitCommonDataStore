import { AnyAction } from 'redux';
import FixRequestActionTypesModel from '../../models/fixRequest/fixRequestActionTypesModel';
import { FixRequestStateModel } from '../../models/fixRequest/fixRequestStateModel';

const initialState: FixRequestStateModel = {
  numberOfSteps: 4,
  fixStepsCurrentRouteIndex: 0,
  fixStepsDynamicRoutes: [],
  fixTemplateId: '',
  fixRequestObj: {
    Tags: [],
    Details: [{
      Name: '',
      Description: '',
      Category: '0940d933-9029-4793-aa35-1915fe79025c',
      Type: '8dd08c6e-3b81-4cb4-8763-8f774937f09e',
      Sections: [{
        Name: '',
        Details: [{
          Name: '',
          Value: '',
        }],
      },
      ],
      Unit: '5381d225-2a5e-4911-922c-2070ea93c284',
    }],
    Location: {
      Address: '',
      City: '',
      Province: '',
      PostalCode: '',
    },
    Schedule: [{
      StartTimestampUtc: 0,
      EndTimestampUtc: 0,
    }],
    ClientEstimatedCost: {
      MaximumCost: 0,
      MinimumCost: 0,
    },
    CreatedByClient: {
      FirstName: '',
      LastName: '',
    },
    UpdatedByUser: {
      FirstName: '',
      LastName: '',
    },
    Status: 0,
  },
};

export default function fixRequestReducer(state = initialState, action: AnyAction)
: FixRequestStateModel { // NOSONAR
  const fixSections = [...state.fixRequestObj.Details[0].Sections];
  const fixSchedule = [...state.fixRequestObj.Schedule];
  switch (action.type) { // NOSONAR
    case FixRequestActionTypesModel.SET_NUMBER_OF_STEPS:
      return {
        ...state,
        numberOfSteps: action.payload,
      };
    case FixRequestActionTypesModel.SET_FIX_TEMPLATE_ID:
      return {
        ...state,
        fixTemplateId: action.payload,
      };
    case FixRequestActionTypesModel.ADD_FIX_STEPS_DYNAMIC_ROUTE:
      return {
        ...state,
        fixStepsDynamicRoutes:
        [...state.fixStepsDynamicRoutes, { key: action.payload }],
      };
    case FixRequestActionTypesModel.SET_CURRENT_FIX_STEPS_ROUTE_INDEX:
      return {
        ...state,
        fixStepsCurrentRouteIndex: action.payload,
      };
    case FixRequestActionTypesModel.ADD_FIX_REQUEST_TAG:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Tags: [
            ...state.fixRequestObj.Tags,
            { Name: action.payload },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_REQUEST_TAGS:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Tags: action.payload,
        },
      };
    case FixRequestActionTypesModel.SET_FIX_TEMPLATE_NAME:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Details: [{
            Name: action.payload,
            Description: state.fixRequestObj.Details[0].Description,
            Category: state.fixRequestObj.Details[0].Category,
            Type: state.fixRequestObj.Details[0].Type,
            Unit: state.fixRequestObj.Details[0].Unit,
            Sections: [
              ...state.fixRequestObj.Details[0].Sections,
            ],
          },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_TEMPLATE_CATEGORY:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Details: [{
            Name: state.fixRequestObj.Details[0].Name,
            Description: state.fixRequestObj.Details[0].Description,
            Category: action.payload,
            Type: state.fixRequestObj.Details[0].Type,
            Unit: state.fixRequestObj.Details[0].Unit,
            Sections: [
              ...state.fixRequestObj.Details[0].Sections,
            ],
          },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_TEMPLATE_TYPE:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Details: [{
            Name: state.fixRequestObj.Details[0].Name,
            Description: state.fixRequestObj.Details[0].Description,
            Category: state.fixRequestObj.Details[0].Category,
            Type: action.payload,
            Unit: state.fixRequestObj.Details[0].Unit,
            Sections: [
              ...state.fixRequestObj.Details[0].Sections,
            ],
          },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_DESCRIPTION:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Details: [{
            Name: state.fixRequestObj.Details[0].Name,
            Description: action.payload,
            Category: state.fixRequestObj.Details[0].Category,
            Type: state.fixRequestObj.Details[0].Type,
            Unit: state.fixRequestObj.Details[0].Unit,
            Sections: [
              ...state.fixRequestObj.Details[0].Sections,
            ],
          },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_UNIT:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Details: [{
            Name: state.fixRequestObj.Details[0].Name,
            Description: state.fixRequestObj.Details[0].Description,
            Category: state.fixRequestObj.Details[0].Category,
            Type: state.fixRequestObj.Details[0].Type,
            Unit: action.payload,
            Sections: [
              ...state.fixRequestObj.Details[0].Sections,
            ],
          },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_SECTION_TITLE:
      if (fixSections[action.payload.index]) {
        fixSections[action.payload.index] = {
          Name: action.payload.title,
          Details: [...fixSections[action.payload.index].Details],
        };
      } else {
        fixSections[action.payload.index] = {
          Name: action.payload.title,
          Details: [],
        };
      }
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Details: [{
            Name: state.fixRequestObj.Details[0].Name,
            Description: state.fixRequestObj.Details[0].Description,
            Category: state.fixRequestObj.Details[0].Category,
            Type: state.fixRequestObj.Details[0].Type,
            Unit: state.fixRequestObj.Details[0].Unit,
            Sections: fixSections,
          },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_SECTION_DETAILS:
      fixSections[action.payload.index] = {
        Name: (fixSections[action.payload.index]) ? fixSections[action.payload.index].Name : '',
        Details: action.payload.Details,
      };
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Details: [{
            Name: state.fixRequestObj.Details[0].Name,
            Description: state.fixRequestObj.Details[0].Description,
            Category: state.fixRequestObj.Details[0].Category,
            Type: state.fixRequestObj.Details[0].Type,
            Unit: state.fixRequestObj.Details[0].Unit,
            Sections: fixSections,
          },
          ],
        },
      };
    case FixRequestActionTypesModel.SET_FIX_ADDRESS:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Location: {
            ...state.fixRequestObj.Location,
            Address: action.payload,
          },
        },
      };
    case FixRequestActionTypesModel.SET_FIX_CITY:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Location: {
            ...state.fixRequestObj.Location,
            City: action.payload,
          },
        },
      };
    case FixRequestActionTypesModel.SET_FIX_PROVINCE:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Location: {
            ...state.fixRequestObj.Location,
            Province: action.payload,
          },
        },
      };
    case FixRequestActionTypesModel.SET_FIX_POSTAL_CODE:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Location: {
            ...state.fixRequestObj.Location,
            PostalCode: action.payload,
          },
        },
      };
    case FixRequestActionTypesModel.SET_CLIENT_MIN_ESTIMATED_COST:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          ClientEstimatedCost: {
            MinimumCost: action.payload,
            MaximumCost: state.fixRequestObj.ClientEstimatedCost.MaximumCost,
          },
        },
      };
    case FixRequestActionTypesModel.SET_CLIENT_MAX_ESTIMATED_COST:
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          ClientEstimatedCost: {
            MinimumCost: state.fixRequestObj.ClientEstimatedCost.MinimumCost,
            MaximumCost: action.payload,
          },
        },
      };
    case FixRequestActionTypesModel.SET_FIX_START_DATE:
      fixSchedule[0] = {
        StartTimestampUtc: action.payload,
        EndTimestampUtc: (state.fixRequestObj.Schedule[0])
          ? state.fixRequestObj.Schedule[0].EndTimestampUtc : 0,
      };
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Schedule: fixSchedule,
        },
      };
    case FixRequestActionTypesModel.SET_FIX_END_DATE:
      fixSchedule[0] = {
        StartTimestampUtc: (state.fixRequestObj.Schedule[0])
          ? state.fixRequestObj.Schedule[0].StartTimestampUtc : 0,
        EndTimestampUtc: action.payload,
      };
      return {
        ...state,
        fixRequestObj: {
          ...state.fixRequestObj,
          Schedule: fixSchedule,
        },
      };
    case FixRequestActionTypesModel.CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
}
