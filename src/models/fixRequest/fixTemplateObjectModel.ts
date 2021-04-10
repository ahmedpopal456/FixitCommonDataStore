export interface FixTemplateObjectModel{
    Status: string,
    Name: string,
    WorkTypeId: string,
    WorkCategoryId: string,
    FixUnitId: string | undefined,
    Description: string,
    CreatedByUserId: string | undefined,
    UpdatedByUserId: string | undefined,
    Tags: string[],
    Sections:{
      Name:string,
      Fields:{
          Name:string,
          Values:string[],
      }[]
  }[]
}
