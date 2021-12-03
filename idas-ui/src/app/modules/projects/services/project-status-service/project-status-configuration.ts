export class ProjectStatusConfiguration {
  public static identifier = 'project-status';
  public static pageIcon = 'tune';
  public static pageRoute = 'Projects';
  public static pageRouteTitle = 'My Project Status(es)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Project Status(es)`;
  public static pageName = `Manage Project Status(es)`;
  public static tableHeading = 'Manage Project Status(es)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    { id: 1, name: `_id`, canShow: false, canSort: true, canGroup: false },
    { id: 2, name: `ProjectId`, canShow: true, canSort: true, canGroup: false },
    { id: 3, name: `StatusId`, canShow: true, canSort: true, canGroup: false },
    { id: 4, name: `IsActive`, canShow: false, canSort: true, canGroup: false },
    {
      id: 5,
      name: `CreatedBy`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    {
      id: 6,
      name: `DateCreated`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    {
      id: 7,
      name: `ModifiedBy`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
    {
      id: 8,
      name: `DateModified`,
      canShow: false,
      canSort: true,
      canGroup: false,
    },
  ];
}
