import { BaseModel } from '../base/base-model';
export class LookupCategory extends BaseModel {
  constructor(id, code, name, description){
    super(id, code, name, description);
  }
}
