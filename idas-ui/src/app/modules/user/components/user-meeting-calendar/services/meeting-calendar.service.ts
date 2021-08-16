import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersService } from 'app/modules/user/services/users.service';
import {
  AuthenticationService,
  DataService,
  LookupValue,
  LookupValueService,
  CalendarEvent,
  User,
} from 'app/shared/shared.module';
import { UserCalendarEventConfiguration } from '../user-meeting-calendar-configuration';

@Injectable({
  providedIn: 'root',
})
export class MeetingCalendarService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public usersService: UsersService
  ) {
    super(httpClient, authenticationService);
    this.entityName = UserCalendarEventConfiguration.identifier;
    this.lookupValueService.getAll<LookupValue>().subscribe((lookupValues) => {
      this.lookupValues = lookupValues;
    });
    this.usersService.getAll<User>().subscribe((users) => {
      this.users = users;
    });
  }
  mapValues(meetingCalendarEvent: CalendarEvent) {
    meetingCalendarEvent.CalendarEventType = this.lookupValues.find(
      (lookupValue) => lookupValue._id === meetingCalendarEvent?.CalendarEventTypeId
    );
    meetingCalendarEvent.EventAttendee = this.users.find(
      (user) => user._id === meetingCalendarEvent?.EventAttendeeId
    );
    meetingCalendarEvent.createdBy = this.users.find(
      (user) => user._id === meetingCalendarEvent?.CreatedBy
    );
    meetingCalendarEvent.modifiedBy = this.users.find(
      (user) => user._id === meetingCalendarEvent?.ModifiedBy
    );
    meetingCalendarEvent.CssClass = `${meetingCalendarEvent.CalendarEventType.CssClassCategory} ${meetingCalendarEvent.CalendarEventType.CssClass}`.trim();
    return meetingCalendarEvent;
  }
}
