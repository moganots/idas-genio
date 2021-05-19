import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService, DatesUtil, LookupService, LookupValue, ReferenceEntityService } from 'app/shared/shared.module';
import { ModulesSharedConfiguration } from '../../modules-shared-configuration';
import { BaseComponent } from '../base-component/base.component';

@Component({
  selector: 'app-base-data',
  templateUrl: './base-data.component.html',
  styleUrls: ['./base-data.component.css'],
  providers: [AuthenticationService, LookupService, ReferenceEntityService]
})
export class BaseDataComponent extends BaseComponent {
  public dataSourceColumnNames: any[];
  public dataSourceDisplayColumnNames: any[][];
  public groupByColumnNames: any[];
  public dataFieldNames: string[];
  public useDataFields: any[];
  public useDataFieldNames: any[];
  public updates: { [key: string]: any } = {};

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService) {
    super(location, router, matDialog, authenticationService);
  }

  setDataSourceDisplayColumnNames(): void {
    this.setDataSourceColumnIsRequiredCanEditFlags();
    this.setDataSourceColumnControlTypes();
    this.setDataSourceColumnLookupValues();
    this.dataSourceColumnNames = this.sourceDataColumnNames.filter(column => column.canShow).map((column) => column.name);
    this.dataSourceDisplayColumnNames = this.dataSourceColumnNames.map((column) => [column, this.formatDisplayColumnName(column)]);
    this.groupByColumnNames = this.dataSourceColumnNames.filter(column => column.canShow && column.canGroup).map((column) => column.name);
    if (!this.dataSourceColumnNames.find(cn => cn === 'buttons')) {
      this.dataSourceColumnNames.push('buttons');
    }
  }
  setDataSourceColumnIsRequiredCanEditFlags(){
    this.sourceDataColumnNames.forEach((cn) => {
      // Set isRequired flag
      // tslint:disable-next-line:max-line-length
      cn.isRequired = !(ModulesSharedConfiguration.cannotEditColumns.includes(cn.name) || ModulesSharedConfiguration.optionalColumns.includes(cn.name));
      // Set canEdit flag
      // ToDo: Check current user's access permissions
      cn.canEdit = !(ModulesSharedConfiguration.cannotEditColumns.includes(cn.name));
    });
  }
  setDataSourceColumnControlTypes() {
    this.sourceDataColumnNames.forEach((cn) => {
      if(this.isUseCheckbox(cn)) { cn.controlType = 'checkbox'; }
      else if(this.isDateField(cn)) { cn.controlType = 'datetimepicker'; }
      else if(this.isNumberField(cn)) { cn.controlType = 'number'; }
      else if(this.isTextAreaField(cn)) { cn.controlType = 'textarea'; }
      else if(this.isMaskedField(cn)) { cn.controlType = 'password'; }
      else if(this.isLookupValueField(cn) || this.isReferenceValueField(cn)) { cn.controlType = 'select'; }
      else { cn.controlType = 'textbox'; }
    });
  }
  setDataSourceColumnLookupValues(){
    this.sourceDataColumnNames
      .filter((cn) => cn.controlType === 'select')
      .forEach((cn) => {
        if(this.isLookupValueField(cn)) { cn.lookupValues = this.mapLookupValues(this.getLookupValuesByColumnName(cn)); }
        if(this.isReferenceValueField(cn)) { cn.lookupValues = this.mapLookupValues(this.getReferenceValuesByColumnName(cn)); console.log(cn.lookupValues)}
      });
  }
  mapLookupValues(lookupValues: any[]): any {
    return (lookupValues || []).map((lv) => ({id: lv._id, displayValue: `${lv.value || lv.name || lv.Name} ${(lv.Surname) ? lv.Surname : ''}`.trim(), icon: lv.icon}));
  }
  isFieldDisabled(field: any) {
    switch(this.action.trim().toLocaleLowerCase()){
      case 'edit':
        switch(field.name){
          case 'DateHired':
            return true;
          default: return !field.canEdit;
        };
      default: return !field.canEdit;
    }
  }
  getFieldConditionalIsRequired(field: any) {
    if(field.name === 'MiddleName') { return null; }
    if(field.name === 'IsTerminated') { return null; }
    if(field.name === 'VATNumber') { return null; }
    if(this.isEdit() && field.name === 'IdNumber' && this.isObjectSet(this.selected.RegistrationNumber)) { return null; }
    if(this.isEdit() && field.name === 'RegistrationNumber' && this.isObjectSet(this.selected.IdNumber)) { return null; }
    return (field.canEdit) ? Validators.required : null;
  }
  getLookupValuesByColumnName(columnName: string){
    return this.lookupService.getLookupValuesByColumnName(columnName);
  }
  getLookupValueById(id: number) {
    return this.lookupService.getLookupValueById(id) || new LookupValue(-1, null, null, null, null, '', 'report_problem');
  }
  getLookupValueByIdAsTitle(id: number){
    return this.getLookupValueById(id).value || '';
  }
  getLookupValueImageById(id: number) {
    return this.getLookupValueById(id).image;
  }
  getLookupValueIconById(id: number) {
    return this.getLookupValueById(id).icon;
  }

  getReferenceValuesByColumnName(columnName: string){
    return this.referenceEntityService.getReferenceValuesByColumnName(columnName);
  }
  setDataFieldNames() {
    this.dataFieldNames = this.getDefaultSourceFields().map((df) => df.name);
  }
  setUseDataFields() {
    this.useDataFields = this.getDefaultSourceFields().filter((df) => df.canEdit);
    this.useDataFieldNames = this.useDataFields.map((udf) => udf.name);
  }
  getDefaultSourceFields() {
    return (this.dataFields || this.sourceDataColumnNames);
  }
  getFieldPlaceholder(field: any) {
    return this.splitCamelCase(this.trimId(field));
  }
  getFieldLookupValues(field: any) {
    if(field.isLookupValueField){
      field.lookupValues = this.getLookupValuesByColumnName(field)
        .map((lv) => ({value: lv._id, displayValue: lv.value}));
    }
  }
  filterBy(field: any, filterValue: any) {
    const noValues = [{displayValue: 'No option value(s)'}];
    const values: any[] = field.lookupValues || noValues;
    filterValue = this.getFilterValue(filterValue, field).toString().trim().toLocaleLowerCase();
    // tslint:disable-next-line:max-line-length
    const filteredValues = values.filter((value) => this.filterById(value, filterValue) || this.filterByDisplayValue(value, filterValue));
    const hasValues = !filteredValues.every((value) => value === undefined);
    return hasValues ? Array.from(new Set(
      filteredValues.map((value) => value)))
      .sort((value) => value.displayValue.toLocaleLowerCase().trim()) : noValues;
  }
  getFilterValue(filterValue: any, field: any): any {
    return (this.getFormControlFieldValue(field) || filterValue || '');
  }
  getFormControlFieldValue(field: any): any {
    return (this.frmGroupFields.get(field.name) || new FormControl()).value;
  }
  filterById(value: any, filterValue: any): unknown {
    return ((value.id || '').toString().trim() === filterValue);
  }
  filterByDisplayValue(value: any, filterValue: any): unknown {
    return (value.displayValue.toString().trim().toLocaleLowerCase().includes(filterValue));
  }
  onValueChanged(field: any, event: any) {
    if (!(field)) { return; }
    this.updates[field.name] = event.target.value;
  }
  onSelectedValueChanged(field: any, event: any) {
    if (!(field) || event.source.value === 'No option value(s)') { return; }
    this.updates[field.name] = event.source.value;
  }
  onDateChanged(field: any, event: MatDatepickerInputEvent<Date>){
    if (!(field)) { return; }
    this.updates[field.name] = DatesUtil.formatDateMMDDYYWithSlashSeparator(event.value);
  }

}
