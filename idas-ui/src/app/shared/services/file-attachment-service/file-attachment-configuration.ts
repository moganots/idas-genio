import { DataColumn } from 'app/shared/domain-models/data-column';

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
    {id: 1, name: `_id`, canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `ProjectId`, canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `TaskId`, canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `CalendarEventId`, canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `InboxMessageId`, canShow: true, canSort: true, canGroup: false},
    {id: 6, name: `FileName`, canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `FileExtension`, canShow: true, canSort: true, canGroup: false},
    {id: 8, name: `ContentType`, canShow: true, canSort: true, canGroup: false},
    {id: 9, name: `FileContent`, canShow: true, canSort: true, canGroup: false},
    {id: 10, name: `FileSize`, canShow: true, canSort: true, canGroup: false},
    {id: 11, name: `IsActive`, canShow: false, canSort: true, canGroup: false},
    {id: 12, name: `CreatedBy`, canShow: false, canSort: true, canGroup: false},
    {id: 13, name: `DateCreated`, canShow: false, canSort: true, canGroup: false},
    {id: 14, name: `ModifiedBy`, canShow: false, canSort: true, canGroup: false},
    {id: 15, name: `DateModified`, canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
