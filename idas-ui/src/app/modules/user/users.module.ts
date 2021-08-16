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

import { UserInboxComponent } from './components/user-inbox/user-inbox.component';
import { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserMeetingCalendarComponent } from './components/user-meeting-calendar/user-meeting-calendar.component';
import { SharedModulesModule } from '../_shared/shared-modules.module';
import { UsersComponent } from './users.component';
import { InboxService } from './components/user-inbox/services/inbox.service';
import { NotificationsService } from './components/user-notifications/services/notifications.service';
import { MeetingCalendarService } from './components/user-meeting-calendar/services/meeting-calendar.service';
import { UsersService } from './services/users.service';
import { SharedModule } from 'app/shared/shared.module';
import { CalendarModule } from 'app/shared/components/calendar/calendar.module';

export { UserInboxComponent } from './components/user-inbox/user-inbox.component';
export { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
export { UserProfileComponent } from './components/user-profile/user-profile.component';
export { UserMeetingCalendarComponent } from './components/user-meeting-calendar/user-meeting-calendar.component';
export { UsersComponent } from './users.component';

export { UserInboxConfiguration } from './components/user-inbox/user-inbox-configuration';
export { UserNotificationsConfiguration } from './components/user-notifications/user-notifications-configuration';
export { UserProfileConfiguration } from './components/user-profile/user-profile-configuration';
export { UserCalendarEventConfiguration } from './components/user-meeting-calendar/user-meeting-calendar-configuration';
export { UsersConfiguration } from './users-configuration';

export { InboxService } from './components/user-inbox/services/inbox.service';
export { NotificationsService } from './components/user-notifications/services/notifications.service';
export { MeetingCalendarService } from './components/user-meeting-calendar/services/meeting-calendar.service';
export { UsersService } from './services/users.service';

@NgModule({
  imports: [
    CommonModule,
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
    SharedModulesModule,
    SharedModule,
    CalendarModule
  ],
  declarations: [
    UserInboxComponent,
    UserNotificationsComponent,
    UserProfileComponent,
    UserMeetingCalendarComponent,
    UsersComponent,
  ],
  providers: [
    UsersService,
    NotificationsService,
    InboxService,
    MeetingCalendarService
  ],
})
export class UsersModule {}
