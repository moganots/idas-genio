import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { BaseModel } from '../base/base-model';
import { LookupCategory } from './lookup-category';
export class LookupValue extends BaseModel {
  LookupCategoryId: number;
  Value: string;
  Value2: string;
  Value3: string;
  Image: string;
  Icon: string;
  LookupCategory: LookupCategory;
  CssColorCategory: any;
  CssClassCategory: string;
  CssColorValue: any;
  CssClass: string;
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
      null,
      Value,
      null,
      CreatedBy,
      DateCreated,
      ModifiedBy,
      DateModified);
    this.LookupCategoryId = LookupCategoryId;
    this.Value = Value;
    this.Value2 = Value2;
    this.Value3 = Value3;
    this.Image = Image;
    this.Icon = Icon;
  }
}
