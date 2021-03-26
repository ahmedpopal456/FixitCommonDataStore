import { AddressObjModel } from './addressObjModel';

export interface ProfileStateModel {
  readonly profile: {
    firstName: string,
    lastName: string,
    address: Record<string, AddressObjModel>,
    profilePictureUrl: string,
  }
}
