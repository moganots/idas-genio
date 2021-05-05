import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DatesUtil, LookupService, ReferenceEntityService } from 'app/shared/shared.module';
import { BaseDataViewComponent } from '../../data-view/base-data-view/base-data-view.component';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss'],
  providers: [
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class BaseDialogComponent extends BaseDataViewComponent {
  @Input() public dataFields: any[];
  public form = new FormControl();
  public frmGroup: FormGroup;
  public frmGroupFields: FormGroup;
  public updates: { [key: string]: any } = {};
  public dataFieldNames: string[];
  public useDataFields: any[];
  public useDataFieldNames: any[];

  constructor(
    public matDialog: MatDialog,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService,
    public dialogRef: MatDialogRef<BaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = {
      action: null,
      dataService: null,
      entityName: null,
      pageIcon: 'report_problem',
      pageName: 'no page name',
      pageTitle: 'no page title',
      dataFields: [],
      selected: {},
      selectedIndex: -1
    }) {
    super(matDialog, lookupService, referenceEntityService);
    this.action = data.action;
    this.dataService = data.dataService;
    this.entityName = data.entityName;
    this.pageIcon = data.pageIcon;
    this.pageName = data.pageName;
    this.pageTitle = data.pageTitle;
    this.dataFields = data.dataFields;
    this.selected = data.selected || {};
    this.selectedIndex = data.selectedIndex;
    this.setDataFieldNames();
    this.setUseDataFields();
  }
  setDataFieldNames() {
    this.dataFieldNames = this.dataFields.map((df) => df.name);
  }
  setUseDataFields() {
    this.useDataFields = this.dataFields.filter((df) => df.canEdit);
    this.useDataFieldNames = this.useDataFields.map((udf) => udf.name);
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
  onClickDialogClose(){
    this.dialogRef.close();
  }
  onClickSave(){
    if(Object.keys(this.updates).length !== 0){
      Object.keys(this.updates).forEach((key) => this.selected[key] = this.updates[key]);
      switch(this.action.toLocaleLowerCase()) {
        case 'create':
        case 'add':
          this.dataService.create(this.selected);
          break;
        case 'change':
        case 'edit':
        case 'update':
          this.dataService.update(this.selected);
          break;
        case 'delete':
        case 'remove':
          this.dataService.delete(this.selected);
          break;
      }
    }
    this.dialogRef.close();
  }

}
