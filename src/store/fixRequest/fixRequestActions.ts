import FixRequestActionTypesModel from '../../models/fixRequest/fixRequestActionTypesModel';
import {
  AddFixStepsDynamicRoute,
  SetCurrentFixStepsRouteIndex,
  AddFixRequestTag,
  SetNumberOfSteps,
  SetFixTemplateName,
  SetFixTemplateCategory,
  SetFixTemplateType,
  SetFixTitle,
  SetFixDescription,
  SetFixSectionTitle,
  SetFixSectionDetails,
  SetFixAddress,
  SetFixProvince,
  SetFixCity,
  SetClientMinEstimatedCost,
  SetClientMaxEstimatedCost,
  SetFixStartDate,
  SetFixEndDate,
  SetFixRequestTags,
  SetFixPostalCode,
} from '../../models/fixRequest/fixRequestActionModel';

const setNumberOfSteps = (totalSteps:number): SetNumberOfSteps => ({
  type: FixRequestActionTypesModel.SET_NUMBER_OF_STEPS,
  payload: totalSteps,
});

const addFixStepsDynamicRoute = (newRouteKey:string): AddFixStepsDynamicRoute => ({
  type: FixRequestActionTypesModel.ADD_FIX_STEPS_DYNAMIC_ROUTE,
  payload: newRouteKey,
});

const setCurrentFixStepsRouteIndex = (index:number) : SetCurrentFixStepsRouteIndex => ({
  type: FixRequestActionTypesModel.SET_CURRENT_FIX_STEPS_ROUTE_INDEX,
  payload: index,
});

const addFixRequestTag = (name:string) : AddFixRequestTag => ({
  type: FixRequestActionTypesModel.ADD_FIX_REQUEST_TAG,
  payload: name,
});

const setFixRequestTags = (tags:{Name:string}[]) : SetFixRequestTags => ({
  type: FixRequestActionTypesModel.SET_FIX_REQUEST_TAGS,
  payload: tags,
});

const setFixTemplateName = (name:string) : SetFixTemplateName => ({
  type: FixRequestActionTypesModel.SET_FIX_TEMPLATE_NAME,
  payload: name,
});

const setFixTemplateCategory = (category:string) : SetFixTemplateCategory => ({
  type: FixRequestActionTypesModel.SET_FIX_TEMPLATE_CATEGORY,
  payload: category,
});

const setFixTemplateType = (type:string) : SetFixTemplateType => ({
  type: FixRequestActionTypesModel.SET_FIX_TEMPLATE_TYPE,
  payload: type,
});

const setFixTitle = (title:string) : SetFixTitle => ({
  type: FixRequestActionTypesModel.SET_FIX_TITLE,
  payload: title,
});

const setFixDescription = (description:string) : SetFixDescription => ({
  type: FixRequestActionTypesModel.SET_FIX_DESCRIPTION,
  payload: description,
});

const setFixSectionTitle = (title:string, index:number) : SetFixSectionTitle => ({
  type: FixRequestActionTypesModel.SET_FIX_SECTION_TITLE,
  payload: {
    index,
    title,
  },
});

const setFixSectionDetails = (details: {name:string, value:string}[], index:number)
: SetFixSectionDetails => ({
  type: FixRequestActionTypesModel.SET_FIX_SECTION_DETAILS,
  payload: {
    index,
    details,
  },
});

const setFixAddress = (address:string) : SetFixAddress => ({
  type: FixRequestActionTypesModel.SET_FIX_ADDRESS,
  payload: address,
});

const setFixCity = (address:string) : SetFixCity => ({
  type: FixRequestActionTypesModel.SET_FIX_CITY,
  payload: address,
});

const setFixProvince = (address:string) : SetFixProvince => ({
  type: FixRequestActionTypesModel.SET_FIX_PROVINCE,
  payload: address,
});

const setFixPostalCode = (address:string) : SetFixPostalCode => ({
  type: FixRequestActionTypesModel.SET_FIX_POSTAL_CODE,
  payload: address,
});

const setClientMinEstimatedCost = (cost:number) : SetClientMinEstimatedCost => ({
  type: FixRequestActionTypesModel.SET_CLIENT_MIN_ESTIMATED_COST,
  payload: cost,
});

const setClientMaxEstimatedCost = (cost:number) : SetClientMaxEstimatedCost => ({
  type: FixRequestActionTypesModel.SET_CLIENT_MAX_ESTIMATED_COST,
  payload: cost,
});

const setFixStartDate = (timestamp:number) : SetFixStartDate => ({
  type: FixRequestActionTypesModel.SET_FIX_START_DATE,
  payload: timestamp,
});

const setFixEndDate = (timestamp:number) : SetFixEndDate => ({
  type: FixRequestActionTypesModel.SET_FIX_END_DATE,
  payload: timestamp,
});

export {
  setNumberOfSteps,
  addFixStepsDynamicRoute,
  setCurrentFixStepsRouteIndex,
  addFixRequestTag,
  setFixRequestTags,
  setFixTemplateName,
  setFixTemplateCategory,
  setFixTemplateType,
  setFixTitle,
  setFixDescription,
  setFixSectionTitle,
  setFixSectionDetails,
  setFixAddress,
  setFixCity,
  setFixProvince,
  setFixPostalCode,
  setClientMinEstimatedCost,
  setClientMaxEstimatedCost,
  setFixStartDate,
  setFixEndDate,
};
