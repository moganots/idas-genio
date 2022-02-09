import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/modules/user/services/user.service';
import { AuthenticationService, CalendarEventAttendee, DataService, User } from 'app/shared/app-shared.module';
import { CalendarEventAttendeeConfiguration } from './calendar-event-attendee-configuration';

@Injectable({
  providedIn: 'root'
})
export class MeetingCalendarAttendeeService extends DataService {
  users: User[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) {
    super(httpClient, authenticationService);
    this.entityName = CalendarEventAttendeeConfiguration.identifier;
    this.dataColumns = CalendarEventAttendeeConfiguration.dataColumns;
    this.userService.getAll<User>().toPromise().then((users) => {
      this.users = users;
    });
  }
  mapValues(calendarEventAttendee: CalendarEventAttendee) {
    calendarEventAttendee.Attendee = this.users.find(user => user._id === calendarEventAttendee?.AttendeeId);
    calendarEventAttendee.createdBy = this.users.find(user => user._id === calendarEventAttendee?.CreatedBy);
    calendarEventAttendee.modifiedBy = this.users.find(user => user._id === calendarEventAttendee?.ModifiedBy);
    return calendarEventAttendee;
  }
}
