import { BaseModel } from '../base/base-model';
import { FileAttachment } from '../file-attachment';
import { LookupValue } from '../lookups/lookup-value';
import { CalendarEventAttendee } from './calendar-event-attendee';
export class CalendarEvent extends BaseModel {
  CalendarEventTypeId: number;
  Title: string;
  StartDate: Date;
  EndDate: Date;
  IsAllDayEvent: boolean;
  Location: string;
  CalendarEventType: LookupValue;
  EventAttendees: CalendarEventAttendee[] = [];
  Files: FileAttachment[] = [];
  CssClass: string;
  Icon: string;
  IconTitle: string;
  constructor(
    CalendarEventTypeId?: number,
    Title?: string,
    StartDate?: Date,
    EndDate?: Date,
    IsAllDayEvent?: boolean,
    Location?: string,
    Description?: string,
    EventAttendees?: CalendarEventAttendee[],
    Files?: FileAttachment[],
    CreatedBy?: number
  ) {
    super(
      undefined,
      true,
      undefined,
      Title,
      Description,
      CreatedBy,
      new Date()
    );
    this.CalendarEventTypeId = CalendarEventTypeId;
    this.Title = Title;
    this.StartDate = StartDate;
    this.EndDate = EndDate;
    this.IsAllDayEvent = IsAllDayEvent;
    this.Location = Location;
    this.EventAttendees = EventAttendees;
    this.Files = Files;
  }
}
