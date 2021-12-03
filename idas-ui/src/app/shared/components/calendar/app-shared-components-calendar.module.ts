import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { CalendarConfiguration } from './shared/calendar-configuration/calendar-configuration';
import { ViewByOption } from './shared/calendar-interfaces/view-by-option';
import { ViewNavOption } from './shared/calendar-interfaces/view-nav-option';
import { CalendarService } from './shared/calendar-service/calendar.service';
import { CalendarViewByComponent } from './shared/components/calendar-view-by/calendar-view-by.component';
import { CalendarToolbarComponent } from './shared/calendar-toolbar/calendar-toolbar.component';
import { CalendarViewByMonthComponent } from './calendar-view-by-month/calendar-view-by-month.component';
import { CalendarViewByWeekComponent } from './calendar-view-by-week/calendar-view-by-week.component';
import { CalendarViewByWorkWeekComponent } from './calendar-view-by-work-week/calendar-view-by-work-week.component';
import { CalendarViewByDayComponent } from './calendar-view-by-day/calendar-view-by-day.component';
import { ChunkPipe } from './shared/pipes/chunk.pipe';

export { CalendarConfiguration } from './shared/calendar-configuration/calendar-configuration';
export { ViewByOption } from './shared/calendar-interfaces/view-by-option';
export { ViewNavOption } from './shared/calendar-interfaces/view-nav-option';
export { CalendarService } from './shared/calendar-service/calendar.service';
export { CalendarToolbarComponent } from './shared/calendar-toolbar/calendar-toolbar.component';
export { CalendarViewByComponent } from './shared/components/calendar-view-by/calendar-view-by.component';
export { CalendarViewByMonthComponent } from './calendar-view-by-month/calendar-view-by-month.component';
export { CalendarViewByWeekComponent } from './calendar-view-by-week/calendar-view-by-week.component';
export { CalendarViewByWorkWeekComponent } from './calendar-view-by-work-week/calendar-view-by-work-week.component';
export { CalendarViewByDayComponent } from './calendar-view-by-day/calendar-view-by-day.component';
export { ChunkPipe } from './shared/pipes/chunk.pipe';

@NgModule({
  imports: [CommonModule, MatMenuModule],
  declarations: [
    CalendarToolbarComponent,
    CalendarViewByComponent,
    CalendarViewByMonthComponent,
    CalendarViewByWeekComponent,
    CalendarViewByWorkWeekComponent,
    CalendarViewByDayComponent,
    ChunkPipe
  ],
  exports: [
    CalendarToolbarComponent,
    CalendarViewByComponent,
    CalendarViewByMonthComponent,
    CalendarViewByWeekComponent,
    CalendarViewByWorkWeekComponent,
    CalendarViewByDayComponent,
    ChunkPipe
  ],
  providers: [ChunkPipe, DatePipe, CalendarService],
})
export class AppSharedComponentsCalendarModule {}
