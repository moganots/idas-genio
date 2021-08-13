export class UsersConfiguration {
  public static identifier = 'user';
  public static pageIcon = 'manage_accounts';
  public static pageRoute = 'users';
  public static pageRouteTitle = 'Users';
  public static pageRouteCssClass = '';
  public static pageTitle = `Manage Users`;
  public static pageName = `Manage Users`;
  public static tableHeading = 'Manage Users';
  public static graphHeading = '';
  public static buildingBlockLabel = '';
  public static dataColumns = [
    {id: 1, name: 'UserId', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'Avatar', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'UserTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'EmployeeClientSupplierId', canShow: false, canSort: true, canGroup: false},
    {id: 5, name: 'EmailAddress', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'Password', canShow: false, canSort: true, canGroup: false},
    {id: 7, name: 'ConfirmPassword', canShow: false, canSort: true, canGroup: false},
    {id: 8, name: 'DateLastLoggedIn', canShow: true, canSort: true, canGroup: false},
    {id: 9, name: 'IsAdmin', canShow: true, canSort: true, canGroup: false},
    {id: 10, name: 'IsLocked', canShow: true, canSort: true, canGroup: false},
    {id: 11, name: 'SessionToken', canShow: false, canSort: true, canGroup: false},
    {id: 12, name: 'IsActive', canShow: false, canSort: true, canGroup: false},
    /*
    {id: 13, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 14, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 15, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 16, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ];
}
