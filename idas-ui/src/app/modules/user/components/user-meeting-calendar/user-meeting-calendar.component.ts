import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/shared-modules.module';
import { UserCalendarEventConfiguration } from './user-meeting-calendar-configuration';
import { MeetingCalendarService } from './services/meeting-calendar.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValue,
  LookupValueService,
  CalendarEvent,
  User,
} from 'app/shared/shared.module';
import { Router } from '@angular/router';
import { CalendarService } from 'app/shared/components/calendar/calendar.module';

@Component({
  selector: 'app-user-meeting-calendar',
  templateUrl: './user-meeting-calendar.component.html',
  styleUrls: ['./user-meeting-calendar.component.scss'],
  providers: [
    AlertifyService,
    AuthenticationService,
    LookupValueService,
    ReferenceValueService,
    MeetingCalendarService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class UserMeetingCalendarComponent
  extends PageComponent
  implements OnInit, AfterViewInit
{
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public meetingCalendarService: MeetingCalendarService,
    public calendarService: CalendarService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.pageIcon = UserCalendarEventConfiguration.pageIcon;
    this.pageTitle = UserCalendarEventConfiguration.pageTitle;
    this.pageName = UserCalendarEventConfiguration.pageName;
    this.dataService = meetingCalendarService;
    this.entityName = UserCalendarEventConfiguration.identifier;
    this.sourceDataColumns = UserCalendarEventConfiguration.dataColumns;
  }

  ngOnInit() {
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.referenceValueService.usersService
          .getAll<User>()
          .toPromise()
          .then((users) => {
            this.meetingCalendarService
              .getBy<CalendarEvent>({
                EventAttendeeId: this.currentUser._id,
              })
              .toPromise()
              .then((meetingCalendarEvents) => {
                meetingCalendarEvents.forEach((meetingCalendarEvent) => {
                  this.mapCalendarEventValues(
                    meetingCalendarEvent,
                    lookupValues,
                    users
                  );
                });
                this.calendarService.setViewCalendarEvents(meetingCalendarEvents);
              });
          });
      });
  }
  ngAfterViewInit() {}
  private loadCurrentUsercalendarEvents() {
  }
  mapCalendarEventValues(
    meetingCalendarEvent: CalendarEvent,
    lookupValues: LookupValue[] = [],
    users: User[] = []
  ) {
    meetingCalendarEvent.CalendarEventType = lookupValues.find(
      (lookupValue) =>
        lookupValue._id === meetingCalendarEvent?.CalendarEventTypeId
    );
    meetingCalendarEvent.EventAttendee = users.find(
      (user) => user._id === meetingCalendarEvent?.EventAttendeeId
    );
    meetingCalendarEvent.createdBy = users.find(
      (user) => user._id === meetingCalendarEvent?.CreatedBy
    );
    meetingCalendarEvent.modifiedBy = users.find(
      (user) => user._id === meetingCalendarEvent?.ModifiedBy
    );
  }
  /* getCalendarViewEvents() {
    const events =  this.calendarEvents.filter(
      (mce) =>
        (new Date(mce.start)).getFullYear() === this.viewDate.getFullYear() &&
        (new Date(mce.start)).getMonth() === this.viewDate.getMonth()
    );
    return events;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.calendarEvents = this.calendarEvents.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.calendarEvents = [
      ...this.calendarEvents,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: null,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.calendarEvents = this.calendarEvents.filter(
      (event) => event !== eventToDelete
    );
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  } */
}
