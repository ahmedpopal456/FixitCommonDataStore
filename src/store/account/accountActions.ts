import AccountActionTypesModel from '../../models/account/accountActionTypesModel';
import { SetAccountInfoActionModel } from '../../models/account/accountActionModel';

const setAccountInfo = (userId: string, email: string, password: string): SetAccountInfoActionModel => ({
  type: AccountActionTypesModel.SET_ACCOUNT_INFO,
  payload: {
    userId: userId,
    email: email,
    password: password,
  },
});

export default setAccountInfo;