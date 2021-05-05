import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { ClientsConfiguration } from './clients-configuration';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  providers: [
    ClientsService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class ClientsComponent extends PageComponent {

  constructor(
    public matDialog: MatDialog,
    public clientsService: ClientsService
    ) {
      super(matDialog);
      this.pageIcon = ClientsConfiguration.pageIcon;
      this.pageTitle = ClientsConfiguration.pageTitle;
      this.pageName = ClientsConfiguration.pageName;
      this.dataService = clientsService;
      this.entityName = ClientsConfiguration.identifier;
      this.sourceDataColumnNames = ClientsConfiguration.fieldNames;
      // this.sourceData = clientsService.getAll<Client>();
  }

}
