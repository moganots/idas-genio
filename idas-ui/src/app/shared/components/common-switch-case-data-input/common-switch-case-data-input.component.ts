import * as moment from 'moment';
import { MatDatetimePickerInputEvent } from '@angular-material-components/datetime-picker';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatOptionSelectionChange } from '@angular/material/core';
import { SharedConfiguration } from 'app/shared/configuration/shared-configuration';
import { DataColumn } from 'app/shared/domain-models/data-column';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { map, startWith } from 'rxjs/operators';
import { DateUtils } from 'app/shared/utilities/date-utils';
@Component({
  selector: 'app-common-switch-case-data-input',
  templateUrl: './common-switch-case-data-input.component.html',
  styleUrls: ['./common-switch-case-data-input.component.scss'],
})
export class CommonSwitchCaseDataInputComponent implements OnInit {
  @Input() action: string;
  @Input() entityName: string;
  @Input() entityId: any;
  @Input() entity: any = {};
  @Input() columns: DataColumn[] = [];
  @Input() columnsCssClass: string;
  @Input() updates: { [key: string]: any } = {};
  useColumns: DataColumn[] = [];
  public formGroup: FormGroup;
  public formGroupFields: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.useColumns = this.columns?.filter(
      (column) => column?.canShow /*&& !this.isFieldDisabled(column)*/
    );
    this.formGroupFields = new FormGroup({});
    this.useColumns?.forEach((column) => {
      column.value = this.getFieldValue(column, this.entity);
      const control = new FormControl(
        {
          value: '', // column.value,
          disabled: this.isFieldDisabled(column)
        },
        this.getFieldConditionalIsRequired(column)
      );
      this.setControlFilterValues(column, control);
      this.formGroupFields.addControl(column.name, control);
    });
    this.formGroup = this.formBuilder.group({
      formFields: this.formGroupFields,
    });
  }
  getFieldValue(column: DataColumn, dataObject: any) {
    const columnValue = this.asDate(column, (dataObject || {})[column.name]);
    const lookupValue = column?.lookupValues?.find(
      (lv) => lv.id === columnValue
    );
    return lookupValue?.displayValue || columnValue;
  }
  asDate(column: DataColumn, value: any) {
    const today = new Date();
    if (
      SharedConfiguration.dateColumns.includes(column.name) &&
      !GeneralUtils.isObjectSet(value)
    ) {
      return moment(today, DateUtils.DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS);
    } else if (
      SharedConfiguration.dateColumns.includes(column.name) &&
      GeneralUtils.isObjectSet(value)
    ) {
      return new Date(value);
    }
    return value;
  }
  isFieldDisabled(column: DataColumn) {
    switch (GeneralUtils.toLocalLowerCaseWithTrim(this.action)) {
      case `create`:
      case `edit`:
        switch (column.name) {
          case `_id`:
          case `BirthDate`:
          case `Code`:
          case `DateAccounLocked`:
          case `DateAccounUnlocked`:
          case `DateCreated`:
          case `DateHired`:
          case `DateLastLoggedIn`:
          case `DateLastLoggedOut`:
          case `DateModified`:
          case `DateTerminated`:
          case `EmployeeClientSupplierId`:
          case `GenderId`:
          case `IsActive`:
          case `IsAdmin`:
          case `IsLocked`:
          case `IsTerminated`:
          case `ParentProjectId`:
          case `ParentTaskId`:
          case `ProjectId`:
          case `StatusId`:
          case `TaskId`:
          case `UserId`:
          case `UserTypeId`:
            return true;
          default:
            return !column.canEdit;
        }
      default:
        return !column.canEdit;
    }
  }
  getFieldConditionalIsHidden(column: DataColumn) {
    return [`IsActive`, `CreatedBy`, `DateCreated`, `ModifiedBy`, `DateModified`].includes(column?.name);
  }
  getFieldConditionalIsRequired(column: DataColumn) {
    if (
      [
        `Description`,
        `MiddleName`,
        `IsTerminated`,
        `VATNumber`,
        `AssigneeId`,
        `StatusId`,
        `IsActive`,
      ].includes(column.name)
    ) {
      return null;
    }
    if (
      this.isEdit() &&
      column.name === `IdNumber` &&
      GeneralUtils.isObjectSet(this.entity?.RegistrationNumber)
    ) {
      return null;
    }
    if (
      this.isEdit() &&
      column.name === `RegistrationNumber` &&
      GeneralUtils.isObjectSet(this.entity?.IdNumber)
    ) {
      return null;
    }
    return column.canEdit ? Validators.required : null;
  }
  setControlFilterValues(column: DataColumn, control: FormControl) {
    if ([`select`, `timepicker`].includes(column.controlType)) {
      column.filteredLookupValues = control.valueChanges.pipe(
        startWith(``),
        map((value) => this.filterBy(column, value))
      );
    }
  }
  filterBy(column: DataColumn, filterValue: any) {
    const values: any[] = column?.lookupValues || [];
    return this.filterValuesBy(values, filterValue);
  }
  filterValuesBy(values: any[], filterValue: any) {
    const filteredValues = values?.filter(
      (value) =>
        this.findById(value, filterValue) ||
        this.findByValue(value, filterValue)
    );
    const hasValues = !filteredValues?.every((value) => value === undefined);
    return hasValues
      ? Array.from(new Set(filteredValues?.map((value) => value))).sort(
          (value) => value?.displayValue || value
        )
      : [];
  }
  findById(value: any, findValue: any) {
    return parseFloat(value?.id || value?._id) === parseFloat(findValue);
  }
  findByValue(value: any, findValue: any) {
    return String(value?.displayValue || value?.title || value?.value).includes(
      GeneralUtils.toLocalLowerCaseWithTrim(findValue)
    );
  }
  isCreate() {
    return [`add`, `create`, `insert`, `new`].includes(
      GeneralUtils.toLocalLowerCaseWithTrim(this.action)
    );
  }
  isEdit() {
    return [`change`, `edit`, `update`].includes(
      GeneralUtils.toLocalLowerCaseWithTrim(this.action)
    );
  }
  isDelete() {
    return [`archive`, `delete`, `remove`, `deactivate`].includes(
      GeneralUtils.toLocalLowerCaseWithTrim(this.action)
    );
  }
  displayWithFn(options: any[]): (id: number) => string | null {
    return (id: number) => {
      const correspondingOption = Array.isArray(options)
        ? options.find((option) => option.id === id)
        : null;
      return (
        correspondingOption?.displayValue || correspondingOption?.value || id
      );
    };
  }
  displayWith(column: DataColumn): (id: any) => string | null {
    return (id: any) => {
      const lookupValue = column?.lookupValues?.find(
        (lv) => lv.id === id || lv.displayValue === id
      );
      return lookupValue?.displayValue || lookupValue?.id || id;
    };
  }
  getTextAreaValue(column: DataColumn) {
    const value = String(this.formGroupFields?.controls[column?.name]?.value);
    return GeneralUtils.StringNullIf(value).trim();
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
        event?.source?.value === `No option value(s)` ||
        event?.source?.value?.displayValue === `No option value(s)`
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
  onDatePickerChanged(event: any) {
    if (
      event &&
      event.targetElement &&
      GeneralUtils.isStringSet(event?.targetElement?.id)
    ) {
      this.updates[event?.targetElement?.id] = new Date(event.target.value);
    }
    return;
  }
  onTimePickerChanged(event: any) {
    if (
      event &&
      event.targetElement &&
      GeneralUtils.isStringSet(event?.targetElement?.id)
    ) {
      this.updates[event?.targetElement?.id] = new Date(
        event.target.value
      ).getTime();
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
