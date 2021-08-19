import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/shared-modules.module';
import { CalendarEventConfiguration } from './services/meeting-calendar-service/calendar-event-configuration';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
  CalendarEvent,
  CalendarEventAttendee,
} from 'app/shared/shared.module';
import { Router } from '@angular/router';
import { CalendarService } from 'app/shared/components/calendar/calendar.module';
import { DialogCreateEditCalendarEventComponent } from './components/dialog-create-edit-calendar-event/dialog-create-edit-calendar-event.component';
import { MeetingCalendarService } from './services/meeting-calendar-service/meeting-calendar.service';
import { MeetingCalendarAttendeeService } from './services/meeting-calendar-attendee/meeting-calendar-attendee.service';

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
    MeetingCalendarAttendeeService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {} },
  ],
})
export class UserMeetingCalendarComponent
  extends PageComponent
  implements OnInit, AfterViewInit
{
  calendarEvents: CalendarEvent[];
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public meetingCalendarAttendeeService: MeetingCalendarAttendeeService,
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
    this.pageIcon = CalendarEventConfiguration.pageIcon;
    this.pageTitle = CalendarEventConfiguration.pageTitle;
    this.pageName = CalendarEventConfiguration.pageName;
    this.dataService = meetingCalendarService;
    this.entityName = CalendarEventConfiguration.identifier;
    this.sourceDataColumns = CalendarEventConfiguration.dataColumns;
    this.calendarEvents = [];
    this.meetingCalendarService.getAll<CalendarEvent>().subscribe(events => {
      console.log(events)
      events.map(event => ({CalendarEventId: event._id, AttendeeId: this.currentUser._id})).forEach(ce => console.log(ce));
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {}
  onClickCreateNewCalendarEvent(date: Date): void {
    super.openDialog(
      DialogCreateEditCalendarEventComponent,
      {
        action: `Create`,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: this.pageName,
        pageTitle: this.pageTitle,
        dataColumns: this.sourceDataColumns,
        selected: { StartDate: date },
        selectedIndex: -1,
      },
      () => {
        this.onDataRefresh();
      }
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
