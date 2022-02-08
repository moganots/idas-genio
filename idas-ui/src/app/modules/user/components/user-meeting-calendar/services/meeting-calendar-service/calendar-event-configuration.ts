import { DataColumn } from 'app/shared/domain-models/data-column';

export class CalendarEventConfiguration {
  public static identifier = 'calendar-event';
  public static pageIcon = 'event';
  public static pageRoute = 'schedule';
  public static pageRouteTitle = 'My Schedule';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Schedule`;
  public static pageName = `Manage Schedule`;
  public static tableHeading = 'Manage Schedule';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `CalendarEventTypeId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `Title` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `StartDate` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `StartDateTime` , canShow: false, canSort: true, canGroup: false},
    {id: 6, name: `EndDate` , canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `EndDateTime` , canShow: false, canSort: true, canGroup: false},
    {id: 8, name: `Location` , canShow: true, canSort: true, canGroup: false},
    {id: 9, name: `Description` , canShow: true, canSort: true, canGroup: false},
    {id: 10, name: `IsAllDayEvent` , canShow: true, canSort: true, canGroup: false},
    {id: 11, name: `IsActive` , canShow: true, canSort: false, canGroup: false},
    /*
    {id: 12, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 13, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 14, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 15, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
    */
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
