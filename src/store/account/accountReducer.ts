import { AnyAction } from 'redux';
import AccountActionTypesModel from '../../models/account/accountActionTypesModel';
import { AccountStateModel } from '../../models/account/accountStateModel';

const initialState: AccountStateModel = {
  account: {
    userId: '',
    email: '',
    password: '',
  },
};

export default function accountReducer(state = initialState, action: AnyAction) // NOSONAR
: AccountStateModel {
  switch (action.type) { // NOSONAR
    case AccountActionTypesModel.SET_ACCOUNT_INFO:
      return {
        ...state,
        account: {
          userId: action.payload.userId,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    default:
      return state;
  }
}
