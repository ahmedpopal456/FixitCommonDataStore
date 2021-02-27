import { ActionModel } from '../ActionModel';

export interface SetAccountInfoActionModel extends ActionModel {
  payload: {
    userId: string;
    email: string,
    password: string;
  }
}