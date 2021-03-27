import { ActionModel } from '../ActionModel';
import { AddressModel } from './profileModel';

export interface SetProfileInfoActionModel extends ActionModel {
  payload: {
    firstName: string,
    lastName: string,
    address: AddressModel,
    profilePictureUrl: string,
  }
}
