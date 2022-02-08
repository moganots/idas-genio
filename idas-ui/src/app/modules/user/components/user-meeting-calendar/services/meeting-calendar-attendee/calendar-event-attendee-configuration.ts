import { DataColumn } from 'app/shared/app-shared.module';

export class CalendarEventAttendeeConfiguration {
  public static identifier = 'calendar-event-attendee';
  public static pageIcon = 'assignment_ind';
  public static pageRoute = ``;
  public static pageRouteTitle = ``;
  public static pageRouteCssClass = ``;
  public static pageTitle = ``;
  public static pageName = ``;
  public static tableHeading = ``;
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `CalendarEventId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `AttendeeId` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `IsAccepted` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `IsRejected` , canShow: true, canSort: true, canGroup: false},
    {id: 6, name: `IsTentative` , canShow: true, canSort: true, canGroup: false},
    {id: 7, name: `IsActive` , canShow: true, canSort: true, canGroup: false},
    /*
    {id: 8, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 9, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 10, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 11, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
    */
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
