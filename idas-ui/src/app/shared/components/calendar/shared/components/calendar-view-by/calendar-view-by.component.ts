import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from 'app/shared/domain-models/scheduling/calendar-event';
import { ChunkPipe } from 'app/shared/utilities/chunk.pipe';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { CalendarConfiguration } from '../../calendar-configuration/calendar-configuration';
import { CalendarService } from '../../calendar-service/calendar.service';

@Component({
  selector: 'app-calendar-view-by',
  templateUrl: './calendar-view-by.component.html',
  styleUrls: ['./calendar-view-by.component.scss'],
})
export class CalendarViewByComponent implements OnInit {
  @Input() calendarEvents: CalendarEvent[];
  monthNames = CalendarConfiguration.monthNames;
  weekDays = CalendarConfiguration.weekDays;
  operatingHours = CalendarConfiguration.operatingHours;
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
      ? `${this.numberOfEvents(date)} event(s) happening today`
      : ``;
  }
  numberOfEvents(date: Date): number {
    return this.getCalendarEventsByDate(date).length;
  }
  getCalendarEventsByDate(date: Date): CalendarEvent[] {
    const datesEvents = (this.calendarEvents || []).filter(
      (vce) =>
        vce?.StartDate?.getFullYear() === date?.getFullYear() &&
        vce?.StartDate?.getMonth() === date?.getMonth() &&
        vce?.StartDate?.getDate() === date?.getDate()
    );
    return datesEvents;
  }
  onClickShowMore(date: Date): void {
    this.calendarService.setViewDate(date);
    this.calendarService.setViewByOption(CalendarConfiguration.viewByOptions.find(vbo => vbo.name === `Week`));
  }
  getCalendarEventsByTime(date: Date, operatingHour: string): CalendarEvent[] {
    const hour = Number(
      GeneralUtils.getFirstItem((operatingHour || ``).split(':'))
    );
    const minute = Number(
      GeneralUtils.getLastItem((operatingHour || ``).split(':'))
    );
    const datesEvents = this.getCalendarEventsByDate(date);
    return datesEvents.filter(
      (ce) =>
        ce?.StartDate?.getHours() === hour ||
        ce?.StartDate?.getMinutes() === minute
    );
  }
}
