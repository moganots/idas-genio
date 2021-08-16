import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
import { User } from '../user/user';
export class CalendarEvent extends BaseModel {
  CalendarEventTypeId: number;
  Title: string;
  StartDate: Date;
  EndDate: Date;
  IsAllDayEvent: boolean;
  Location: string;
  EventAttendeeId: number;
  CalendarEventType: LookupValue;
  EventAttendee: User;
  CssClass: string;
}
