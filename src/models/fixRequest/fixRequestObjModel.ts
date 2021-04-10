export interface FixRequestObjModel{
  Tags:{
      Id?: string,
      Name: string,
  }[],
  Details: {
      Name:string,
      Description:string,
      Category:string,
      Type:string,
      Unit?: string,
      Sections:{
          Name:string,
          Details:{
              Name:string,
              Value:string,
          }[]
      }[]
  }[],
  Images?:{
      Name:string,
      Url:string,
      metadata:{
        createdTimeStampUTC:number,
        updatedTimeStampUTC:number,
      }
  }[],
  Location:{
      Address:string,
      City:string,
      Province:string,
      PostalCode:string,
  },
  Schedule:{
    StartTimestampUtc:number,
    EndTimestampUtc:number,
  }[],
  ClientEstimatedCost:{
      MaximumCost:number,
      MinimumCost:number,
  },
  CreatedByClient:{
    Id?:string,
    FirstName:string,
    LastName:string,
  },
  UpdatedByUser:{
    Id?:string,
    FirstName:string,
    LastName:string,
  },
  Status: number,
}
