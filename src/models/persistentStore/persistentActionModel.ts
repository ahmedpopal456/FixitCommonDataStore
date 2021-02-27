import { ActionModel } from '../ActionModel';

export interface SetAuthStatusActionModel extends ActionModel {
  payload: {
    isAuthenticated: boolean,
    authToken: string | undefined,
  };
}
