interface AssignedToCraftsman {
  Id: string,
  FirstName: string,
  LastName: string,
}
interface CreatedByClient {
  Id: string,
  firstName: string,
  lastName: string,
  profilePictureUrl: string,
  role: number,
  status: string,
}
interface Details {
  category: string,
  description: string,
  name: string,
  section: string,
  type: string,
}
interface Images {
  metadata: string,
  url: string,
  name: string,
}
interface Schedule {
  startTimestampUtc: number,
  endTimestampUtc: number,
}
interface Tags {
  Key: string,
  Value: string,
}
export interface FixesObjModel {
  activityHistoryId: string,
  assignedToCraftsman: AssignedToCraftsman,
  billingActivityId: string,
  clientEstimatedCost: any,
  craftsmanEstimatedCost: any,
  createdByClient: CreatedByClient,
  createdTimestampUtc: number,
  details: Array<Details>,
  id: string,
  images: Array<Images>,
  location: {
    address: string,
    city: string,
    postalCode: string,
    province: string,
  },
  planSummary: any,
  schedule: Array<Schedule>,
  status: number,
  systemCalculatedCost: number,
  tags: Array<Tags>,
  updatedByUser: {
    firstName: string,
    lastName: string,
    id: string,
    profilePictureUrl: string,
    role: number,
    status: number,
  },
  updatedTimestampUtc: number,
// eslint-disable-next-line semi
}
