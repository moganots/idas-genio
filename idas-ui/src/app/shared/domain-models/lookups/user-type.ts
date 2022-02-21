import { User } from '../user/user';
import { LookupValue } from './lookup-value';
export class UserType extends LookupValue {
  Users: User[] = [];
  constructor(
    id: number,
    IsActive: boolean,
    LookupCategoryId: number,
    Value: string,
    Value2: string,
    Value3: string,
    Image: string,
    Icon: string,
    CreatedBy?: number,
    DateCreated?: Date,
    ModifiedBy?: number,
    DateModified?: Date
    ) {
    super(
      id,
      IsActive,
      LookupCategoryId,
      Value,
      Value2,
      Value3,
      Image,
      Icon,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified);
  }
}
