import UserStatus from './userStatusModel';

export interface UserSummaryModel {
  id?: string,
  firstName: string,
  lastName: string,
  profilePictureUrl?: string,
  userRole?: string,
  status?: {
    status: UserStatus,
    lastSeenTimestampUtc: number
  }
}
