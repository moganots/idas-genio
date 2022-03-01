import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatRadioModule } from '@angular/material/radio';

import { AppModulesSharedModule } from '../_shared/app-modules-shared.module';
import { AppSharedModule } from 'app/shared/app-shared.module';

import { UserInboxComponent } from './components/user-inbox/user-inbox.component';
import { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserMeetingCalendarComponent } from './components/user-meeting-calendar/user-meeting-calendar.component';
import { UsersComponent } from './users.component';
import { InboxService } from './components/user-inbox/services/inbox.service';
import { NotificationsService } from './components/user-notifications/services/notifications.service';
import { AppSharedComponentsCalendarModule } from 'app/shared/components/calendar/app-shared-components-calendar.module';
import { DialogCreateEditCalendarEventComponent } from './components/user-meeting-calendar/components/dialog-create-edit-calendar-event/dialog-create-edit-calendar-event.component';
import { MeetingCalendarService } from './components/user-meeting-calendar/services/meeting-calendar-service/meeting-calendar.service';
import { MeetingCalendarAttendeeService } from './components/user-meeting-calendar/services/meeting-calendar-attendee/meeting-calendar-attendee.service';
import { UserService } from './services/user-service/user.service';
import { ContactDetailService } from './services/contact-detail-service/contact-detail.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

export { UserInboxComponent } from './components/user-inbox/user-inbox.component';
export { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
export { UserProfileComponent } from './components/user-profile/user-profile.component';
export { UserMeetingCalendarComponent } from './components/user-meeting-calendar/user-meeting-calendar.component';
export { UsersComponent } from './users.component';

export { UserInboxConfiguration } from './components/user-inbox/user-inbox-configuration';
export { UserNotificationsConfiguration } from './components/user-notifications/user-notifications-configuration';
export { UserProfileConfiguration } from './components/user-profile/user-profile-configuration';
export { CalendarEventConfiguration } from './components/user-meeting-calendar/services/meeting-calendar-service/calendar-event-configuration';
export { UserConfiguration } from './services/user-service/user-configuration';
export { CalendarEventAttendeeConfiguration } from './components/user-meeting-calendar/services/meeting-calendar-attendee/calendar-event-attendee-configuration';

export { UserService } from './services/user-service/user.service';
export { ContactDetailService } from './services/contact-detail-service/contact-detail.service';
export { InboxService } from './components/user-inbox/services/inbox.service';
export { NotificationsService } from './components/user-notifications/services/notifications.service';
export { MeetingCalendarService } from './components/user-meeting-calendar/services/meeting-calendar-service/meeting-calendar.service';
export { MeetingCalendarAttendeeService } from './components/user-meeting-calendar/services/meeting-calendar-attendee/meeting-calendar-attendee.service';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    MatRadioModule,
    MatMenuModule,
    AppModulesSharedModule,
    AppSharedModule,
    AppSharedComponentsCalendarModule,
  ],
  declarations: [
    UserInboxComponent,
    UserNotificationsComponent,
    UserProfileComponent,
    UserMeetingCalendarComponent,
    UsersComponent,
    DialogCreateEditCalendarEventComponent,
  ],
  providers: [
    UserService,
    NotificationsService,
    InboxService,
    MeetingCalendarService,
    MeetingCalendarAttendeeService,
    ContactDetailService
  ],
})
export class AppModulesUsersModule {}
