import { BaseModel } from '../base/base-model';
export class LookupCategory extends BaseModel {
  constructor(
    id: number,
    IsActive: boolean,
    Name: string,
    Code?: string,
    Description?: string,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date
  ) {
    super(
      id,
      IsActive,
      Code,
      Name,
      Description,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified
    );
  }
}
