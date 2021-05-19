import { Location } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthenticationService, LookupService, ReferenceEntityService } from 'app/shared/shared.module';
import { DialogCreateEditDataComponent } from '../../dialogs/dialog-create-edit-data/dialog-create-edit-data.component';
import { BaseDataViewComponent } from '../base-data-view/base-data-view.component';

@Component({
  selector: 'app-data-view-table-simple',
  templateUrl: './data-view-table-simple.component.html',
  styleUrls: ['./data-view-table-simple.component.scss'],
  providers: [
    AuthenticationService,
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class DataViewTableSimpleComponent extends BaseDataViewComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() assignments: EventEmitter<any> = new EventEmitter();
  @Output() unlock: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService) {
    super(location, router, matDialog, authenticationService, lookupService, referenceEntityService);
    this.isLoading = true;
    this.onInitDataSource();
  }

  ngOnInit() {
    this.setDataSourceDisplayColumnNames();
    this.onDataRefresh();
  }
  onInitDataSource() {
    this.dataSource = new MatTableDataSource<any[]>();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getTitleDataRefreshButton() {
    return `${['Refresh', this.capitalizeFirstLetter(this.entityName || ''), 'View'].join(' ').trim()}`;
  }
  getTitleAddButton() {
    return `${['Add', 'New', this.capitalizeFirstLetter(this.entityName || '')].join(' ').trim()}`;
  }
  onClickCreate(): void {
    super.onClickCreate();
    this.create.emit();
    this.onOpenCreateEditDialog();
  }
  onClickEdit(element: any, index?: number): void {
    super.onClickEdit(element, index);
    this.edit.emit(element);
    this.onOpenCreateEditDialog(element, index);
  }
  getTitleEditButton(element: any, index?: number) {
    return `${['Edit', this.capitalizeFirstLetter(this.entityName || '')/*, `(${index})`*/].join(' ').trim()}`;
  }
  hideEditButton(){
    // ToDo: Check current user's permissions
    return false;
  }
  onClickDelete(element: any, index?: number): void {
    super.onClickDelete(element, index);
    this.delete.emit(element);
  }
  getTitleDeleteButton(element: any, index?: number) {
    return `${['Delete', this.capitalizeFirstLetter(this.entityName || '')/*, `(${index})`*/].join(' ').trim()}`;
  }
  hideDeleteButton(){
    // ToDo: Check current user's permissions
    return true;
  }
  onClickAssignments(element: any, index?: number): void {
    this.assignments.emit({index, element});
    super.openDialog(
      DialogCreateEditDataComponent, {
        action : this.action,
        dataService : this.dataService,
        entityName : this.entityName,
        pageIcon : this.pageIcon,
        pageName : this.pageName,
        pageTitle : this.pageTitle,
        dataFields : this.sourceDataColumnNames,
        selected : element || this.selected,
        selectedIndex : index || this.selectedIndex
      }, () => { this.onDataRefresh(); });
  }
  getTitleAssignmentsButton(element: any, index?: number) {
    return `${[this.capitalizeFirstLetter(this.entityName || ''), 'Assignment(s)'].join(' ').trim()}`;
  }
  hideAssignmentsButton(){
    // ToDo: Check current user's permissions
    return !['employee', 'project', 'supplier'].includes((this.entityName || '').toLocaleLowerCase().trim());
  }
  onClickUnLockUser(element: any, index?: number): void {
    this.unlock.emit({index, element});
  }
  getTitleUnLockUserButton(element: any, index?: number) {
    return `${[(element[`IsLocked`]) ? `Unlock` : 'Lock', 'User Account'].join( ' ').trim()}`;
  }
  hideUnLockUserButton(){
    // ToDo: Check current user's permissions
    return !['user'].includes((this.entityName || '').toLocaleLowerCase().trim());
  }
  getUserUnLockIcon(element: any, index?: number) {
    return (element[`IsLocked`]) ? `lock_open` : `lock`;
  }
  onCheckboxClicked(element: any) {
/*     this.dataService
      .update(element, 'update')
      .subscribe(() => {
        this.alertifyService.success('Update completed successfully');
      }, () => {
        this.alertifyService.success('Update failed due to errors');
      }); */
  }
  onOpenCreateEditDialog(element?: any, index?: number) {
    super.openDialog(
      DialogCreateEditDataComponent, {
        action : this.action,
        dataService : this.dataService,
        entityName : this.entityName,
        pageIcon : this.pageIcon,
        pageName : this.pageName,
        pageTitle : this.pageTitle,
        dataFields : this.sourceDataColumnNames,
        selected : element || this.selected,
        selectedIndex : index || this.selectedIndex
      }, () => { this.onDataRefresh(); });
  }

  ngOnDestroy(): void {}

}
