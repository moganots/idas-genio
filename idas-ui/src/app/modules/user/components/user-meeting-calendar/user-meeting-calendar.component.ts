import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import {
  PageComponent,
  ReferenceValueService,
} from 'app/modules/_shared/app-modules-shared.module';
import { CalendarEventConfiguration } from './services/meeting-calendar-service/calendar-event-configuration';
import {
  AlertifyService,
  AuthenticationService,
  LookupValueService,
  CalendarEvent,
  CalendarEventAttendee,
  LookupValue,
  User,
} from 'app/shared/app-shared.module';
import { CalendarService } from 'app/shared/components/calendar/app-shared-components-calendar.module';
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
    CalendarService,
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
  eventAttendee: CalendarEventAttendee;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public formBuilder: FormBuilder,
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
      formBuilder,
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
    this.dataSourceColumns = CalendarEventConfiguration.dataColumns;
  }
  ngOnInit() {
    this.onLoadRefreshData();
  }
  onLoadRefreshData() {
    this.calendarEvents = [];
    this.lookupValueService
      .getAll<LookupValue>()
      .toPromise()
      .then((lookupValues) => {
        this.meetingCalendarAttendeeService
          .getBy<CalendarEventAttendee>({
            AttendeeId: this.currentUser?._id,
          })
          .toPromise()
          .then((attendeeEvents) => {
            this.meetingCalendarService
              .getAll<CalendarEvent>()
              .toPromise()
              .then((calendarEvents) => {
                this.calendarEvents = calendarEvents.filter((ce) => attendeeEvents
                  .map((attendeeEvent) => attendeeEvent.CalendarEventId)
                  .includes(ce._id)
                );
              });
          });
        this.calendarEvents.forEach((calendarEvent) => {
          calendarEvent.CalendarEventType = lookupValues?.find(
            (lv) => lv._id === calendarEvent.CalendarEventTypeId
          );
        });
      });
  }
  onClickCreateNewCalendarEvent(date: Date): void {
    this.openDialog(
      `Create`,
      this.getDefaultCalendarEvent(undefined, undefined, date)
    );
  }
  onClickCreateEditCalendarEvent(event: CalendarEvent): void {
    this.openDialog(`Edit`, event);
  }
  openDialog(eventAction: string, event: CalendarEvent) {
    super.openDialog(
      DialogCreateEditCalendarEventComponent,
      {
        action: eventAction,
        dataService: this.dataService,
        entityName: this.entityName,
        pageIcon: this.pageIcon,
        pageName: this.pageName,
        pageTitle: this.pageTitle,
        pageSubTitle: event.Title,
        dataColumns: this.dataSourceColumns,
        selectedElement: event,
        selectedElementIndex: -1,
      },
      () => {
        this.onDataRefresh();
      },
      '96vh',
      '45vw'
    );
  }
  getDefaultCalendarEvent(
    calendarEventTypeId?: number,
    title?: string,
    startDate?: Date,
    endDate?: Date,
    isAllDayEvent?: boolean,
    location?: string,
    description?: string
  ): CalendarEvent {
    return {
      CalendarEventTypeId: calendarEventTypeId,
      Title: title,
      StartDate: startDate || new Date(),
      EndDate: endDate || startDate || new Date(),
      IsAllDayEvent: isAllDayEvent,
      Location: location,
      Description: description,
      CreatedBy: this.currentUser?._id,
      EventAttendees: ([] = []),
      Files: ([] = []),
    } as unknown as CalendarEvent;
  }
}
