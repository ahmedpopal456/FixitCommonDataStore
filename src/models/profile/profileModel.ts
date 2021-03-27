export interface AddressModel {
  address: string,
  city: string,
  country: string,
  phoneNumber: string,
  postalCode: string,
  province: string,
}

export interface ProfileModel {
  firstName: string,
  lastName: string,
  address: AddressModel,
  profilePictureUrl: string,
}
