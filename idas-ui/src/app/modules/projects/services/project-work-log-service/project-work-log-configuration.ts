export class ProjectWorkLogConfiguration {
  public static identifier = 'project-work-log';
  public static pageIcon = 'tune';
  public static pageRoute = 'Projects';
  public static pageRouteTitle = 'My Project Work Log(s)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Project Work Log(s)`;
  public static pageName = `Manage Project Work Log(s)`;
  public static tableHeading = 'Manage Project Work Log(s)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    { id: 1, name: `_id`, canShow: false, canSort: true, canGroup: false },
    { id: 2, name: `ProjectId`, canShow: true, canSort: true, canGroup: false },
    { id: 3, name: `StartDate`, canShow: true, canSort: true, canGroup: false },
    {
      id: 4,
      name: `Description`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    {
      id: 5,
      name: `HoursWorked`,
      canShow: true,
      canSort: true,
      canGroup: false,
    },
    { id: 6, name: `IsActive`, canShow: false, canSort: true, canGroup: false },
    {
      id: 7,
      name: `CreatedBy`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    {
      id: 8,
      name: `DateCreated`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    {
      id: 9,
      name: `ModifiedBy`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    {
      id: 10,
      name: `DateModified`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
  ];
}
