import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService, NotificationMessage } from 'app/shared/shared.module';
import { UserNotificationsConfiguration } from '../user-notifications-configuration';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = UserNotificationsConfiguration.identifier;
  }

  create(entity: any): any {
    return super.create<NotificationMessage>(entity);
  }

  update(entity: any): any {
    return super.update<NotificationMessage>(entity);
  }

  delete(entity: any): any {
    return super.delete<NotificationMessage>(entity);
  }

}
