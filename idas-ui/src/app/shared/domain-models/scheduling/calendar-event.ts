import { BaseModel } from '../base/base-model';
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
  Attendees: CalendarEventAttendee[];
  CssClass: string;
  Icon: string;
  IconTitle: string;
}
