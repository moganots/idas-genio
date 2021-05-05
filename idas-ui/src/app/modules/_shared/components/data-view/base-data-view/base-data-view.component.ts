import { Component, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModulesSharedConfiguration } from 'app/modules/_shared/modules-shared-configuration';
import { LookupService, ReferenceEntityService, LookupValue } from 'app/shared/shared.module';
import { BaseComponent } from '../../base-component/base.component';

@Component({
  selector: 'app-base-data-view',
  templateUrl: './base-data-view.component.html',
  styleUrls: ['./base-data-view.component.scss'],
  providers: [
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class BaseDataViewComponent extends BaseComponent {
  @Input() public selected: any;
  @Input() public selectedIndex: number;
  public dataSourceColumnNames: any[];
  public dataSourceDisplayColumnNames: any[][];
  public groupByColumnNames: any[];
  public dataSource: MatTableDataSource<any[]>;

  constructor(public matDialog: MatDialog, public lookupService: LookupService, public referenceEntityService: ReferenceEntityService) {
    super(matDialog);
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
      });
  }
  mapLookupValues(lookupValues: any[]): any {
    return (lookupValues || []).map((lv) => ({id: lv._id, displayValue: lv.value, icon: lv.icon}));
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
