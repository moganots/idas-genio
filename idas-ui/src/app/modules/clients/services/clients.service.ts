import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, DataService } from 'app/shared/shared.module';
import { ClientsConfiguration } from '../clients-configuration';

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = ClientsConfiguration.identifier;
  }

  create(entity: any): any {
    return super.create<Client>(entity);
  }

  update(entity: any): any {
    return super.update<Client>(entity);
  }

  delete(entity: any): any {
    return super.delete<Client>(entity);
  }

}
