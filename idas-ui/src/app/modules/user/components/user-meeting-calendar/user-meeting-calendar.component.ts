import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/shared-modules.module';
import { UserMeetingCalendarConfiguration } from './user-meeting-calendar-configuration';
import { MeetingCalendarService } from './services/meeting-calendar.service';
import {
  AlertifyService,
  AuthenticationService,
  LookupValue,
  LookupValueService,
  MeetingCalendar,
  User,
} from 'app/shared/shared.module';
import { Router } from '@angular/router';

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
  calendarEvents: MeetingCalendar[] = [];
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public meetingCalendarService: MeetingCalendarService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService
    );
    this.pageIcon = UserMeetingCalendarConfiguration.pageIcon;
    this.pageTitle = UserMeetingCalendarConfiguration.pageTitle;
    this.pageName = UserMeetingCalendarConfiguration.pageName;
    this.dataService = meetingCalendarService;
    this.entityName = UserMeetingCalendarConfiguration.identifier;
    this.sourceDataColumns = UserMeetingCalendarConfiguration.dataColumns;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.loadCurrentUsercalendarEvents();
  }
  private loadCurrentUsercalendarEvents() {
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.referenceValueService.usersService
          .getAll<User>()
          .toPromise()
          .then((users) => {
            this.meetingCalendarService
              .getBy<MeetingCalendar>({
                MeetingAttendeeId: this.currentUser._id,
              })
              .toPromise()
              .then((meetingCalendarEvents) => {
                meetingCalendarEvents.forEach((meetingCalendarEvent) => {
                  this.mapMeetingCalendarValues(
                    meetingCalendarEvent,
                    lookupValues,
                    users
                  );
                });
                this.calendarEvents = meetingCalendarEvents;
              });
          });
      });
  }

  mapMeetingCalendarValues(
    meetingCalendarEvent: MeetingCalendar,
    lookupValues: LookupValue[] = [],
    users: User[] = []
  ) {
    meetingCalendarEvent.MeetingType = lookupValues.find(
      (lookupValue) => lookupValue._id === meetingCalendarEvent?.MeetingTypeId
    );
    meetingCalendarEvent.MeetingAttendee = users.find(
      (user) => user._id === meetingCalendarEvent?.MeetingAttendeeId
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
