import { DataColumn } from 'app/shared/app-shared.module';

export class UserInboxMessageConfiguration {
  public static identifier = 'inbox-message';
  public static pageIcon = 'mail_outline';
  public static pageRoute = 'inbox';
  public static pageRouteTitle = 'My Inbox';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Inbox`;
  public static pageName = `Manage Inbox`;
  public static tableHeading = 'Manage Inbox';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id`, canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `Subject`, canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `Message`, canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `ParentInboxMessageId`, canShow: false, canSort: true, canGroup: false},
    {id: 5, name: `IsActive`, canShow: false, canSort: true, canGroup: false},
    {id: 6, name: `CreatedBy`, canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `DateCreated`, canShow: true, canSort: true, canGroup: false},
    {id: 8, name: `ModifiedBy`, canShow: false, canSort: true, canGroup: false},
    {id: 9, name: `DateModified`, canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
