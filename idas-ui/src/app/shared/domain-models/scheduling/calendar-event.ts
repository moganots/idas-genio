import { BaseModel } from '../base/base-model';
import { LookupValue } from '../lookups/lookup-value';
import { User } from '../user/user';
export class CalendarEvent extends BaseModel {
    MeetingTypeId: number;
    Title: string;
    StartDate: Date;
    StartTime: string;
    EndDate: Date;
    EndTime: string;
    IsAllDayEvent: boolean;
    IsRecurring: boolean;
    Location: string;
    MeetingAttendeeId: number;
    MeetingType: LookupValue;
    MeetingAttendee: User;
}
