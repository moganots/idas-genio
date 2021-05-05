import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, User } from 'app/shared/shared.module';
import { UsersConfiguration } from '../users-configuration';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = UsersConfiguration.identifier;
  }

  create(entity: any): any {
    return super.create<User>(entity);
  }

  update(entity: any): any {
    return super.update<User>(entity);
  }

  delete(entity: any): any {
    return super.delete<User>(entity);
  }

}
