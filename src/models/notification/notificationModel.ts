interface Payload {
  id: string,
}
interface Tag {
  key: string,
  value: string,
}

interface Recipient {
  id: string,
  firstName: string,
  lastName: string,
  profilePictureUrl: string,
  role: number,
  status: string,
}

interface RequestSummary {
  payload: Payload,
  action: number,
  tags: Array<Tag>,
  recipients: Array<Recipient>,
  silent: boolean,
  createdTimestampUtc: number,
  retries: number,
}

export default interface NotificationModel {
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
