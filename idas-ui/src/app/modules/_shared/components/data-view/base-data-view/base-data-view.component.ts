import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { ReferenceValueService } from 'app/modules/_shared/services/reference-value-service/reference-value.service';
import {
  AuthenticationService,
  AlertifyService,
  LookupValueService,
  DataColumn,
} from 'app/shared/app-shared.module';
import { BaseDataComponent } from '../../base-data-component/base-data.component';

@Component({
  selector: 'app-base-data-view',
  templateUrl: './base-data-view.component.html',
  styleUrls: ['./base-data-view.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class BaseDataViewComponent extends BaseDataComponent {
  @Input() public canCreate = false;
  @Input() public canView = false;
  @Input() public canEdit = false;
  @Input() public canDelete = false;
  @Input() public canSave = false;
  @Input() public canRefresh = false;
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  currentHour: string;
  currentMinutes: string;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
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
    this.currentHour = this.appendLeadingZero(new Date().getHours());
    this.currentMinutes = this.appendLeadingZero(new Date().getMinutes());
  }
  hasData(): boolean {
    return this.matTableDataSource && this.matTableDataSource.data !== null;
  }
  initFormGroupAndFields(useColumns: DataColumn[] = null) {
    this.setDataSourceColumns();
    this.setFormInputDataColumns(useColumns);
    this.formGroupFields = new FormGroup({});
    this.formInputDataColumns.forEach((column) => {
      column.value = this.getFieldValue(column, this.selectedElement || {});
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
  getButtonTitleDataRefresh() {
    return `${[
      'Refresh',
      this.capitalizeFirstLetter(this.entityName || ``),
      'View',
    ]
      .join(' ')
      .trim()}`;
  }
  getButtonTitleAdd() {
    return `${['Add', 'New', this.capitalizeFirstLetter(this.entityName || ``)]
      .join(' ')
      .trim()}`;
  }
  getColumnCssClassCategoryById(column: DataColumn, id?: number) {
    return (
      (column.lookupValues || []).find((lv) => lv.id === id) || {
        cssClassCategory: ``,
      }
    ).cssClassCategory;
  }
  getColumnCssClassById(column: DataColumn, id?: number) {
    return (
      (column.lookupValues || []).find((lv) => lv.id === id) || { cssClass: `` }
    ).cssClass;
  }
  getColumnDisplayTitleById(column, id?: number) {
    return (
      (column.lookupValues || []).find((lv) => lv.id === id) || { title: `` }
    ).title;
  }
  getColumnDisplayIconById(column, id?: number) {
    return (
      (column.lookupValues || []).find((lv) => lv.id === id) || {
        icon: `report_problem`,
      }
    ).icon;
  }
  getColumnDisplayImageById(column, id?: number) {
    return (
      (column.lookupValues || []).find((lv) => lv.id === id) || {
        image: id,
      } || { image: `./assets/img/problem-orange.png` }
    ).image;
  }
  getColumnDisplayValueById(column: any, id?: number) {
    return (
      column.lookupValues.find((value) => value.id === id) || {
        displayValue: undefined,
      }
    ).displayValue;
  }
  getTimeFormControl(name: string) {
    return this.formGroupFields.controls[`${name}Time`];
  }
  onApplyFilter(filterValue) {
    if (this.hasData()) {
      this.matTableDataSource.filter = this.toLocaleLowerCaseTrim(filterValue);
    }
  }
  setSelectedElementAndIndex(element: any, index?: number) {
    this.selectedElement = element || {};
    this.selectedElementIndex = index || this.getElementIndex(element);
  }
  onButtonClickCreate(): void {
    this.action = 'create';
    this.selectedElement = {};
  }
  onButtonClickEdit(element: any, index?: number): void {
    this.action = 'edit';
    this.setSelectedElementAndIndex(element, index);
  }
  onButtonClickDelete(element: any, index?: number): void {
    this.action = 'delete';
    this.setSelectedElementAndIndex(element, index);
  }
}
