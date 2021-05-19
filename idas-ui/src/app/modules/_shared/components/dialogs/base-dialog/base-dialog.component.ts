import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService, LookupService, ReferenceEntityService } from 'app/shared/shared.module';
import { map, startWith } from 'rxjs/operators';
import { BaseDataViewComponent } from '../../data-view/base-data-view/base-data-view.component';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss'],
  providers: [
    AuthenticationService,
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class BaseDialogComponent extends BaseDataViewComponent {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
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
    },
    public frmBuilder: FormBuilder) {
    super(location, router, matDialog, authenticationService, lookupService, referenceEntityService);
    this.action = data.action;
    this.dataService = data.dataService;
    this.entityName = data.entityName;
    this.pageIcon = data.pageIcon;
    this.pageName = data.pageName;
    this.pageTitle = data.pageTitle;
    this.sourceDataColumnNames = this.dataFields = data.dataFields;
    this.selected = data.selected || {};
    this.selectedIndex = data.selectedIndex;
  }

  ngOnInit() {
    this.setDataSourceDisplayColumnNames();
    this.setDataFieldNames();
    this.setUseDataFields();
    this.frmGroupFields = new FormGroup({});
    this.useDataFields.forEach((field) => {
      // tslint:disable-next-line:max-line-length
      this.selected = (this.isCreate()) ? {} : this.selected;
      const control = new FormControl({value: this.selected[field.name], disabled: this.isFieldDisabled(field)}, this.getFieldConditionalIsRequired(field));
      field.filteredLookupValues = control.valueChanges.pipe(startWith(''), map((value) => this.filterBy(field, value)));
      this.frmGroupFields.addControl(field.name, control);
    });
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields
    });
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
