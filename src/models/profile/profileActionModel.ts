import { ActionModel } from '../ActionModel';

export interface SetProfileInfoActionModel extends ActionModel {
  payload: {
    firstName: string,
    lastName: string,
    address: {},
    profilePictureUrl: string,
  }
}
