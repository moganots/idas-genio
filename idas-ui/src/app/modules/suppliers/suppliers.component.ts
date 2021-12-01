import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { SuppliersConfiguration } from './suppliers-configuration';
import { SuppliersService } from './services/suppliers.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    SuppliersService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class SuppliersComponent extends PageComponent implements OnInit {
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public suppliersService: SuppliersService
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.pageIcon = SuppliersConfiguration.pageIcon;
    this.pageTitle = SuppliersConfiguration.pageTitle;
    this.pageName = SuppliersConfiguration.pageName;
    this.dataService = suppliersService;
    this.entityName = SuppliersConfiguration.identifier;
    this.sourceDataColumns = SuppliersConfiguration.dataColumns;
  }
}
