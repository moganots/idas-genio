import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BaseDialogComponent } from 'app/modules/_shared/components/dialogs/base-dialog/base-dialog.component';
import {
  ReferenceValueService,
  SharedModulesModuleConfiguration,
} from 'app/modules/_shared/shared-modules.module';
import { CalendarConfiguration } from 'app/shared/components/calendar/calendar.module';
import {
  AlertifyService,
  AuthenticationService,
  CalendarEventAttendee,
  FileAttachment,
  FileAttachmentService,
  LookupValueService,
  User,
} from 'app/shared/shared.module';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MeetingCalendarAttendeeService } from '../../services/meeting-calendar-attendee/meeting-calendar-attendee.service';
import { CalendarEventConfiguration } from '../../services/meeting-calendar-service/calendar-event-configuration';
import { MeetingCalendarService } from '../../services/meeting-calendar-service/meeting-calendar.service';

@Component({
  selector: 'app-dialog-create-edit-calendar-event',
  templateUrl: './dialog-create-edit-calendar-event.component.html',
  styleUrls: ['./dialog-create-edit-calendar-event.component.scss'],
})
export class DialogCreateEditCalendarEventComponent
  extends BaseDialogComponent
  implements OnInit, AfterViewInit
{
  calendarEventScheduleTimes: any[];
  eventAttendeeResponses = CalendarConfiguration.eventAttendeeResponses;
  frmCtrlEventAttendees: FormControl = new FormControl();
  filteredEventAttendees: Observable<any[]>;
  users: User[] = [];
  currentEventAttendee: CalendarEventAttendee;
  newEventAttendee: User;
  constructor(
    public router: Router,
    public matDialog: MatDialog,
    public alertifyService: AlertifyService,
    public authenticationService: AuthenticationService,
    public lookupValueService: LookupValueService,
    public referenceValueService: ReferenceValueService,
    public dialogRef: MatDialogRef<DialogCreateEditCalendarEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public frmBuilder: FormBuilder,
    public meetingCalendarAttendeeService: MeetingCalendarAttendeeService,
    public meetingCalendarService: MeetingCalendarService,
    public fileAttachmentService: FileAttachmentService
  ) {
    super(
      router,
      matDialog,
      alertifyService,
      authenticationService,
      lookupValueService,
      referenceValueService,
      dialogRef,
      data,
      frmBuilder
    );
    this.pageTitle = `${this.capitalizeFirstLetter(
      this.action
    )} ${this.entityName
      .split(`-`)
      .map((en) => this.capitalizeFirstLetter(en))
      .join(` `)}`;
    this.sourceDataColumns = CalendarEventConfiguration.dataColumns;
    this.calendarEventScheduleTimes =
      SharedModulesModuleConfiguration.scheduleTimes.map((time, index) => ({
        id: index,
        value: time,
        displayValue: time,
      }));
      this.selected.StartDateTime = this.getTimeValue(`StartDateTime`);
      this.selected.EndDateTime = this.getTimeValue(`EndDateTime`);
      console.log(this.selected)
  }
  ngOnInit() {
    this.setDataSourceColumns();
    this.initFormGroupAndFields(null);
    this.frmGroup = this.frmBuilder.group({
      frmFields: this.frmGroupFields,
    });
    this.referenceValueService.usersService
      .getAll<User>()
      .toPromise()
      .then((users) => {
        this.users = users;
      });
    this.filteredEventAttendees = this.frmCtrlEventAttendees.valueChanges.pipe(
      startWith(''),
      map((value) => this.filterByValue(value))
    );
    this.meetingCalendarAttendeeService
      .getBy<CalendarEventAttendee>({ CalendarEventId: this.selected?._id })
      .toPromise()
      .then((eventAttendees) => {
        this.selected.EventAttendees = eventAttendees;
        this.currentEventAttendee = eventAttendees.find(
          (ea) => ea?.AttendeeId === this.currentUser?._id
        );
      });
    this.fileAttachmentService
      .getBy<FileAttachment>({ CalendarEventId: this.selected?._id })
      .toPromise()
      .then((files) => {
        this.selected.Files = files;
      });
  }
  ngAfterViewInit() {}
  onClickEventAttendeResponse(option): void {}
  onValueChanged(event) {
    if (event && event.source && event.source.value) {
      this.newEventAttendee = event?.source?.value;
      super.onValueChanged(event);
    } else {
      this.newEventAttendee = undefined;
    }
  }
  onSelectedValueChanged(event) {
    if (event && event.source && event.source.value) {
      this.newEventAttendee = event?.source?.value;
      super.onSelectedValueChanged(event);
    } else {
      this.newEventAttendee = undefined;
    }
  }
  onClickEventAttendeeAdd(): void {
    console.log(this.frmGroup.controls);
    this.newEventAttendee = undefined;
  }
  onClickEventAttendeeRemove(
    eventAttendee: CalendarEventAttendee,
    index?: number
  ) {}
  filterByValue(value: any): any {
    value = String(value || '').toLocaleLowerCase();
    const filteredValues = this.users.filter(
      (user) =>
        String(user?._id).includes(value) ||
        String(user?.DisplayName || '')
          .toLocaleLowerCase()
          .includes(value)
    );
    return filteredValues || ['No option value(s)'];
  }
}
