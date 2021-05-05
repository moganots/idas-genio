import { BaseModel } from '../base/base-model';
import { LookupCategory } from './lookup-category';
export class LookupValue extends BaseModel {
  lookupCategory:LookupCategory;
  value:string;
  value2:string;
  value3:string;
  image:string;
  icon:string;
  constructor(id,	lookupCategory,	value,	value2,	value3,	image,	icon) {
    super(id);
    this.lookupCategory = lookupCategory;
    this.value = value;
    this.value2 = value2;
    this.value3 = value3;
    this.image = image;
    this.icon = icon;
  }
}
