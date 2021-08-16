import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from 'app/shared/domain-models/scheduling/calendar-event';
import { GeneralUtils } from 'app/shared/utilities/general-utils';
import { CalendarConfiguration } from '../../calendar-configuration/calendar-configuration';
import { CalendarService } from '../../calendar-service/calendar.service';

@Component({
  selector: 'app-calendar-view-by',
  templateUrl: './calendar-view-by.component.html',
  styleUrls: ['./calendar-view-by.component.scss'],
})
export class CalendarViewByComponent implements OnInit {
  monthNames = CalendarConfiguration.monthNames;
  weekDays = CalendarConfiguration.weekDays;
  operatingHours = CalendarConfiguration.operatingHours;
  constructor(public calendarService: CalendarService) {}
  ngOnInit(): void {}
  showEvents(date: Date): string {
    return this.getCalendarEventsByDate(date).length >= 1 ? 'inline' : 'none';
  }
  numberOfEvents(date: Date): number {
    return this.getCalendarEventsByDate(date).length;
  }
  getEventsCountTitle(date: Date): string {
    return this.getCalendarEventsByDate(date).length >= 1
      ? `${this.numberOfEvents(date)} event(s) happening today`
      : ``;
  }
  getFirst3CalendarEventsByDate(date: Date): CalendarEvent[] {
    return (this.getCalendarEventsByDate(date) || []).slice(0, 3);
  }
  getCalendarEventsByTime(date: Date, operatingHour: string): CalendarEvent[] {
    if (!GeneralUtils.isObjectSet(date)) return [];
    const hour = Number(
      GeneralUtils.getFirstItem((operatingHour || ``).split(':'))
    );
    const minute = Number(
      GeneralUtils.getLastItem((operatingHour || ``).split(':'))
    );
    const datesEvents = this.getCalendarEventsByDate(date);
    return datesEvents.filter(
      (ce) =>
      ce &&
      ce.StartDate &&
      (new Date(ce.StartDate)).getHours() === hour ||
      (new Date(ce.StartDate)).getMinutes() === minute
    );
  }
  getCalendarEventsByDate(date: Date): CalendarEvent[] {
    if (GeneralUtils.hasItems(this.calendarService.viewCalendarEvents)) {
      return this.calendarService.viewCalendarEvents.filter(
        (ce) =>
          ce &&
          ce.StartDate &&
          (new Date(ce.StartDate)).getFullYear() === date.getFullYear() &&
          (new Date(ce.StartDate)).getMonth() === date.getMonth() &&
          (new Date(ce.StartDate)).getDate() === date.getDate()
      );
    }
    return [];
  }
  onClickShowMore(date: Date): void {
    this.calendarService.setViewDate(date);
    this.calendarService.setViewByOption(
      CalendarConfiguration.viewByOptions.find((vbo) => vbo.name === `Week`)
    );
  }
}
