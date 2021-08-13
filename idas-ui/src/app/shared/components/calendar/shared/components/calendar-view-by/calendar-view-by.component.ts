import { Component, Input, OnInit } from '@angular/core';
import { ChunkPipe, GeneralUtils, MeetingCalendar } from 'app/shared/shared.module';
import { CalendarService } from '../../calendar-service/calendar.service';
@Component({
  selector: 'app-calendar-view-by',
  templateUrl: './calendar-view-by.component.html',
  styleUrls: ['./calendar-view-by.component.scss'],
})
export class CalendarViewByComponent implements OnInit {
  @Input() calendarEvents: MeetingCalendar[];
  monthNames: string[] = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  weekDays: string[] = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  operatingHours: string[] = [
    `00:00`,
    `01:00`,
    `02:00`,
    `03:00`,
    `04:00`,
    `05:00`,
    `06:00`,
    `07:00`,
    `08:00`,
    `09:00`,
    `10:00`,
    `11:00`,
    `12:00`,
    `13:00`,
    `14:00`,
    `15:00`,
    `16:00`,
    `17:00`,
    `18:00`,
    `19:00`,
    `20:00`,
    `21:00`,
    `22:00`,
    `23:00`,
  ];
  today = new Date();
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  currentDay = new Date().getDate();
  constructor(
    public calendarService: CalendarService,
    public chunkpipe: ChunkPipe
  ) {}
  ngOnInit(): void {}
  hasEvents(date: Date): string {
    return this.getCalendarEventsByDate(date).length >= 1 ? 'inline' : 'none';
  }
  getEventsCountTitle(date: Date): string {
    return this.getCalendarEventsByDate(date).length >= 1
      ? `${this.numberOfEvents(date)} event(s)`
      : ``;
  }
  numberOfEvents(date: Date): number {
    return this.getCalendarEventsByDate(date).length;
  }
  getCalendarEventsByDate(date: Date): MeetingCalendar[] {
    const datesEvents = (this.calendarEvents || []).filter(
      (vce) =>
        vce.StartDate.getFullYear() === date.getFullYear() &&
        vce.StartDate.getMonth() === date.getMonth() &&
        vce.StartDate.getDate() === date.getDate()
    );
    return datesEvents;
  }
  getCalendarEventsByTime(date: Date, operatingHour: string): MeetingCalendar[] {
    const hour = Number(
      GeneralUtils.firstItem((operatingHour || ``).split(':'))
    );
    const minute = Number(
      GeneralUtils.lastItem((operatingHour || ``).split(':'))
    );
    return this.getCalendarEventsByDate(date).filter(
      (ce) =>
        ce.StartDate.getHours() === hour || ce.StartDate.getMinutes() === minute
    );
  }
}
