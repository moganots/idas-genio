import { User } from '../user/user';
export class BaseModel {
  _id:number;
  Code:string;
  Name:string;
  Description:string;
  IsActive:boolean;
  CreatedBy:User;
  DateCreated:Date;
  ModifiedBy:User;
  DateModified:Date;

  constructor(id, code?, name?, description?){
    this._id = id;
    this.Code = code;
    this.Name = name;
    this.Description = description;
  }
}
