import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './reducer';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<any>>;
