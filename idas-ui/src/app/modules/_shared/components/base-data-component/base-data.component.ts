import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  AlertifyService,
  AuthenticationService,
  DataColumn,
  DateUtils,
  GeneralUtils,
  LookupValue,
  LookupValueService,
} from 'app/shared/shared.module';
import { map, startWith } from 'rxjs/operators';
import { ReferenceValueService } from '../../services/reference-value-service/reference-value.service';
import { SharedModulesModuleConfiguration } from '../../shared-modules-configuration';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'app-base-data',
  templateUrl: './base-data.component.html',
  styleUrls: ['./base-data.component.css'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
  ],
})
export class BaseDataComponent extends BaseComponent {
  public dataSourceColumns: DataColumn[];
  public dataSourceColumnNames: string[];
  public dataSourceDisplayColumns: DataColumn[];
  public groupByColumnNames: string[];
  public formInputDataColumns: DataColumn[];

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
  }
  setDataSourceColumns(): void {
    this.getDataSourceColumns();
    this.setDataSourceColumnCanEditOrIsRequiredFlags();
    this.setDataSourceColumnControlTypes();
    this.setDataSourceColumnLookupOrReferenceValues();
    this.setDataSourceColumnNames();
    this.setGridViewDataSourceColumns();
    this.setGridViewGroupByDataSourceColumnNames();
    this.addGridViewActionButtonsColumn();
  }
  getDataSourceColumns() {
    this.dataSourceColumns = this.sourceDataColumns.map((sdc) => { return new DataColumn(sdc); });
  }
  setDataSourceColumnCanEditOrIsRequiredFlags() {
    this.dataSourceColumns.forEach((cn) => {
      cn.isRequired = !(
        SharedModulesModuleConfiguration.cannotEditColumns.includes(cn.name) ||
        SharedModulesModuleConfiguration.optionalColumns.includes(cn.name)
      );
      // Set canEdit flag
      // ToDo: Check current user's access permissions
      cn.canEdit = !SharedModulesModuleConfiguration.cannotEditColumns.includes(
        cn.name
      );
    });
  }
  setDataSourceColumnControlTypes() {
    this.dataSourceColumns.forEach((cn) => {
      if (this.isUseCheckbox(cn)) {
        cn.controlType = 'checkbox';
      } else if (this.isDateField(cn)) {
        cn.controlType = 'datetimepicker';
      } else if (this.isNumberField(cn)) {
        cn.controlType = 'number';
      } else if (this.isTextAreaField(cn)) {
        cn.controlType = 'textarea';
      } else if (this.isMaskedField(cn)) {
        cn.controlType = 'password';
      } else if (this.isUseBreakOrNewlineOrSection(cn)) {
        cn.controlType = 'break';
      } else if (this.isLookupOrReferenceValueField(cn)) {
        cn.controlType = 'select';
        this.setSelectOptionControlType(cn);
      } else if (this.isTimeField(cn)) {
        cn.controlType = 'timepicker';
      } else if (this.isUseImage(cn)) {
        cn.controlType = 'image';
      } else {
        cn.controlType = 'textbox';
      }
    });
  }
  setDataSourceColumnLookupOrReferenceValues() {
    this.dataSourceColumns
      .filter((cn) => cn.controlType === `select`)
      .forEach((cn) => {
        cn.lookupValues = [];
        switch (cn.selectOptionControlType) {
          case 'lookupIcon':
          case 'lookupImage':
          case 'lookupValue':
            this.lookupValueService
              .getBy<LookupValue>({
                LookupCategoryName: this.columnNameWithoutId(cn),
              })
              .subscribe(values => {
                values
                  .map((value) => this.mapLookupValue(value))
                  .forEach((value) => {
                    cn.lookupValues.push(value);
                  });
              });
            break;
          case 'referenceValue':
            this.referenceValueService.setFieldLookupValues(
              this.columnNameWithoutId(cn),
              cn
            );
            break;
        }
      });
  }
  mapLookupValue(value: LookupValue) {
    const name = `${value.Value || value.Value2 || value.Value3 || ''}`;
    return {
      id: value._id,
      displayValue: name,
      title: name,
      cssClassCategory: value.CssClassCategory,
      cssClass: value.CssClass,
      icon: value.Icon,
      image: value.Image
    };
  }
  setDataSourceColumnNames() {
    this.dataSourceColumnNames = this.dataSourceColumns
      .filter((column) => column.canShow)
      .map((column) => column.name);
  }
  setGridViewDataSourceColumns() {
    this.dataSourceDisplayColumns = this.dataSourceColumns.filter(
      (column) => column.canShow
    );
  }
  setGridViewGroupByDataSourceColumnNames() {
    this.groupByColumnNames = this.dataSourceColumns
      .filter((column) => column.canShow && column.canGroup)
      .map((column) => column.name);
  }
  addGridViewActionButtonsColumn() {
    if (!this.dataSourceColumnNames.find((cn) => cn === 'buttons')) {
      this.dataSourceColumnNames.push('buttons');
    }
  }
  setControlFilterValues(column: DataColumn, control: FormControl) {
    if (
      column.controlType === `select`
    ) {
      column.filteredLookupValues = control.valueChanges.pipe(
        startWith(''),
        map((value) => this.filterBy(column, value))
      );
    }
  }
  setFormInputDataColumns(useColumns: DataColumn[]) {
    this.formInputDataColumns = (useColumns || this.dataSourceColumns || []).filter(
      (column) => column.canShow
    );
  }
  isFieldDisabled(column: DataColumn) {
    switch (this.toLocaleLowerCaseTrim(this.action)) {
      case 'create':
      case 'edit':
        switch(column.name) {
          case '_id':
          case 'BirthDate':
          case 'Code':
          case 'DateHired':
          case 'DateTerminated':
          case 'DateLastLoggedIn':
          case 'DateLastLoggedOut':
          case 'DateAccounLocked':
          case 'DateAccounUnlocked':
          case 'DateCreated':
          case 'DateModified':
          case 'GenderId':
          case 'UserTypeId':
          case 'EmployeeClientSupplierId':
          case 'UserId':
          case 'ProjectId':
          case 'TaskId':
          case 'ParentTaskId':
            return true;
          default: return !column.canEdit;
        }
      default:
        return !column.canEdit;
    }
  }
  getFieldConditionalIsRequired(column: DataColumn) {
    if (
      ['Description', 'MiddleName', 'IsTerminated', 'VATNumber', 'AssigneeId', 'StatusId', 'IsActive'].includes(
        column.name
      )
    ) {
      return null;
    }
    if (
      this.isEdit() &&
      column.name === 'IdNumber' &&
      this.isObjectSet(this.selected.RegistrationNumber)
    ) {
      return null;
    }
    if (
      this.isEdit() &&
      column.name === 'RegistrationNumber' &&
      this.isObjectSet(this.selected.IdNumber)
    ) {
      return null;
    }
    return column.canEdit ? Validators.required : null;
  }
  getFieldValue(column: DataColumn, dataObject: any) {
    const columnValue = dataObject[column.name];
    const lookupValue = ((column.lookupValues || []).find((lv) => lv.id === columnValue) || {displayValue: undefined});
    return lookupValue.displayValue || columnValue;
  }
  filterBy(column: DataColumn, filterValue: any) {
    const values: any[] = column.lookupValues || [];
    filterValue = String(this.getFilterValue(filterValue, column))
      .toLocaleLowerCase()
      .trim();
    // tslint:disable-next-line:max-line-length
    const filteredValues = values.filter(
      (value) =>
        this.filterById(value, filterValue) ||
        this.filterByDisplayValue(value, filterValue)
    );
    const hasValues = !filteredValues.every((value) => value === undefined);
    return hasValues
      ? Array.from(new Set(filteredValues.map((value) => value))).sort(
          (value) => value.displayValue
        )
      : [];
  }
  getFilterValue(filterValue: any, column: DataColumn): any {
    return this.getFormControlFieldValue(column) || filterValue || '';
  }
  getFormControlFieldValue(column: DataColumn): any {
    return (
      (this.frmGroupFields || this.frmGroup || new FormGroup({})).get(
        column.name
      ) || new FormControl()
    ).value;
  }
  filterById(value: any, filterValue: any): unknown {
    return String(value.id || value._id || '').includes(
      this.toLocaleLowerCaseTrim(filterValue)
    );
  }
  filterByDisplayValue(value: any, filterValue: any): unknown {
    return this.toLocaleLowerCaseTrim(
      String(value.displayValue || value || '')
    ).includes(this.toLocaleLowerCaseTrim(filterValue));
  }
  getDisplayWithValue(event: any) {
    if(event){
      return event.displayValue || event;
    }
    return null;
  }
  onValueChanged(event: any) {
    if (event && event.target) {
      this.updates[event.target.id] = event.target.value;
    }
    return;
  }
  onSelectedValueChanged(event: MatOptionSelectionChange) {
    if (
      event &&
      event.source &&
      event.source.value &&
      !(
        event.source.value === 'No option value(s)' ||
        event.source.value.displayValue === 'No option value(s)'
      )
    ) {
      this.updates[event.source.id] =
        event.source.value.id || event.source.value;
    }
    return;
  }
  onDateChanged(event: MatDatepickerInputEvent<Date>) {
    if (event && event.targetElement) {
      this.updates[event.targetElement.id] =
        DateUtils.formatDateYYMMDDWithDashSeparator(event.value);
    }
    return;
  }
  onCheckboxClicked(event: MatCheckboxChange) {
    if (event && event.source) {
      this.updates[event.source.id] = event.checked;
    }
    return;
  }
}
