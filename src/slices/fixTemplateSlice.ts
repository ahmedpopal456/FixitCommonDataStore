import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Category, Type, Unit, FixTemplateStatus,
} from '../models/common';

export interface FixTemplateSectionField {
  id?: string,
  name: string;
  value: string;
}

export interface FixTemplateSection {
  sectionId?: string,
  name: string;
  fields: Array<FixTemplateSectionField>;
}

export interface FixTemplateModel {
  id: string,
  status: FixTemplateStatus;
  name: string;
  workType: Type;
  workCategory: Category;
  fixUnit: Unit;
  description: string;
  createdByUserId: string;
  updatedByUserId: string;
  systemCostEstimate: number;
  tags: Array<string>;
  sections: Array<FixTemplateSection>;
}

interface PartialUpdateTemplateModel {
  id?: string,
  status?: FixTemplateStatus;
  name?: string;
  workType?: Type;
  workCategory?: Category;
  fixUnit?: Unit;
  description?: string;
  createdByUserId?: string;
  updatedByUserId?: string;
  systemCostEstimate?: number;
  tags?: Array<string>;
  sections?: Array<FixTemplateSection>;
}

export type FixTemplateState = FixTemplateModel;

const initialState: FixTemplateState = {
  id: '',
  status: FixTemplateStatus.PUBLIC,
  name: '',
  workType: { id: '', name: '' },
  workCategory: { id: '', name: '', skills: [] },
  fixUnit: { id: '', name: '' },
  description: '',
  createdByUserId: '',
  updatedByUserId: '',
  systemCostEstimate: 0,
  tags: [],
  sections: [],
};

const fixTemplateSlice = createSlice({
  name: 'fixTemplate',
  initialState,
  reducers: {
    updateFixTemplate: (state, action: PayloadAction<FixTemplateModel | PartialUpdateTemplateModel>) => {
      if (action.payload.id) state.id = action.payload.id;
      if (action.payload.status) state.status = action.payload.status;
      if (action.payload.name) state.name = action.payload.name;
      if (action.payload.workType) state.workType = action.payload.workType;
      if (action.payload.workCategory) state.workCategory = action.payload.workCategory;
      if (action.payload.fixUnit) state.fixUnit = action.payload.fixUnit;
      if (action.payload.description) state.description = action.payload.description;
      if (action.payload.createdByUserId) state.createdByUserId = action.payload.createdByUserId;
      if (action.payload.updatedByUserId) state.updatedByUserId = action.payload.updatedByUserId;
      if (action.payload.tags) state.tags = action.payload.tags;
      if (action.payload.sections) state.sections = action.payload.sections;
    },
  },
});

export const {
  updateFixTemplate,
} = fixTemplateSlice.actions;

export default fixTemplateSlice.reducer;
