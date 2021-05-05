import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'app/shared/shared.module';
import { DashboardConfiguration } from '../dashboard-configuration';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.entityName = DashboardConfiguration.identifier;
  }

}
