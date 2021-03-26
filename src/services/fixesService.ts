import axios from 'axios';
import {
  setNewFixes,
  setPendingFixes,
  setInProgressFixes,
  setInReviewFixes,
  setCompletedFixes,
  setTerminatedFixes,
} from '../store/fixes/fixesActions';
import ConfigFactory from '../config/factory/configFactory';
import { FixesObjModel } from '../models/fixes/fixesObjModel';

export default class FixesService {
  configFactory: ConfigFactory;

  store: any;

  constructor(configFactory: ConfigFactory, store: any) {
    this.configFactory = configFactory;
    this.store = store;
  }

  getNewFixes(userId: string) : Promise<Array<FixesObjModel>> {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=0`)
        .then((response) => {
          this.store.dispatch(setNewFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getPendingFixes(userId: string) : Promise<Array<FixesObjModel>> {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=1`)
        .then((response) => {
          this.store.dispatch(setPendingFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getInProgressFixes(userId: string) : Promise<Array<FixesObjModel>> {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=2`)
        .then((response) => {
          this.store.dispatch(setInProgressFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getInReviewFixes(userId: string) : Promise<Array<FixesObjModel>> {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=3`)
        .then((response) => {
          this.store.dispatch(setInReviewFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getCompletedFixes(userId: string) : Promise<Array<FixesObjModel>> {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=4`)
        .then((response) => {
          this.store.dispatch(setCompletedFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getTerminatedFixes(userId: string) : Promise<Array<FixesObjModel>> {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=5`)
        .then((response) => {
          this.store.dispatch(setTerminatedFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }
}
