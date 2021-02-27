import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import { SetAuthStatusActionModel } from '../models/persistentStore/persistentActionModel';

const setAuthStatus = (authStatus : boolean, token : string): SetAuthStatusActionModel => ({
  type: PersistentActionTypesModel.SET_AUTH_STATUS,
  payload: {
    isAuthenticated: authStatus,
    authToken: token,
  },
});

export default setAuthStatus;
