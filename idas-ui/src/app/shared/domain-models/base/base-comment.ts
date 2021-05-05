import { BaseModel } from './base-model';
import { User } from '../user/user';
export class BaseComment extends BaseModel {
  loggedBy:User;
}
