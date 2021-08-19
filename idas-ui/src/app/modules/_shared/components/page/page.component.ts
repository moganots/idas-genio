import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertifyService, AuthenticationService, LookupValueService } from 'app/shared/shared.module';
import { ReferenceValueService } from '../../services/reference-value-service/reference-value.service';
import { BaseDataViewComponent } from '../data-view/base-data-view/base-data-view.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class PageComponent extends BaseDataViewComponent implements OnInit {

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
    ) {
      super(router, matDialog, alertifyService, authenticationService, lookupValueService, referenceValueService);
  }

  ngOnInit(): void {
    this.pageIcon = ((this.pageIcon || ``).trim() || `` || 'home');
    this.pageTitle = ((this.pageTitle || ``).trim() || `` || 'Page').replace(new RegExp('-'), ' ').replace(new RegExp('/'), ' > ');
  }

}
