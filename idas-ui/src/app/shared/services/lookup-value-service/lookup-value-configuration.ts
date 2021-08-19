export class LookupValueConfiguration {
  public static identifier = 'lookup-value';
  public static pageIcon = 'manage_accounts';
  public static pageRoute = 'lookup-value';
  public static pageRouteTitle = 'Lookup Values';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Lookup Values`;
  public static pageName = `Manage Lookup Values`;
  public static tableHeading = 'Manage Lookup Values';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'LookupCategoryId', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Value', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'Value2', canShow: true, canSort: true, canGroup: false},
    {id: 5, name: 'Value3', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'Image', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'Icon', canShow: true, canSort: true, canGroup: false},
    {id: 8, name: 'IsActive', canShow: false, canSort: true, canGroup: false},
    /*
    {id: 9, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 10, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 11, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 12, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ];
}
