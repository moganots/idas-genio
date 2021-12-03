export class TaskAssignmentConfiguration {
  public static identifier = 'task-assignment';
  public static pageIcon = 'tune';
  public static pageRoute = 'tasks';
  public static pageRouteTitle = 'My Task Assignment(s)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Task Assignment(s)`;
  public static pageName = `Manage Task Assignment(s)`;
  public static tableHeading = 'Manage Task Assignment(s)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `TaskId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `AssigneeId` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `IsActive` , canShow: false, canSort: true, canGroup: false},
    {id: 5, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 6, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 7, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 8, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ];
}
