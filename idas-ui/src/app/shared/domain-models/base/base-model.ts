import { User } from '../user/user';
export class BaseModel {
  _id:number;
  code:string;
  name:string;
  description:string;
  isActive:boolean;
  createdBy:User;
  dateCreated:Date;
  ModifiedBy:User;
  dateModified:Date;

  constructor(id, code?, name?, description?){
    this._id = id;
    this.code = code;
    this.name = name;
    this.description = description;
  }
}
