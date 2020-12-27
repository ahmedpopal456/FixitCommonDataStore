import { UserAction } from './userAction';
import { AppThunk } from '../../types';

export interface UserActions {
  logUserInSuccess(id: number): UserAction,
  logUserInError(error: string): UserAction,
  changeUserDisplayName(name: string): UserAction,
  logUserIn(id: number, token: string,): AppThunk<void>;
}
