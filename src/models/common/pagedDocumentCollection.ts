import { OperationStatus } from './operationStatus';

export interface PagedDocumentCollection<T = unknown> extends OperationStatus {
  result?: Array<T>;
  totalDocumentCount: number;
  pageNumber: number;
  pageCount?: number;
}
