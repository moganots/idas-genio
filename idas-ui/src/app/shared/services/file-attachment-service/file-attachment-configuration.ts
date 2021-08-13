export class FileAttachmentConfiguration {
  public static identifier = 'file-attachment';
  public static pageIcon = 'manage_accounts';
  public static pageRoute = 'secure/attachment/:id/:fileName';
  public static pageRouteTitle = ``;
  public static pageRouteCssClass = ``;
  public static pageTitle = ``;
  public static pageName = ``;
  public static tableHeading = ``;
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `ProjectId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `TaskId` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `FileName` , canShow: true, canSort: true, canGroup: false},
    /*
    {id: 5, name: `IsActive` , canShow: false, canSort: true, canGroup: false},
    {id: 6, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 7, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 8, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 9, name: `DateModified` , canShow: false, canSort: true, canGroup: false}
    */
  ];
}
