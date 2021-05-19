import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AuthenticationService, LookupService, ReferenceEntityService, User } from 'app/shared/shared.module';
import { UserProfileConfiguration } from './user-profile-configuration';
import { UsersService } from '../../services/users.service';
import { BaseDataComponent } from 'app/modules/_shared/components/base-data-component/base-data.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
    AuthenticationService,
    LookupService,
    ReferenceEntityService,
    UsersService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { }}
  ]
})
export class UserProfileComponent extends BaseDataComponent implements OnInit {

  constructor(
    public location: Location,
    public router: Router,
    public matDialog: MatDialog,
    public authenticationService: AuthenticationService,
    public lookupService: LookupService,
    public referenceEntityService: ReferenceEntityService,
    public usersService: UsersService,
    private frmBuilder: FormBuilder
    ) {
      super(location, router, matDialog, authenticationService, lookupService, referenceEntityService);
      this.pageIcon = UserProfileConfiguration.pageIcon;
      this.pageTitle = UserProfileConfiguration.pageTitle;
      this.pageName = UserProfileConfiguration.pageName;
      this.dataService = usersService;
      this.entityName = UserProfileConfiguration.identifier;
      this.sourceDataColumnNames = UserProfileConfiguration.fieldNames;
      this.currentUser = usersService.getFirstById<User>(1);
  }

  ngOnInit() {
    this.setDataSourceDisplayColumnNames();
    this.setDataFieldNames();
    this.setUseDataFields();
    this.frmGroupFields = new FormGroup({});
    this.sourceDataColumnNames.forEach((field) => {
      const control = new FormControl({value: this.selected[field.name], disabled: this.isFieldDisabled(field)}, this.getFieldConditionalIsRequired(field));
      field.filteredLookupValues = control.valueChanges.pipe(startWith(''), map((value) => this.filterBy(field, value)));
      this.frmGroupFields.addControl(field.name, control);
    });
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields
    });
  }

}
