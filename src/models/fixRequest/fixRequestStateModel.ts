import { FixRequestObjModel } from './fixRequestObjModel';

export interface FixRequestStateModel {
      readonly numberOfSteps: number,
      readonly fixStepsCurrentRouteIndex: number,
      readonly fixTemplateId: string,
      readonly fixStepsDynamicRoutes:{
        key:string,
      }[],
      readonly fixRequestObj: FixRequestObjModel,
  }
