import axios from 'axios';
import {
  FixRequestModel,
  FixTemplateObjectModel,
  TagModel,
  setFixTemplateId,
  setFixUnit,
  setFixRequestTags,
  setFixTemplateName,
  setFixTemplateCategory,
  setFixTemplateType,
  setFixDescription,
  setFixSectionTitle,
  setFixSectionDetails,
} from '../slices/fixRequestSlice';

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
  publishFixRequest(fixRequestObj: FixRequestModel): void {
    const { fixRequestBaseUrl } = this;
    axios
      .post(fixRequestBaseUrl, fixRequestObj)
      // TODO send data to handle exceptions in UI
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async getCategories(): Promise<
    | {
        id: string;
        name: string;
        skills: {
          id: string;
          name: string;
        }[];
      }[]
    | void
    > {
    return axios
      .get(`${this.mdmBaseApiUrl}/workCategories`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
  }

  async getTypes(): Promise<{ id: string; name: string }[] | void> {
    return axios
      .get(`${this.mdmBaseApiUrl}/workTypes`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
  }

  async getUnits(): Promise<{ id: string; name: string }[] | void> {
    return axios
      .get(`${this.mdmBaseApiUrl}/fixunits`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
  }

  updateFixTemplate(fixTemplateObject: FixTemplateObjectModel, id: string): void {
    axios.put(`${this.mdmBaseApiUrl}/fixtemplates/${id}`, fixTemplateObject);
  }

  saveFixTemplate(fixTemplateObject: FixTemplateObjectModel): void {
    axios.post(`${this.mdmBaseApiUrl}/fixtemplates`, fixTemplateObject);
  }

  getFixTemplateById(id: string): void {
    axios
      .get(`${this.mdmBaseApiUrl}/fixtemplates/${id}`)
      .then((response) => {
        const tags: Array<TagModel> = [];
        response.data.tags.forEach((tag: string) => {
          tags.push({ name: tag });
        });

        this.store.dispatch(setFixTemplateId({ fixTemplateId: response.data.id }));
        this.store.dispatch(setFixUnit({ unit: response.data.fixUnit.name }));
        this.store.dispatch(setFixRequestTags(tags));
        this.store.dispatch(setFixTemplateName({ name: response.data.name }));
        this.store.dispatch(setFixTemplateCategory({ category: response.data.workCategory.name }));
        this.store.dispatch(setFixTemplateType({ type: response.data.workType.name }));
        this.store.dispatch(setFixDescription({ description: response.data.description }));

        response.data.sections.forEach(
          (
            section: {
              name: string;
              fields: {
                name: string;
                values: string[];
              }[];
            },
            index: number,
          ) => {
            this.store.dispatch(setFixSectionTitle({ index, sectionName: section.name }));
            const details: { name: string; value: string }[] = [];
            section.fields.forEach((field: { name: string; values: string[] }) => {
              details.push({
                name: field.name,
                value: field.values.join(),
              });
            });
            this.store.dispatch(setFixSectionDetails({ index, details }));
          },
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
