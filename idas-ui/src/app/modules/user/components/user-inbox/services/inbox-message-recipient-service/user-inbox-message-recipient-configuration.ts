import { DataColumn } from 'app/shared/app-shared.module';

export class UserInboxMessageRecipientConfiguration {
  public static identifier = `inbox-message-recipient`;
  public static pageIcon = `account_box`;
  public static pageRoute = `inbox/:messageId/recipients`;
  public static pageRouteTitle = `My Inbox Message Recipient(s)`;
  public static pageRouteCssClass = ``;
  public static pageTitle = `My Inbox Message Recipient(s)`;
  public static pageName = `My Inbox Message Recipient(s)`;
  public static tableHeading = `My Inbox Message Recipient(s)`;
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    { id: 1, name: `_id`, canShow: false, canSort: true, canGroup: false },
    {
      id: 2,
      name: `InboxMessageId`,
      canShow: true,
      canSort: true,
      canGroup: false,
    },
    {
      id: 3,
      name: `RecipientId`,
      canShow: true,
      canSort: true,
      canGroup: false,
    },
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
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
