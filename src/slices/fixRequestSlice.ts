import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Schedule } from '../models/common/scheduleModel';
import { ClientEstimatedCostModel } from '../models/common/clientEstimatedCostModel';
import { AddressModel } from '../models/common/addressModel';
import { UserSummaryModel } from '../models/user/userSummaryModel';

export interface TagModel {
  id?: string;
  name: string;
}

export interface SectionDetailsModel {
  name: string;
  value: string;
}

export interface SectionModel {
  name: string;
  details: Array<SectionDetailsModel>;
}

interface Details {
  name: string;
  description: string;
  category: string;
  type: string;
  unit?: string;
  sections: Array<SectionModel>;
}

interface MetadataModel {
  createdTimeStampUTC: number;
  updatedTimeStampUTC: number;
}
interface ImagesModel {
  name: string;
  url: string;
  metadata: MetadataModel;
}

export interface FixRequestModel {
  tags: Array<TagModel>;
  details: Details;
  images?: Array<ImagesModel>;
  location: AddressModel;
  schedule: Array<Schedule>;
  clientEstimatedCost: ClientEstimatedCostModel;
  createdByClient: UserSummaryModel;
  updatedByUser: UserSummaryModel;
  status: number;
}

interface FixStepsDynamicRoutes {
  key: string;
}
export interface FixRequestState {
  numberOfSteps: number;
  fixStepsCurrentRouteIndex: number;
  fixStepsDynamicRoutes: Array<FixStepsDynamicRoutes>;
  fixRequestObj: FixRequestModel;
}

const initialState: FixRequestState = {
  numberOfSteps: 4,
  fixStepsCurrentRouteIndex: 0,
  fixStepsDynamicRoutes: [],
  fixRequestObj: {
    tags: [],
    details: {
      name: '',
      description: '',
      category: 'Foundation',
      type: 'Quick Fix',
      sections: [
        {
          name: '',
          details: [
            {
              name: '',
              value: '',
            },
          ],
        },
      ],
      unit: 'Front Yard',
    },
    location: {
      address: '',
      city: '',
      province: '',
      postalCode: '',
    },
    schedule: [
      {
        startTimestampUtc: 0,
        endTimestampUtc: 0,
      },
    ],
    clientEstimatedCost: {
      maximumCost: 0,
      minimumCost: 0,
    },
    createdByClient: {
      firstName: '',
      lastName: '',
    },
    updatedByUser: {
      firstName: '',
      lastName: '',
    },
    status: 0,
  },
};

type NumberOfStepsPick = Pick<FixRequestState, 'numberOfSteps'>;

type CreatedByUserPick = Pick<UserSummaryModel, 'firstName' | 'lastName'>;
type UpdatedByUserPick = Pick<UserSummaryModel, 'firstName' | 'lastName'>;

const fixRequestSlice = createSlice({
  name: 'fixRequest',
  initialState,
  reducers: {
    setNumberOfSteps: (state, action: PayloadAction<NumberOfStepsPick>) => {
      state.numberOfSteps = action.payload.numberOfSteps;
    },

    setFixSectionTitle: (
      state,
      action: PayloadAction<{ index: number; sectionName: string }>,
    ) => {
      if (state.fixRequestObj.details.sections[action.payload.index]) {
        state.fixRequestObj.details.sections[action.payload.index].name = action.payload.sectionName;
      } else {
        state.fixRequestObj.details.sections[action.payload.index] = {
          name: action.payload.sectionName,
          details: [],
        };
      }
    },
    setFixSectionDetails: (
      state,
      action: PayloadAction<{
        index: number;
        details: Array<SectionDetailsModel>;
      }>,
    ) => {
      if (state.fixRequestObj.details.sections[action.payload.index]) {
        state.fixRequestObj.details.sections[action.payload.index] = {
          name: state.fixRequestObj.details.sections[action.payload.index]
            ? state.fixRequestObj.details.sections[action.payload.index].name
            : '',
          details: action.payload.details,
        };
      }
    },
    addFixStepsDynamicRoutes: (
      state,
      action: PayloadAction<FixStepsDynamicRoutes>,
    ) => {
      state.fixStepsDynamicRoutes.push(action.payload);
    },
    setCurrentFixStepsRouteIndex: (
      state,
      action: PayloadAction<{ routeIndex: number }>,
    ) => {
      state.fixStepsCurrentRouteIndex = action.payload.routeIndex;
    },
    addFixRequestTag: (state, action: PayloadAction<TagModel>) => {
      state.fixRequestObj.tags.push(action.payload);
    },

    setFixRequestAddress: (
      state,
      action: PayloadAction<{ address: string }>,
    ) => {
      state.fixRequestObj.location.address = action.payload.address;
    },
    setFixRequestCity: (state, action: PayloadAction<{ city: string }>) => {
      state.fixRequestObj.location.city = action.payload.city;
    },
    setFixRequestProvince: (
      state,
      action: PayloadAction<{ province: string }>,
    ) => {
      state.fixRequestObj.location.province = action.payload.province;
    },
    setFixRequestPostalCode: (
      state,
      action: PayloadAction<{ postalCode: string }>,
    ) => {
      state.fixRequestObj.location.postalCode = action.payload.postalCode;
    },
    setFixStartDate: (
      state,
      action: PayloadAction<{ startTimestamp: number }>,
    ) => {
      state.fixRequestObj.schedule[0].startTimestampUtc = action.payload.startTimestamp;
    },
    setFixEndDate: (state, action: PayloadAction<{ endTimestamp: number }>) => {
      state.fixRequestObj.schedule[0].endTimestampUtc = action.payload.endTimestamp;
    },
    addFixRequestSchedule: (state, action: PayloadAction<Schedule>) => {
      state.fixRequestObj.schedule.push(action.payload);
    },
    setFixRequestClientMinEstimatedCost: (
      state,
      action: PayloadAction<{ minimumCost: number }>,
    ) => {
      state.fixRequestObj.clientEstimatedCost.minimumCost = action.payload.minimumCost;
    },
    setFixRequestClientMaxEstimatedCost: (
      state,
      action: PayloadAction<{ maximumCost: number }>,
    ) => {
      state.fixRequestObj.clientEstimatedCost.maximumCost = action.payload.maximumCost;
    },
    setFixRequestCreatedByUser: (
      state,
      action: PayloadAction<CreatedByUserPick>,
    ) => {
      state.fixRequestObj.createdByClient = action.payload;
    },
    setFixRequestUpdatedByUser: (
      state,
      action: PayloadAction<UpdatedByUserPick>,
    ) => {
      state.fixRequestObj.updatedByUser = action.payload;
    },
    setFixRequestDetailsSection: (
      state,
      action: PayloadAction<{ index: number; section: SectionModel }>,
    ) => {
      state.fixRequestObj.details.sections[action.payload.index] = action.payload.section;
    },
    clearData: () => initialState,
  },
});

export const {
  setCurrentFixStepsRouteIndex,
  setFixRequestClientMaxEstimatedCost,
  setFixRequestClientMinEstimatedCost,
  setFixRequestCreatedByUser,
  setFixRequestDetailsSection,
  setFixRequestAddress,
  setFixRequestCity,
  setFixRequestPostalCode,
  setFixRequestProvince,
  setFixEndDate,
  setFixStartDate,
  setFixRequestUpdatedByUser,
  setNumberOfSteps,
  addFixRequestSchedule,
  addFixRequestTag,
  addFixStepsDynamicRoutes,
  setFixSectionTitle,
  setFixSectionDetails,
  clearData,
} = fixRequestSlice.actions;

export default fixRequestSlice.reducer;
