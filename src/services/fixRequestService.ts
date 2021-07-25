import axios from 'axios';
import { Category, Type, Unit } from 'src/models/common';
import Status from 'src/models/common/fixTemplateStatus';
import {
  FixRequestModel,
  clearData,
} from '../slices/fixRequestSlice';

import {
  updateFixTemplate,
  FixTemplateSection,
} from '../slices/fixTemplateSlice';

export interface FixTemplateUpdateRequest {
  name?: string;
  workTypeId?: Type;
  workCategoryId?: Category;
  fixUnitId?: Unit;
  description?: string;
  updatedByUserId?: string;
  tags?: Array<string>;
  sections?: Array<FixTemplateSection>;
}

export interface FixTemplateCreateRequest extends FixTemplateUpdateRequest {
  status: Status,
  createdByUserId: string;
}

export class FixRequestService {
  fixRequestBaseUrl: string;

  mdmBaseApiUrl: string;

  store: any;

  constructor(store: any) {
    this.fixRequestBaseUrl = 'https://fixit-dev-fms-api.azurewebsites.net/api/fixes';
    this.mdmBaseApiUrl = 'https://fixit-dev-mdm-api.azurewebsites.net/api/';
    this.store = store;
  }

  // TODO use the config factory
  publishFixRequest(fixRequestObj: FixRequestModel): void {
    const { fixRequestBaseUrl } = this;
    axios
      .post(fixRequestBaseUrl, fixRequestObj)
      // TODO send data to handle exceptions in UI
      .then((response) => {
        this.store.dispatch(clearData());
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async getCategories(): Promise<Array<Category>> {
    try {
      const response = await axios.get(`${this.mdmBaseApiUrl}/workCategories`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
    return [];
  }

  async getTypes(): Promise<Array<Type>> {
    try {
      const response = await axios.get(`${this.mdmBaseApiUrl}/workTypes`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
    return [];
  }

  async getUnits(): Promise<Array<Unit>> {
    try {
      const response = await axios.get(`${this.mdmBaseApiUrl}/fixunits`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
    return [];
  }

  updateFixTemplate(fixTemplateObject: FixTemplateUpdateRequest, id: string): void {
    axios.put(`${this.mdmBaseApiUrl}/fixtemplates/${id}`, fixTemplateObject);
  }

  saveFixTemplate(fixTemplateObject: FixTemplateCreateRequest): void {
    axios.post(`${this.mdmBaseApiUrl}/fixtemplates`, fixTemplateObject).then((response) => {
      this.store.dispatch(updateFixTemplate(response.data));
    }).catch((error) => {
      console.error(error);
    });
  }

  getFixTemplateById(id: string): void {
    axios
      .get(`${this.mdmBaseApiUrl}/fixtemplates/${id}`)
      .then((response) => {
        this.store.dispatch(updateFixTemplate(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
