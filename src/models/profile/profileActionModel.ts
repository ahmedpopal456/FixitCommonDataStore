import { ActionModel } from '../ActionModel';
import { AddressObjModel } from './addressObjModel';

export interface SetProfileInfoActionModel extends ActionModel {
  payload: {
    firstName: string,
    lastName: string,
    address: Record<string, AddressObjModel>,
    profilePictureUrl: string,
  }
}
