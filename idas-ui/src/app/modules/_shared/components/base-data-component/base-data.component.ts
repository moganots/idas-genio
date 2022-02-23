import { MatDatetimePickerInputEvent } from '@angular-material-components/datetime-picker';
import { Component, Input } from '@angular/core';
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
  SharedConfiguration,
} from 'app/shared/app-shared.module';
import { map, startWith } from 'rxjs/operators';
import { ReferenceValueService } from '../../services/reference-value-service/reference-value.service';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'app-base-data',
  templateUrl: './base-data.component.html',
  styleUrls: ['./base-data.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
  ],
})
export class BaseDataComponent extends BaseComponent {
  public dataSourceColumnNames: string[];
  public dataSourceDisplayColumns: DataColumn[];
  public groupByColumnNames: string[];
  public formInputDataColumns: DataColumn[];
  public canShowFormInputDataColumns: DataColumn[];

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
    this.setDataSourceColumnNames();
    this.setDataSourceColumnLookupOrReferenceValues();
    this.setGridViewDataSourceColumns();
    this.setGridViewGroupByDataSourceColumnNames();
    this.addGridViewActionButtonsColumn();
  }
  setDataSourceColumnLookupOrReferenceValues() {
    this.dataSourceColumns
      ?.filter((cn) => cn.controlType === `select`)
      .forEach((cn) => {
        switch (cn.selectOptionControlType) {
          case 'lookupIcon':
          case 'lookupImage':
          case 'lookupValue':
            this.lookupValueService
              .getBy<LookupValue>({
                LookupCategoryName: this.columnNameWithoutId(cn),
              })
              .subscribe((values) => {
                values
                  ?.map((value) => this?.mapLookupValue(value))
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
  mapLookupValue(value: LookupValue): any {
    const name = `${value?.Value || value?.Value2 || value?.Value3 || ``}`;
    return {
      id: value?._id,
      title: name,
      displayValue: name,
      tooltip: name,
      cssClassCategory: value?.CssClassCategory,
      cssClass: value?.CssClass,
      icon: value?.Icon,
      image: value?.Image,
    };
  }
  setDataSourceColumnNames() {
    this.dataSourceColumnNames = this.dataSourceColumns
      ?.filter((column) => column.canShow)
      ?.map((column) => column.name);
  }
  setGridViewDataSourceColumns() {
    this.dataSourceDisplayColumns = this.dataSourceColumns?.filter(
      (column) => column.canShow
    );
  }
  setGridViewGroupByDataSourceColumnNames() {
    this.groupByColumnNames = this.dataSourceColumns
      ?.filter((column) => column.canShow && column.canGroup)
      ?.map((column) => column.name);
  }
  addGridViewActionButtonsColumn() {
    if (!this.dataSourceColumnNames?.find((cn) => cn === 'buttons')) {
      this.dataSourceColumnNames?.push('buttons');
    }
  }
  setControlFilterValues(column: DataColumn, control: FormControl) {
    if ([`select`, `timepicker`].includes(column.controlType)) {
      column.filteredLookupValues = control.valueChanges.pipe(
        startWith(``),
        map((value) => this.filterBy(column, value))
      );
    }
  }
  setFormInputDataColumns(useColumns: DataColumn[] = null) {
    this.formInputDataColumns = useColumns || this.dataSourceColumns || [];
    this.canShowFormInputDataColumns = this.getCanShowFormInputDataColumns();
  }
  getCanShowFormInputDataColumns() {
    return (this.formInputDataColumns || []).filter((column) => column.canShow);
  }
  isFieldDisabled(column: DataColumn) {
    switch (this.toLocaleLowerCaseTrim(this.action)) {
      case 'create':
      case 'edit':
        switch (column.name) {
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
          // case 'UserTypeId':
          case 'EmployeeClientSupplierId':
          case 'UserId':
          case 'ProjectId':
          case 'TaskId':
          case 'ParentTaskId':
          case 'ParentProjectId':
            // case 'StatusId':
            return true;
          default:
            return !column.canEdit;
        }
      default:
        return !column.canEdit;
    }
  }
  getFieldConditionalIsRequired(column: DataColumn) {
    if (
      [
        'Description',
        'MiddleName',
        'IsTerminated',
        'VATNumber',
        'AssigneeId',
        'StatusId',
        'IsActive',
      ].includes(column.name)
    ) {
      return null;
    }
    if (
      this.isEdit() &&
      column.name === 'IdNumber' &&
      this.isObjectSet(this.selectedElement?.RegistrationNumber)
    ) {
      return null;
    }
    if (
      this.isEdit() &&
      column.name === 'RegistrationNumber' &&
      this.isObjectSet(this.selectedElement?.IdNumber)
    ) {
      return null;
    }
    return column.canEdit ? Validators.required : null;
  }
  getFieldValue(column: DataColumn, dataObject: any) {
    const columnValue = (dataObject || {})[column.name];
    const lookupValue = column?.lookupValues?.find(
      (lv) => parseFloat(lv.id) === parseFloat(columnValue)
    );
    return lookupValue?.displayValue || columnValue;
  }
  findById(value: any, findValue: any) {
    return parseFloat(value?.id || value?._id) === parseFloat(findValue);
  }
  findByDisplayValue(value: any, findValue: any) {
    return String(value?.displayValue || value?.title).includes(
      this.toLocaleLowerCaseTrim(findValue)
    );
  }
  getTimeValue(name: string) {
    if (!SharedConfiguration.timeColumns.includes(name)) return null;
    const hours = String(this.appendLeadingZero(new Date().getHours()));
    const minutes = String(this.appendLeadingZero(new Date().getMinutes()));
    switch (name) {
      case `StartDateTime`:
        return this.isCreate()
          ? `${hours}:00`
          : this.selectedElement?.StartDate
          ? this.getHourMinuteFromDate(
              new Date(this.selectedElement?.StartDate)
            )
          : `${hours}:00`;
      case `EndDateTime`:
        return this.isCreate()
          ? `${hours}:30`
          : this.selectedElement?.EndDate
          ? this.getHourMinuteFromDate(new Date(this.selectedElement?.EndDate))
          : `${hours}:30`;
      default:
        return `${hours}:${minutes}`;
    }
  }
  filterBy(column: DataColumn, filterValue: any) {
    const values: any[] = column.lookupValues || [];
    filterValue = String(this.getFilterValue(filterValue, column))
      .toLocaleLowerCase()
      .trim();
    return this.filterValuesBy(values, filterValue);
  }
  filterValuesBy(values: any[], filterValue: any) {
    const filteredValues = values?.filter(
      (value) =>
        this.filterById(value, filterValue) ||
        this.filterByDisplayValue(value, filterValue)
    );
    const hasValues = !filteredValues?.every((value) => value === undefined);
    return hasValues
      ? Array.from(new Set(filteredValues?.map((value) => value))).sort(
          (value) => value?.displayValue || value
        )
      : [];
  }
  getFilterValue(filterValue: any, column: DataColumn): any {
    return this.getFormControlFieldValue(column) || filterValue || ``;
  }
  getFormControlFieldValue(column: DataColumn): any {
    return (
      (this.frmGroupFields || this.frmGroup || new FormGroup({})).get(
        column.name
      ) || new FormControl()
    ).value;
  }
  filterById(value: any, filterValue: any): unknown {
    return String(value?.id || value?._id || ``).includes(
      this.toLocaleLowerCaseTrim(filterValue)
    );
  }
  filterByDisplayValue(value: any, filterValue: any): unknown {
    return this.toLocaleLowerCaseTrim(
      String(value?.displayValue || value || ``)
    ).includes(this.toLocaleLowerCaseTrim(filterValue));
  }
  getDisplayWithValue(event: any) {
    return (
      event?.DisplayName ||
      event?.displayValue ||
      event?.title ||
      event?.name ||
      event?.Title ||
      event?.Name ||
      event?._id ||
      event?.id ||
      event?.value ||
      event ||
      null
    );
  }
  onValueChanged(event: any) {
    if (event && event.target && GeneralUtils.isStringSet(event?.target?.id)) {
      this.updates[event?.target?.id] =
        event?.target?.value?.id ||
        event?.target?.value?._id ||
        event?.target?.value;
    }
    return;
  }
  onDivValueChanged(event: any) {
    if (event && event.target && GeneralUtils.isStringSet(event?.target?.id)) {
      this.updates[event?.target?.id] = event?.srcElement?.innerText;
    }
    return;
  }
  onSelectedValueChanged(event: MatOptionSelectionChange) {
    if (
      event &&
      event.source &&
      GeneralUtils.isStringSet(event?.source?.id) &&
      event.source.value &&
      !(
        event?.source?.value === 'No option value(s)' ||
        event?.source?.value?.displayValue === 'No option value(s)'
      )
    ) {
      this.updates[event?.source?.id] =
        event?.source?.value?.id ||
        event?.source?.value?._id ||
        event.source.value;
    }
    return;
  }
  onDateTimePickerChanged(event: MatDatetimePickerInputEvent<Date>) {
    if (
      event &&
      event.targetElement &&
      GeneralUtils.isStringSet(event?.targetElement?.id)
    ) {
      this.updates[event?.targetElement?.id] = new Date(event.target.value);
    }
    return;
  }
  onDatePickerChanged(event: MatDatepickerInputEvent<Date>) {
    if (
      event &&
      event.targetElement &&
      GeneralUtils.isStringSet(event?.targetElement?.id)
    ) {
      this.updates[event?.targetElement?.id] = new Date(event.target.value);
    }
    return;
  }
  onCheckboxClicked(event: MatCheckboxChange) {
    if (event && event.source && GeneralUtils.isStringSet(event?.source?.id)) {
      this.updates[event?.source?.id] = event.checked;
    }
    return;
  }
}
