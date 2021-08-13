import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferenceValueService } from 'app/modules/_shared/services/reference-value-service/reference-value.service';
import {
  AuthenticationService,
  AlertifyService,
  LookupValueService,
  DataColumn
} from 'app/shared/shared.module';
import { map, startWith } from 'rxjs/operators';
import { BaseDataComponent } from '../../base-data-component/base-data.component';

@Component({
  selector: 'app-base-data-view',
  templateUrl: './base-data-view.component.html',
  styleUrls: ['./base-data-view.component.scss'],
  providers: [
    AlertifyService
    , AuthenticationService
    , LookupValueService
    , ReferenceValueService
    , {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class BaseDataViewComponent extends BaseDataComponent {

  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService
    ) {
    super(router, matDialog, alertifyService, authenticationService, lookupValueService, referenceValueService);
  }
  hasData(): boolean {
    return (this.dataSource && this.dataSource.data !== null);
  }
  initFormGroupAndFields(useColumns: DataColumn[]) {
    this.setFormInputDataColumns(useColumns);
    this.frmGroupFields = new FormGroup({});
    this.formInputDataColumns.forEach((column) => {
      column.value = this.getFieldValue(column, (this.selected || {}));
      const control = new FormControl(
        {
          value: column.value,
          disabled: this.isFieldDisabled(column),
        },
        this.getFieldConditionalIsRequired(column)
      );
      this.setControlFilterValues(column, control);
      this.frmGroupFields.addControl(column.name, control);
    });
  }
  getButtonTitleDataRefresh() {
    return `${['Refresh', this.capitalizeFirstLetter(this.entityName || ''), 'View'].join(' ').trim()}`;
  }
  getButtonTitleAdd() {
    return `${['Add', 'New', this.capitalizeFirstLetter(this.entityName || '')].join(' ').trim()}`;
  }
  getColumnCssClassCategoryById(column: DataColumn, id?: number) {
    return ((column.lookupValues || []).find((lv) => lv.id === id) || {cssClassCategory : ''}).cssClassCategory;
  }
  getColumnCssClassById(column: DataColumn, id?: number) {
    return ((column.lookupValues || []).find((lv) => lv.id === id) || {cssClass : ''}).cssClass;
  }
  getColumnDisplayTitleById(column, id?: number) {
    return ((column.lookupValues || []).find((lv) => lv.id === id) || {title: ``}).title;
  }
  getColumnDisplayIconById(column, id?: number) {
    return ((column.lookupValues || []).find((lv) => lv.id === id) || {icon: `report_problem`}).icon;
  }
  getColumnDisplayImageById(column, id?: number) {
    return ((column.lookupValues || []).find((lv) => lv.id === id) || {image: id} || {image: `./assets/img/problem-orange.png`}).image;
  }
  getColumnDisplayValueById(column: any, id?: number) {
    return (column.lookupValues.find((value) => value.id === id) || {displayValue: undefined}).displayValue;
  }
  onApplyFilter(filterValue) {
    if (this.hasData()) {
      console.log(`applying filter`)
      this.dataSource.filter = this.toLocaleLowerCaseTrim(filterValue);
    }
  }
  onClickCreate(): void {
    this.action = 'create';
    this.selected = {};
  }
  onClickEdit(element: any, index?: number): void {
    this.action = 'edit';
    this.setSelectedElementAndIndex(element, index);
  }
  onClickDelete(element: any, index?: number): void {
    this.action = 'delete';
    this.setSelectedElementAndIndex(element, index);
  }
  setSelectedElementAndIndex(element: any, index?: number) {
    this.selected = element;
    this.selectedIndex = index || this.getElementIndex(element);
  }
}
