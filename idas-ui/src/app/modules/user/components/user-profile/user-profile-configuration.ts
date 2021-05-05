export class UserProfileConfiguration {
  public static identifier = 'profile';
  public static pageIcon = 'manage_accounts';
  public static pageRoute = 'profile';
  public static pageRouteTitle = 'My Profile';
  public static pageRouteCssClass = '';
  public static pageTitle = `Manage Profile`;
  public static pageName = `Manage Profile`;
  public static tableHeading = 'Manage Profile';
  public static graphHeading = '';
  public static buildingBlockLabel = '';
  public static fieldNames = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'EmployeeId', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'ClientId', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'SupplierId', canShow: true, canSort: true, canGroup: false},
    {id: 5, name: 'EmailAddress', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'Password', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'IsAdmin', canShow: true, canSort: true, canGroup: false},
    {id: 8, name: 'IsLocked', canShow: true, canSort: true, canGroup: false},
    {id: 9, name: 'IsActive', canShow: true, canSort: true, canGroup: false},
    {id: 10, name: 'DateLastLoggedIn', canShow: true, canSort: true, canGroup: false},
    {id: 11, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 12, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 13, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 14, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
  ];
}
