import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LookupService, ReferenceEntityService, AuthenticationService } from 'app/shared/shared.module';
import { BaseDataComponent } from '../../base-data-component/base-data.component';

@Component({
  selector: 'app-base-data-view',
  templateUrl: './base-data-view.component.html',
  styleUrls: ['./base-data-view.component.scss'],
  providers: [
    AuthenticationService,
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class BaseDataViewComponent extends BaseDataComponent {
  public dataSource: MatTableDataSource<any[]>;

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService) {
    super(location, router, matDialog, authenticationService, lookupService, referenceEntityService);
  }
  hasData(): boolean {
    return (this.dataSource && this.dataSource.data !== null);
  }
  onDataRefresh(): void {
    this.isLoading = true;
    this.dataSource.data = this.dataService.getAll() || this.sourceData || [];
    this.isLoading = false;
  }
  onApplyFilter(filterValue) {
    if (this.hasData()) {
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  }
  onClickCreate(): void {
    this.action = 'create';
  }
  onClickEdit(element: any, index?: number): void {
    this.action = 'edit';
    this.selected = element;
    this.selectedIndex = index || this.getElementIndex(element);
  }
  onClickDelete(element: any, index?: number): void {
    this.action = 'delete';
    this.selected = element;
    this.selectedIndex = index || this.getElementIndex(element);
  }
  getElementIndex(element: any): number {
    return ((this.dataSource || {data: []}).data || []).indexOf(element);
  }

}
