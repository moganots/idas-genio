import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PageComponent } from 'app/modules/_shared/modules-shared.module';
import { SuppliersConfiguration } from './suppliers-configuration';
import { SuppliersService } from './services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  providers: [
    SuppliersService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class SuppliersComponent extends PageComponent {

  constructor(
    public matDialog: MatDialog,
    public suppliersService: SuppliersService
    ) {
      super(matDialog);
      this.pageIcon = SuppliersConfiguration.pageIcon;
      this.pageTitle = SuppliersConfiguration.pageTitle;
      this.pageName = SuppliersConfiguration.pageName;
      this.dataService = suppliersService;
      this.entityName = SuppliersConfiguration.identifier;
      this.sourceDataColumnNames = SuppliersConfiguration.fieldNames;
      // this.sourceData = suppliersService.getAll<Supplier>();
  }

}
