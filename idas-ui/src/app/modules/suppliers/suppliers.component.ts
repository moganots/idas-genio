import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { SuppliersConfiguration } from './suppliers-configuration';
import { SuppliersService } from './services/suppliers.service';
import { AuthenticationService } from 'app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  providers: [
    AuthenticationService,
    SuppliersService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class SuppliersComponent extends PageComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public suppliersService: SuppliersService
    ) {
      super(location, router, matDialog, authenticationService);
      this.pageIcon = SuppliersConfiguration.pageIcon;
      this.pageTitle = SuppliersConfiguration.pageTitle;
      this.pageName = SuppliersConfiguration.pageName;
      this.dataService = suppliersService;
      this.entityName = SuppliersConfiguration.identifier;
      this.sourceDataColumnNames = SuppliersConfiguration.fieldNames;
      // this.sourceData = suppliersService.getAll<Supplier>();
  }

}
