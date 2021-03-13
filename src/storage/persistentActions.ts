import PersistentActionTypesModel from '../models/persistentStore/persistentActionTypesModel';
import { SetAuthStatusActionModel, SetPushChannelTokenActionModel } from '../models/persistentStore/persistentActionModel';

const setAuthStatus = (authStatus: boolean, token: string): SetAuthStatusActionModel => ({
  type: PersistentActionTypesModel.SET_AUTH_STATUS,
  payload: {
    isAuthenticated: authStatus,
    authToken: token,
  },
});

const setPushChannelToken = (pushChannelToken: string): SetPushChannelTokenActionModel => ({
  type: PersistentActionTypesModel.SET_NOTIFICATION_TOKEN,
  payload: {
    pushChannelToken,
  },
});

export default {
  setAuthStatus,
  setPushChannelToken,
};
