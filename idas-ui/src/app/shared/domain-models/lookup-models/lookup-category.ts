import { BaseModel } from '../base/base-model';
export class LookupCategory extends BaseModel {
  constructor(id: number, isActive: boolean, name: string, code?: string, description?: string){
    super(id, isActive, code, name, description);
  }
}
