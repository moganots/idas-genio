export class UserTasksConfiguration {
  public static identifier = 'task';
  public static pageIcon = 'tune';
  public static pageRoute = 'task';
  public static pageRouteTitle = 'My Tasks';
  public static pageRouteCssClass = '';
  public static pageTitle = `Manage Tasks`;
  public static pageName = `Manage Tasks`;
  public static tableHeading = 'Manage Tasks';
  public static graphHeading = '';
  public static buildingBlockLabel = '';
  public static fieldNames = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'ProjectId', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Summary', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'Description', canShow: true, canSort: true, canGroup: false},
    {id: 5, name: 'SubTaskId', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 7, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 8, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 9, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
  ];
}
