import axios from 'axios';
import {
  setFixDescription,
  setFixRequestTags,
  setFixSectionDetails,
  setFixSectionTitle,
  setFixTemplateCategory,
  setFixTemplateId,
  setFixTemplateName,
  setFixTemplateType,
  setFixUnit,
} from '../store/fixRequest/fixRequestActions';
import { FixRequestObjModel } from '../models/fixRequest/fixRequestObjModel';
import { FixTemplateObjectModel } from '../models/fixRequest/fixTemplateObjectModel';

export default class FixRequestService {
  fixRequestBaseUrl: string;

  mdmBaseApiUrl: string;

  store: any;

  constructor(store: any) {
    this.fixRequestBaseUrl = 'https://fixit-dev-fms-api.azurewebsites.net/api/fixes';
    this.mdmBaseApiUrl = 'https://fixit-dev-mdm-api.azurewebsites.net/api/';
    this.store = store;
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
        console.error(error);
      });
  }

  async getCategories() : Promise<{
    id: string,
    name: string,
    skills: {
      id:string,
      name:string
    }[]
  }[] | void> {
    return axios.get(`${this.mdmBaseApiUrl}/workCategories`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
  }

  async getTypes() : Promise<{id:string, name:string}[] | void> {
    return axios.get(`${this.mdmBaseApiUrl}/workTypes`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
  }

  async getUnits() : Promise<{id:string, name:string}[] | void> {
    return axios.get(`${this.mdmBaseApiUrl}/fixunits`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
  }

  updateFixTemplate(fixTemplateObject: FixTemplateObjectModel, id : string) : void {
    axios.put(`${this.mdmBaseApiUrl}/fixtemplates/${id}`, fixTemplateObject);
  }

  saveFixTemplate(fixTemplateObject: FixTemplateObjectModel) : void {
    axios.post(`${this.mdmBaseApiUrl}/fixtemplates`, fixTemplateObject);
  }

  setFixTemplateId(id:string):void {
    axios.get(`${this.mdmBaseApiUrl}/fixtemplates/${id}`)
      .then((response) => {
        const tags: { Name: string; }[] = [];
        response.data.tags.forEach((tag:string) => {
          tags.push({ Name: tag });
        });

        this.store.dispatch(setFixTemplateId(response.data.id));
        this.store.dispatch(setFixUnit(response.data.fixUnit.name));
        this.store.dispatch(setFixRequestTags(tags));
        this.store.dispatch(setFixTemplateName(response.data.name));
        this.store.dispatch(setFixTemplateCategory(response.data.workCategory.name));
        this.store.dispatch(setFixTemplateType(response.data.workType.name));
        this.store.dispatch(setFixDescription(response.data.description));

        response.data.sections.forEach((section:{
          name:string,
          fields:{
            name: string,
            values: string[]
          }[]
        }, index:number) => {
          this.store.dispatch(setFixSectionTitle(section.name, index));
          const details: { Name: string; Value: string; }[] = [];
          section.fields.forEach((field: {name: string, values: string[]}) => {
            details.push({
              Name: field.name,
              Value: field.values.join(),
            });
          });
          this.store.dispatch(setFixSectionDetails(details, index));
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
