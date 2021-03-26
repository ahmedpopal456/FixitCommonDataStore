interface Payload {
  Id: string,
}
interface Tag {
  Key: string,
  Value: string,
}
interface Recipient {
  Id: string,
  FirstName: string,
  LastName: string,
  ProfilePictureUrl: string,
  Role: number,
  Status: string,
}
interface RequestSummary {
  Payload: Payload,
  Action: number,
  Tags: Array<Tag>,
  Recipients: Array<Recipient>,
  Silent: boolean,
  CreatedTimestampUtc: number,
  Retries: number,
}
export default interface NotificationListObjModel {
  collapseKey: string,
  from: string,
  notification: {
    android: Record<string, any>,
    title: string,
    body: string,
  },
  visited: boolean,
  messageId: number,
  requestSummary: RequestSummary,
  data: {
    message: string,
  },
  sentTime: number,
  ttl: number,
// eslint-disable-next-line semi
}
