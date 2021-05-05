import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { startWith, map } from 'rxjs/operators';
import { LookupService, ReferenceEntityService } from 'app/shared/shared.module';
import { BaseDialogComponent } from '../base-dialog/base-dialog.component';

@Component({
  selector: 'app-dialog-create-edit-data',
  templateUrl: './dialog-create-edit-data.component.html',
  styleUrls: ['./dialog-create-edit-data.component.scss'],
  providers: [
    LookupService,
    ReferenceEntityService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class DialogCreateEditDataComponent extends BaseDialogComponent implements OnInit, OnDestroy {

  constructor(
    public matDialog: MatDialog,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService,
    public dialogRef: MatDialogRef<DialogCreateEditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private frmBuilder: FormBuilder
    ) {
    super(matDialog, lookupService, referenceEntityService, dialogRef, data);
  }

  ngOnInit() {
    this.frmGroupFields = new FormGroup({});
    this.useDataFields.forEach((field) => {
      // tslint:disable-next-line:max-line-length
      const control = new FormControl({value: this.selected[field.name], disabled: this.isFieldDisabled(field)}, this.getFieldConditionalIsRequired(field));
      field.filteredLookupValues = control.valueChanges.pipe(startWith(''), map((value) => this.filterBy(field, value)));
      this.frmGroupFields.addControl(field.name, control);
    });
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields
    });
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

  ngOnDestroy() {}

}
