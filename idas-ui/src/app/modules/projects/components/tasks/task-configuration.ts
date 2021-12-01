export class TaskConfiguration {
  public static identifier = 'task';
  public static pageIcon = 'tune';
  public static pageRoute = 'tasks';
  public static pageRouteTitle = 'My Tasks';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Tasks`;
  public static pageName = `Manage Tasks`;
  public static tableHeading = 'Manage Tasks';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: '_id', canShow: false, canSort: true, canGroup: false},
    {id: 2, name: 'ProjectId', canShow: true, canSort: true, canGroup: false},
    {id: 3, name: 'Name', canShow: true, canSort: true, canGroup: false},
    {id: 4, name: 'Description', canShow: true, canSort: true, canGroup: false},
    {id: 5, name: 'TaskTypeId', canShow: true, canSort: true, canGroup: false},
    {id: 6, name: 'PriorityId', canShow: true, canSort: true, canGroup: false},
    {id: 7, name: 'StatusId', canShow: true, canSort: true, canGroup: false},
    {id: 8, name: 'ParentTaskId', canShow: false, canSort: true, canGroup: false},
    {id: 9, name: 'IsActive', canShow: false, canSort: true, canGroup: false},
    {id: 10, name: 'AssigneeId', canShow: true, canSort: true, canGroup: false},
    /*
    {id: 11, name: 'CreatedBy', canShow: false, canSort: true, canGroup: false},
    {id: 12, name: 'DateCreated', canShow: false, canSort: true, canGroup: false},
    {id: 13, name: 'ModifiedBy', canShow: false, canSort: true, canGroup: false},
    {id: 14, name: 'DateModified', canShow: false, canSort: true, canGroup: false},
    */
  ];
}
