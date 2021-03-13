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
import { store } from '../index';

export default class FixesService {
  configFactory: ConfigFactory;

  constructor(configFactory: ConfigFactory) {
    this.configFactory = configFactory;
  }

  getNewFixes(userId: string) {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=0`)
        .then((response) => {
          store.dispatch(setNewFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getPendingFixes(userId: string) {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=1`)
        .then((response) => {
          store.dispatch(setPendingFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getInProgressFixes(userId: string) {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=2`)
        .then((response) => {
          store.dispatch(setInProgressFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getInReviewFixes(userId: string) {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=3`)
        .then((response) => {
          store.dispatch(setInReviewFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getCompletedFixes(userId: string) {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=4`)
        .then((response) => {
          store.dispatch(setCompletedFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }

  getTerminatedFixes(userId: string) {
    return (
      axios.get(`https://fixit-dev-fms-api.azurewebsites.net/api/fixes/users/${userId}?statuses=5`)
        .then((response) => {
          store.dispatch(setTerminatedFixes(response.data));
          return response.data;
        })
        .catch((error) => console.error(error))
    );
  }
}
