import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/shared/shared.module';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [
    AuthenticationService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class PageComponent extends BaseComponent implements OnInit {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService
    ) {
    super(location, router, matDialog, authenticationService);
  }

  ngOnInit(): void {
    this.pageIcon = ((this.pageIcon || '').trim() || '' || 'home');
    this.pageTitle = ((this.pageTitle || '').trim() || '' || 'Page').replace(new RegExp('-'), ' ').replace(new RegExp('/'), ' > ');
  }

}
