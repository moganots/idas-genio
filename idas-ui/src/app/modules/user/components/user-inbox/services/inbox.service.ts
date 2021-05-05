import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, InboxMessage } from 'app/shared/shared.module';
import { UserInboxConfiguration } from '../user-inbox-configuration';

@Injectable({
  providedIn: 'root'
})
export class InboxService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = UserInboxConfiguration.identifier;
  }

  create(entity: any): any {
    return super.create<InboxMessage>(entity);
  }

  update(entity: any): any {
    return super.update<InboxMessage>(entity);
  }

  delete(entity: any): any {
    return super.delete<InboxMessage>(entity);
  }

}
