import axios from 'axios';
import { FixRequestObjModel } from '../models/fixRequest/fixRequestObjModel';

export default class FixRequestService {
  fixRequestBaseUrl: string;

  constructor() {
    this.fixRequestBaseUrl = 'https://fixit-dev-fms-api.azurewebsites.net/api/fixes';
  }

  // TODO use the config factory
  publishFixRequest(fixRequestObj: FixRequestObjModel) : void {
    const { fixRequestBaseUrl } = this;
    axios.post(fixRequestBaseUrl, fixRequestObj)
      // TODO send data to handle exceptions in UI
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
