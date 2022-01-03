import axios from 'axios';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Store } from 'redux';
import { RootState } from '../rootReducer';
import {
  FixesModel,
  FETCH_NEWFIXES_BEGIN,
  FETCH_PENDINGFIXES_BEGIN,
  FETCH_PENDINGFIXES_SUCCESS,
  FETCH_PENDINGFIXES_FAILURE,
  FETCH_INPROGRESSFIXES_BEGIN,
  FETCH_INPROGRESSFIXES_SUCCESS,
  FETCH_INPROGRESSFIXES_FAILURE,
  FETCH_INREVIEWFIXES_BEGIN,
  FETCH_INREVIEWFIXES_SUCCESS,
  FETCH_INREVIEWFIXES_FAILURE,
  FETCH_COMPLETEDFIXES_BEGIN,
  FETCH_COMPLETEDFIXES_SUCCESS,
  FETCH_COMPLETEDFIXES_FAILURE,
  FETCH_TERMINATEDFIXES_BEGIN,
  FETCH_TERMINATEDFIXES_SUCCESS,
  FETCH_TERMINATEDFIXES_FAILURE,
  FETCH_NEWFIXES_SUCCESS,
  FETCH_NEWFIXES_FAILURE,
  FixTagModel,
  FETCH_POPULARFIXTAGS_BEGIN,
  FETCH_POPULARFIXTAGS_SUCCESS,
  FETCH_POPULARFIXTAGS_FAILURE,
  UPDATE_FIX_BEGIN,
  UPDATE_FIX_SUCCESS,
  UPDATE_FIX_FAILURE,
  FETCH_TERMINATEDBYCRAFTSMANFIXES_SUCCESS,
  FETCH_TERMINATEDBYCRAFTSMANFIXES_FAILURE,
  FETCH_TERMINATEDBYCLIENTFIXES_SUCCESS,
  FETCH_TERMINATEDBYCLIENTFIXES_FAILURE,
} from '../slices/fixesSlice';
import ConfigFactory from '../config/factory/configFactory';

export default class FixesService {
  configFactory: ConfigFactory;

  store: any;

  constructor(configFactory: ConfigFactory, store: Store<RootState & PersistPartial, any> & {
    dispatch: unknown;
}) {
    this.configFactory = configFactory;
    this.store = store;
  }

  getNewFixes(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_NEWFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=0`)
        .then((response) => {
          this.store.dispatch(FETCH_NEWFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_NEWFIXES_FAILURE(error));
        }));
  }

  getPendingFixes(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_PENDINGFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=1`)
        .then((response) => {
          this.store.dispatch(FETCH_PENDINGFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_PENDINGFIXES_FAILURE(error));
        }));
  }

  getInProgressFixes(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_INPROGRESSFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=2`)
        .then((response) => {
          this.store.dispatch(FETCH_INPROGRESSFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_INPROGRESSFIXES_FAILURE(error));
        }));
  }

  getInReviewFixes(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_INREVIEWFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=3`)
        .then((response) => {
          this.store.dispatch(FETCH_INREVIEWFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_INREVIEWFIXES_FAILURE(error));
        }));
  }

  getCompletedFixes(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_COMPLETEDFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=4`)
        .then((response) => {
          this.store.dispatch(FETCH_COMPLETEDFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_COMPLETEDFIXES_FAILURE(error));
        }));
  }

  getTerminatedFixes(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_TERMINATEDFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=5`)
        .then((response) => {
          this.store.dispatch(FETCH_TERMINATEDFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_TERMINATEDFIXES_FAILURE(error));
        }));
  }

  getTerminatedByCraftsman(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_TERMINATEDFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=7`)
        .then((response) => {
          this.store.dispatch(FETCH_TERMINATEDBYCRAFTSMANFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_TERMINATEDBYCRAFTSMANFIXES_FAILURE(error));
        }));
  }

  getTerminatedByClient(userId: string) : Promise<Array<FixesModel>> {
    this.store.dispatch(FETCH_TERMINATEDFIXES_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=6`)
        .then((response) => {
          this.store.dispatch(FETCH_TERMINATEDBYCLIENTFIXES_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_TERMINATEDBYCLIENTFIXES_FAILURE(error));
        }));
  }

  getPopularFixTags(count: string) : Promise<Array<FixTagModel>> {
    this.store.dispatch(FETCH_POPULARFIXTAGS_BEGIN());
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/tags/${count}`)
        .then((response) => {
          this.store.dispatch(FETCH_POPULARFIXTAGS_SUCCESS(response.data));
          return response.data;
        })
        .catch((error) => {
          this.store.dispatch(FETCH_POPULARFIXTAGS_FAILURE(error));
        }));
  }

  async updateFix(fixId: string, body: Partial<FixesModel>) : Promise<FixesModel | null> {
    this.store.dispatch(UPDATE_FIX_BEGIN());
    try {
      const response = await axios.put(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/${fixId}`, body);
      this.store.dispatch(UPDATE_FIX_SUCCESS(response.data));
      return response.data;
    } catch (error) {
      this.store.dispatch(UPDATE_FIX_FAILURE(error));
      return null;
    }
  }

  getFix = (fixId: string):
  Promise<FixesModel> => axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/${fixId}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
