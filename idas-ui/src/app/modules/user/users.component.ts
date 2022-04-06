import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  DialogCreateEditDataComponent,
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { UserConfiguration } from './services/user-service/user-configuration';
import {
  AlertifyService,
  AuthenticationService,
  GeneralUtils,
  LookupValue,
  LookupValueService,
  User,
} from 'app/shared/app-shared.module';
import { UserService } from './services/user-service/user.service';
import { UserType } from 'app/shared/domain-models/lookups/user-type';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    UserService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class UsersComponent extends PageComponent implements OnInit {
  currentTabId = 0;
  userTypes: UserType[] = [];
  users: User[] = [];
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public userService: UserService
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
    this.pageIcon = UserConfiguration.pageIcon;
    this.pageTitle = UserConfiguration.pageTitle;
    this.pageName = UserConfiguration.pageName;
    this.dataService = userService;
    this.entityName = UserConfiguration.identifier;
    this.dataSourceColumns = UserConfiguration.dataColumns;
  }
  ngOnInit(): void {
    this.onLoadRefreshData();
  }
  onLoadRefreshData() {
    this.lookupValueService
      .getAll<LookupValue>()
      // .toPromise()
      .subscribe((lookupValues) => {
        this.userTypes = lookupValues.filter(
          (lookupValue) => lookupValue.LookupCategory.Name === `UserType`
        ) as UserType[];
        this.referenceValueService.userService
          .getAll<User>()
          // .toPromise()
          .subscribe((users) => {
            this.userTypes.forEach((userType) => {
              userType.Users = users.filter(
                (user) => user?.UserTypeId === userType?._id
              );
            });
          });
      });
  }
  setSelectedTab(tabId: number) {
    this.currentTabId = tabId;
  }
  getUserAvatarTitle(user: User) {
    return `${user?.DisplayName || user?.EmailAddress || ``}`;
  }
  getUserDeActivateIcon(user: User) {
    return String(user?.IsActive ? 'check_circle' : 'check_circle_outline');
  }
  getUserUnLockIcon(user: User) {
    return String(user?.IsLocked ? 'lock_open' : 'lock');
  }
  onOpenCreateEditDialog(dialogAction: string, user?: User, userType?: UserType, index?: number) {
    const entity = this.getEntity(dialogAction, user, userType);
    if(!GeneralUtils.isObjectSet(entity)) return;
    this.setSelectedElementAndIndex(user, index);
    const id = (entity || {})._id;
    const name = (user || {})?.DisplayName;
    super.openDialog(
      DialogCreateEditDataComponent,
      {
        action: dialogAction,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: `${this.capitalizeFirstLetter(dialogAction)} ${this.capitalizeFirstLetter(this.entityName)}`,
        pageTitle: `${this.capitalizeFirstLetter(dialogAction)} ${this.capitalizeFirstLetter(this.entityName)}`,
        pageSubTitle: `${GeneralUtils.StringJoin([id, name], ` / `)}`,
        pageWidth: this.pageWidth,
        dataColumns: this.dataSourceColumns,
        selectedElement: this.getEntity(dialogAction, user, userType),
        selectedElementIndex: index || this.selectedElementIndex,
      },
      () => {
        this.onLoadRefreshData();
      }
    );
  }
  onClickDeActivate(user: User) {
    user.IsActive = !user?.IsActive;
    this.dataService.CreateUpdateDelete<User>(`update`, user).subscribe(
      (result) => {
        user = result;
        this.alertifyService.success(
          `User: ${user?.DisplayName}, (de)Activated successfully`
        );
      },
      (error) => {
        this.alertifyService.error(
          `Failed to (de)Activate user: ${user?.DisplayName}`
        );
      },
      () => {
        this.onLoadRefreshData();
      }
    );
  }
  onClickUnLock(user: User) {
    user.IsLocked = !user?.IsLocked;
    this.dataService.CreateUpdateDelete<User>(`update`, user).subscribe(
      (result) => {
        user = result;
        this.alertifyService.success(
          `User: ${user?.DisplayName}, (un)Locked successfully`
        );
      },
      (error) => {
        this.alertifyService.error(
          `Failed to (un)Locked user: ${user?.DisplayName}`
        );
      },
      () => {
        this.onLoadRefreshData();
      }
    );
  }
  getEntity(action: string, user: User, userType: UserType) {
    switch(GeneralUtils.toLocaleLowerCaseWithTrim(action)){
      case `create`: return {_id: null, UserTypeId: userType?._id };
      case `edit`: return user;
      default: return null;
    }
  }
}
