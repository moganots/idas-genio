import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  AlertifyService,
  AuthenticationService,
  DataColumn,
  Employee,
  ImagesService,
  LookupValueService,
} from 'app/shared/app-shared.module';
import { UserProfileConfiguration } from './user-profile-configuration';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    UserService,
    ImagesService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class UserProfileComponent extends PageComponent implements OnInit {
  columnsCssClass = 'col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12';
  fieldsPersonalDetails: DataColumn[] = [];
  fieldsContactDetails: DataColumn[] = [];
  fieldsUserAccountDetails: DataColumn[] = [];
  defaultAvatar = UserProfileConfiguration.defaultAvatar;
  imagesAvatars: any[] = [];
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public userService: UserService,
    public imagesService: ImagesService
  ) {
    super(
      router,
      matDialog,
      formBuilder,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.pageIcon = UserProfileConfiguration.pageIcon;
    this.pageTitle = UserProfileConfiguration.pageTitle;
    this.pageName = UserProfileConfiguration.pageName;
    this.dataService = userService;
    this.entityName = UserProfileConfiguration.identifier;
    this.dataSourceColumns = UserProfileConfiguration.dataColumns;
    this.selectedElement = this.currentUser;
    // this.setDataSourceColumns();
  }
  ngOnInit() {
    this.action = `Edit`;
    this.initFormGroupAndFields();
    this.fieldsPersonalDetails = this.dataSourceColumns?.filter(
      (column) => column.id >= 1 && column.id <= 21
    );
    this.fieldsContactDetails = this.dataSourceColumns?.filter(
      (column) => column.id >= 22 && column.id <= 40
    );
    this.fieldsUserAccountDetails = this.dataSourceColumns?.filter(
      (column) => column.id >= 41
    );
    this.imagesService.getImagesAvatars().subscribe((imagesAvatars) => {
      this.imagesAvatars = imagesAvatars;
    });
  }
  onClickChangeAvatar(imageAvatar) {
    this.currentUser.Avatar = imageAvatar?.path;
  }
}
