export class ProjectAssignmentConfiguration {
  public static identifier = 'projet-assignment';
  public static pageIcon = 'assignment_ind';
  public static pageRoute = 'projects/project/:projectId/assignments';
  public static pageRouteTitle = 'My Project Assignment(s)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Project Assignment(s)`;
  public static pageName = `Manage Project Assignment(s)`;
  public static tableHeading = 'Manage Project Assignment(s)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `ProjectId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `ProjectAssignmentTypeId` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `AssigneeId` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `IsActive` , canShow: false, canSort: true, canGroup: false},
    {id: 6, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 7, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 8, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 9, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ];
}
