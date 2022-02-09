import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService, DataService, InboxMessage } from 'app/shared/app-shared.module';
import { UserInboxConfiguration } from '../user-inbox-configuration';

@Injectable({
  providedIn: 'root'
})
export class InboxService extends DataService {

  constructor(public httpClient: HttpClient, public authenticationService: AuthenticationService) {
    super(httpClient, authenticationService);
    this.entityName = UserInboxConfiguration.identifier;
    this.dataColumns = UserInboxConfiguration.dataColumns;
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
