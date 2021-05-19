import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService, CommonComponent, DataService } from 'app/shared/shared.module';
import { ModulesSharedConfiguration } from '../../modules-shared-configuration';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  providers: [
    AuthenticationService,
    DataService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class BaseComponent extends CommonComponent {
  @Input() public pageIcon: string;
  @Input() public pageName: string;
  @Input() public pageTitle: string;
  @Input() public entityName: string;
  @Input() public dataService: DataService;
  @Input() public sourceData: any[];
  @Input() public sourceDataColumnNames: any[];
  @Input() public dataFields: any[];
  @Input() public action: string;
  @Input() public selected: any = {};
  @Input() public selectedIndex: number;
  public form = new FormControl();
  public frmGroup: FormGroup;
  public frmGroupFields: FormGroup;
  isLoading = false;
  hasError = false;
  hasWarnings = false;
  hasCrashed = false;

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService
    ) {
    super(location, router, authenticationService);
  }
  formatDisplayColumnName(columnName: string): string {
    columnName = (!ModulesSharedConfiguration.ignoreColumns.includes(columnName) && columnName.toLocaleLowerCase().endsWith('id'))
    ? columnName.substring(0, columnName.length - 2)
    : columnName;
    return this.splitCamelCase(columnName).split(' ').join(' ').trim();
  }
  isUseCheckbox(field: any) {
    return (field.name || field || '').trim().toLocaleLowerCase().startsWith('is');
  }
  isDateField(field: any){
    return (field.name || field || '').trim().toLocaleLowerCase().includes('date');
  }
  isNumberField(field: any){
    switch((field.name || field || '').trim()){
      case 'AccountNumber':
      case 'Amount':
      case 'HoursWorked':
      case 'IdNumber':
      case 'MaximumHoursAllocated':
      case 'MobileTelephoneNumber':
      case 'OfficeTelephoneNumber':
      case 'TelephoneNumber':
      case 'VATNumber':
        return true;
      default: return false;
    }
  }
  isMaskedField(field: any){
    switch((field.name || field || '').trim()){
      case 'Password':
      case 'ConfirmPassword':
        return true;
      default: return false;
    }
  }
  isTextAreaField(field: any){
    switch((field.name || field || '').trim()){
      case 'Description':
        return true;
      default: return false;
    }
  }
  isReferenceValueField(field: any){
    switch((field.name || field || '').trim()){
      case 'ClientId':
      case 'EmployeeId':
      case 'EntityId':
      case 'ManagerId':
      case 'MenuItemId':
      case 'ProjectId':
      case 'SupplierId':
      case 'TaskId':
      case 'UserId':
      case 'UserGroupId':
      case 'EmployeeClientSupplierId':
        return true;
      default: return false;
    }
  }
  isLookupValueField(field: any) {
    switch((field.name || field || '').trim()){
      case 'BudgetCodeId':
      case 'BankId':
      case 'CapacityId':
      case 'DepartmentId':
      case 'EmploymentTypeId':
      case 'GenderId':
      case 'GroupId':
      case 'IndustryTypeId':
      case 'LookupCategoryId':
      case 'ProjectAssignmentTypeId':
      case 'PositionId':
      case 'PreferredLanguageId':
      case 'ProvinceId':
      case 'SalutationId':
      case 'StatusId':
      case 'TransactionTypeId':
      case 'UserLockReasonId':
      case 'UserTypeId':
      case 'WageTypeId':
        return true;
      default: return false;
    }
  }
  trimId(field: any){
    const fieldName = (field.name || field || '').toString();
    return (!['_id', 'userid'].includes(fieldName.toLocaleLowerCase())
    && (fieldName.toLocaleLowerCase().endsWith('id'))) ? fieldName.substring(0, fieldName.length - 2) : fieldName;
  }
  isUseLookupValueIcon(field: any){
    switch((field.name || field || '').trim()){
      case 'GenderId':
      case 'GroupId':
      case 'UserTypeId':
        return true;
      default: return false;
    }
  }
  isUseLookupValueImage(field: any){
    switch((field.name || field || '').trim()){
      case 'BankId':
        return true;
      default: return false;
    }
  }
  isCreate() {
    return ['add', 'create', 'new'].includes((this.action || '').toLocaleLowerCase());
  }
  isEdit() {
    return ['change', 'edit', 'update'].includes((this.action || '').toLocaleLowerCase());
  }
  isDelete() {
    return ['delete', 'remove', 'deactivate'].includes((this.action || '').toLocaleLowerCase());
  }
  openDialog(dialogComponent: any, data?: any
    ,        afterClosed?: () => void, height: string = '93vh'
    ,        width: string = '38vw', top: string = '10vh'): void {
      const left = '25vw';
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.height = height;
    dialogConfig.maxHeight = '95%';
    dialogConfig.width = width;
    dialogConfig.panelClass = 'idas-dialog-container';
    dialogConfig.position = {
      left,
      top
    };

    const matDialogSub = this.matDialog
      .open(dialogComponent, dialogConfig)
      .afterClosed()
      .subscribe({
        next: (result) => { console.log(result); },
        complete: () => { if (afterClosed) { afterClosed(); } },
        error: (error) => { console.error(error); }
      });
  }
}
