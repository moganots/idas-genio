import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersService } from 'app/modules/user/services/users.service';
import { AuthenticationService, CalendarEventAttendee, DataService, LookupValue, LookupValueService, User } from 'app/shared/shared.module';
import { CalendarEventAttendeeConfiguration } from './calendar-event-attendee-configuration';

@Injectable({
  providedIn: 'root'
})
export class MeetingCalendarAttendeeService extends DataService {
  lookupValues: LookupValue[] = [];
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public usersService: UsersService
  ) {
    super(httpClient, authenticationService);
    this.entityName = CalendarEventAttendeeConfiguration.identifier;
    this.usersService.getAll<User>().toPromise().then((users) => {
      this.users = users;
    });
  }
  mapValues(calendarEventAttendee: CalendarEventAttendee) {
    calendarEventAttendee.Attendee = this.users.find(user => user._id === calendarEventAttendee?.AttendeeId);
  }
}