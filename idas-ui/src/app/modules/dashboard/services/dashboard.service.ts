import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService, DataService } from 'app/shared/shared.module';
import { DashboardConfiguration } from '../dashboard-configuration';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends DataService {

  constructor(public httpClient: HttpClient, public authenticationService: AuthenticationService) {
    super(httpClient, authenticationService);
    this.entityName = DashboardConfiguration.identifier;
  }

}
