import { User } from '../user/user';
export class BaseModel {
  _id: number;
  Code: string;
  Name: string;
  Description: string;
  IsActive: boolean;
  CreatedBy: number;
  DateCreated: Date;
  ModifiedBy: number;
  DateModified: Date;
  createdBy: User;
  modifiedBy: User;
  image: string;
  DisplayName: string;
  RouterLink: string;
  CssClassCategory: string;
  CssClass: string;

  constructor(
    id: number,
    IsActive: boolean,
    Code?: string,
    Name?: string,
    Description?: string,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date
  ) {
    this._id = id;
    this.Code = Code;
    this.Name = Name;
    this.Description = Description;
    this.IsActive = IsActive;
    this.CreatedBy = CreatedBy;
    this.DateCreated = DateCreated;
    this.ModifiedBy = ModifiedBy;
    this.DateModified = DateModified;
  }
}
