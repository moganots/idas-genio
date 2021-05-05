import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, Supplier } from 'app/shared/shared.module';
import { SuppliersConfiguration } from '../suppliers-configuration';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = SuppliersConfiguration.identifier;
  }

  create(entity: any): any {
    return super.create<Supplier>(entity);
  }

  update(entity: any): any {
    return super.update<Supplier>(entity);
  }

  delete(entity: any): any {
    return super.delete<Supplier>(entity);
  }

}
