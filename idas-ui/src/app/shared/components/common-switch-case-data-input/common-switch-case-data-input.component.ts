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
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DataColumn } from 'app/shared/domain-models/data-column';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-common-switch-case-data-input',
  templateUrl: './common-switch-case-data-input.component.html',
  styleUrls: ['./common-switch-case-data-input.component.scss'],
})
export class CommonSwitchCaseDataInputComponent implements OnInit {
  @Input() action: string;
  @Input() entity: any = {};
  @Input() columns: DataColumn[] = [];
  @Input() updates: { [key: string]: any } = {};
  public formGroup: FormGroup;
  public formGroupFields: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formGroupFields = new FormGroup({});
    this.columns?.forEach((column) => {
      column.value = this.getFieldValue(column, this.entity);
      const control = new FormControl(
        {
          value: column.value,
          disabled: this.isFieldDisabled(column),
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
    const columnValue = (dataObject || {})[column.name];
    const lookupValue = column?.lookupValues?.find(
      (lv) => parseFloat(lv.id) === parseFloat(columnValue)
    );
    return lookupValue?.displayValue || columnValue;
  }
  isFieldDisabled(column: DataColumn) {
    switch (GeneralUtils.toLocalLowerCaseWithTrim(this.action)) {
      case `create`:
      case `edit`:
        switch (column.name) {
          case `_id`:
          case `BirthDate`:
          case `Code`:
          case `DateHired`:
          case `DateTerminated`:
          case `DateLastLoggedIn`:
          case `DateLastLoggedOut`:
          case `DateAccounLocked`:
          case `DateAccounUnlocked`:
          case `DateCreated`:
          case `DateModified`:
          case `GenderId`:
          // case `UserTypeId`:
          case `EmployeeClientSupplierId`:
          case `UserId`:
          case `ProjectId`:
          case `TaskId`:
          case `ParentTaskId`:
          case `ParentProjectId`:
            // case `StatusId`:
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
    return [`add`, `create`, `new`].includes(
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
      return correspondingOption?.displayValue || correspondingOption?.value || id;
    };
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
  onTimePickerChanged(event: MatDatepickerInputEvent<Date>) {
    if (
      event &&
      event.targetElement &&
      GeneralUtils.isStringSet(event?.targetElement?.id)
    ) {
      this.updates[event?.targetElement?.id] = new Date(event.target.value).getTime();
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
