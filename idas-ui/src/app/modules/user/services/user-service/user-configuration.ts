import { DataColumn } from 'app/shared/app-shared.module';

export class UserConfiguration {
  public static identifier = 'user';
  public static pageIcon = 'manage_accounts';
  public static pageRoute = 'users';
  public static pageRouteTitle = 'Users';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Users`;
  public static pageName = `Manage Users`;
  public static tableHeading = 'Manage Users';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `EmployeeId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `ClientId` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `SupplierId` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `EmailAddress` , canShow: true, canSort: true, canGroup: false},
    {id: 6, name: `Password` , canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `ConfirmPassword` , canShow: true, canSort: true, canGroup: false},
    {id: 8, name: `UserTypeId` , canShow: true, canSort: true, canGroup: false},
    {id: 9, name: `IsAdmin` , canShow: true, canSort: true, canGroup: false},
    {id: 10, name: `IsLocked` , canShow: true, canSort: true, canGroup: false},
    {id: 11, name: `Avatar` , canShow: true, canSort: true, canGroup: false},
    {id: 12, name: `DateLastLoggedIn` , canShow: true, canSort: true, canGroup: false},
    {id: 13, name: `SessionToken` , canShow: true, canSort: true, canGroup: false},
    {id: 14, name: `IsActive` , canShow: false, canSort: true, canGroup: false},
    {id: 15, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 16, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 17, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 18, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
