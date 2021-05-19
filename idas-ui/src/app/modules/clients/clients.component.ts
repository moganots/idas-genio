import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { AuthenticationService } from 'app/shared/shared.module';
import { ClientsConfiguration } from './clients-configuration';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [
    AuthenticationService,
    ClientsService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class ClientsComponent extends PageComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public clientsService: ClientsService
    ) {
      super(location, router, matDialog, authenticationService);
      this.pageIcon = ClientsConfiguration.pageIcon;
      this.pageTitle = ClientsConfiguration.pageTitle;
      this.pageName = ClientsConfiguration.pageName;
      this.dataService = clientsService;
      this.entityName = ClientsConfiguration.identifier;
      this.sourceDataColumnNames = ClientsConfiguration.fieldNames;
      // this.sourceData = clientsService.getAll<Client>();
  }

}
