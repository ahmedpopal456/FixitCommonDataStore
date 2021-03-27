import { ActionModel } from '../ActionModel';

export interface SetNumberOfSteps extends ActionModel {
  payload: number,
}

export interface AddFixStepsDynamicRoute extends ActionModel {
  payload: string,
}

export interface SetCurrentFixStepsRouteIndex extends ActionModel {
  payload: number,
}

export interface AddFixRequestTag extends ActionModel {
  payload: string
}

export interface SetFixRequestTags extends ActionModel {
  payload: {Name:string}[]
}

export interface SetFixTemplateName extends ActionModel {
  payload: string
}

export interface SetFixTemplateCategory extends ActionModel {
  payload: string
}

export interface SetFixTemplateType extends ActionModel {
  payload: string
}

export interface SetFixTitle extends ActionModel {
  payload: string
}

export interface SetFixDescription extends ActionModel {
  payload: string
}

export interface SetFixSectionTitle extends ActionModel {
  payload: {
    index: number,
    title: string,
  }
}

export interface SetFixSectionDetails extends ActionModel {
  payload: {
    index: number,
    details: {
      name:string,
      value:string,
    }[]
  }
}

export interface SetFixAddress extends ActionModel {
  payload: string
}

export interface SetFixCity extends ActionModel {
  payload: string
}

export interface SetFixProvince extends ActionModel {
  payload: string
}

export interface SetFixPostalCode extends ActionModel {
  payload: string
}

export interface SetClientMinEstimatedCost extends ActionModel {
  payload: number
}

export interface SetClientMaxEstimatedCost extends ActionModel {
  payload: number
}

export interface SetFixStartDate extends ActionModel {
  payload: number
}

export interface SetFixEndDate extends ActionModel {
  payload: number
}
