import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user-service/user.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  CalendarEvent,
  User,
  CalendarEventAttendee,
} from 'app/shared/app-shared.module';
import { MeetingCalendarAttendeeService } from '../meeting-calendar-attendee/meeting-calendar-attendee.service';
import { CalendarEventConfiguration } from './calendar-event-configuration';

@Injectable({
  providedIn: 'root',
})
export class MeetingCalendarService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  attendees: CalendarEventAttendee[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public userService: UserService,
    public calendarEventAttendeeService: MeetingCalendarAttendeeService
  ) {
    super(httpClient, authenticationService);
    this.entityName = CalendarEventConfiguration.identifier;
    this.dataColumns = CalendarEventConfiguration.dataColumns;
    this.lookupValueService.getAll<LookupValue>()// .toPromise()
      .subscribe((lookupValues) => {
      this.lookupValues = lookupValues;
    });
    this.userService.getAll<User>()// .toPromise()
      .subscribe((users) => {
      this.users = users;
    });
    this.calendarEventAttendeeService
      .getAll<CalendarEventAttendee>()
      // .toPromise()
      .subscribe((attendees) => {
        this.attendees = attendees;
      });
  }
  mapValues(meetingCalendarEvent: CalendarEvent) {
    meetingCalendarEvent.CalendarEventType = this.lookupValues.find(
      (lookupValue) =>
        lookupValue._id === meetingCalendarEvent?.CalendarEventTypeId
    );
    meetingCalendarEvent.EventAttendees = this.attendees.filter(
      (attendee) => attendee?.CalendarEventId === meetingCalendarEvent?._id
    );
    meetingCalendarEvent.createdBy = this.users.find(
      (user) => user._id === meetingCalendarEvent?.CreatedBy
    );
    meetingCalendarEvent.modifiedBy = this.users.find(
      (user) => user._id === meetingCalendarEvent?.ModifiedBy
    );
    meetingCalendarEvent.CssClass =
      `${meetingCalendarEvent?.CalendarEventType?.CssClassCategory} ${meetingCalendarEvent?.CalendarEventType?.CssClass}`.trim();
    meetingCalendarEvent.Icon = meetingCalendarEvent?.CalendarEventType?.Icon;
    meetingCalendarEvent.IconTitle =
      meetingCalendarEvent?.CalendarEventType?.Value;
    return meetingCalendarEvent;
  }
}
