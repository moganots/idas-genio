import { BaseModel } from '../base/base-model';
import { User } from '../user/user';
import { CalendarEvent } from './calendar-event';
export class CalendarEventAttendee extends BaseModel {
  CalendarEventId: number;
  AttendeeId: number;
  IsAccepted: boolean;
  IsRejected: boolean;
  IsTentative: boolean;
  CalendarEvent: CalendarEvent;
  Attendee: User;
}
