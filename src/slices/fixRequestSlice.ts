import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Schedule } from '../models/common/scheduleModel';
import { ClientEstimatedCostModel } from '../models/common/clientEstimatedCostModel';
import { AddressModel } from '../models/common/addressModel';
import { UserSummaryModel } from '../models/user/userSummaryModel';

export interface TagModel {
  id?: string;
  name: string;
}

export interface FixTemplateObjectModel {
  Status: string;
  Name: string;
  WorkTypeId: string;
  WorkCategoryId: string;
  FixUnitId: string | undefined;
  Description: string;
  CreatedByUserId: string | undefined;
  UpdatedByUserId: string | undefined;
  Tags: Array<TagModel>;
  Sections: Array<{
    Name: string;
    Fields: Array<{
      Name: string;
      Values: Array<string>;
    }>;
  }>;
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
  fixTemplateId: string;
  fixStepsDynamicRoutes: Array<FixStepsDynamicRoutes>;
  fixRequestObj: FixRequestModel;
}

const initialState: FixRequestState = {
  numberOfSteps: 4,
  fixStepsCurrentRouteIndex: 0,
  fixStepsDynamicRoutes: [],
  fixTemplateId: '',
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
type FixTemplateIdPick = Pick<FixRequestState, 'fixTemplateId'>;
type FixTemplateBasePick = Pick<Details, 'name' | 'category' | 'unit' | 'description' | 'type'>;
type DetailsUnitPick = Pick<Details, 'unit'>;
type DetailsNamePick = Pick<Details, 'name'>;
type DetailsCategoryPick = Pick<Details, 'category'>;
type DetailsTypePick = Pick<Details, 'type'>;
type CreatedByUserPick = Pick<UserSummaryModel, 'firstName' | 'lastName'>;
type UpdatedByUserPick = Pick<UserSummaryModel, 'firstName' | 'lastName'>;

const fixRequestSlice = createSlice({
  name: 'fixRequest',
  initialState,
  reducers: {
    setNumberOfSteps: (state, action: PayloadAction<NumberOfStepsPick>) => {
      state.numberOfSteps = action.payload.numberOfSteps;
    },
    setFixTemplateId: (state, action: PayloadAction<FixTemplateIdPick>) => {
      state.fixTemplateId = action.payload.fixTemplateId;
    },
    setFixUnit: (state, action: PayloadAction<DetailsUnitPick>) => {
      state.fixRequestObj.details.unit = action.payload.unit;
    },
    setFixTemplateName: (state, action: PayloadAction<DetailsNamePick>) => {
      state.fixRequestObj.details.name = action.payload.name;
    },
    setFixTemplateCategory: (
      state,
      action: PayloadAction<DetailsCategoryPick>,
    ) => {
      state.fixRequestObj.details.category = action.payload.category;
    },
    setFixTemplateType: (state, action: PayloadAction<DetailsTypePick>) => {
      state.fixRequestObj.details.type = action.payload.type;
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
    setFixRequestTags: (state, action: PayloadAction<Array<TagModel>>) => {
      state.fixRequestObj.tags = action.payload;
    },
    setFixTemplateBase: (state, action: PayloadAction<FixTemplateBasePick>) => {
      state.fixRequestObj.details.name = action.payload.name;
      state.fixRequestObj.details.category = action.payload.category;
      state.fixRequestObj.details.description = action.payload.description;
      state.fixRequestObj.details.type = action.payload.type;
      state.fixRequestObj.details.unit = action.payload.unit;
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
  setFixTemplateBase,
  setFixRequestDetailsSection,
  setFixRequestAddress,
  setFixRequestCity,
  setFixRequestPostalCode,
  setFixRequestProvince,
  setFixEndDate,
  setFixStartDate,
  setFixRequestUpdatedByUser,
  setFixTemplateId,
  setNumberOfSteps,
  setFixRequestTags,
  addFixRequestSchedule,
  addFixRequestTag,
  addFixStepsDynamicRoutes,
  setFixUnit,
  setFixTemplateName,
  setFixTemplateCategory,
  setFixTemplateType,
  setFixSectionTitle,
  setFixSectionDetails,
  clearData,
} = fixRequestSlice.actions;

export default fixRequestSlice.reducer;
