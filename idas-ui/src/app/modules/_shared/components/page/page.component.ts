import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class PageComponent extends BaseComponent implements OnInit {

  constructor(public matDialog: MatDialog) {
    super(matDialog);
  }

  ngOnInit(): void {
    this.pageIcon = ((this.pageIcon || '').trim() || '' || 'home');
    this.pageTitle = ((this.pageTitle || '').trim() || '' || 'Page').replace(new RegExp('-'), ' ').replace(new RegExp('/'), ' > ');
  }

}
