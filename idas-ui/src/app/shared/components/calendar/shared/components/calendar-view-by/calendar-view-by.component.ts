import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() calendarEvents: CalendarEvent[] = [];
  @Output() newCalendarEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() editCalendarEvent: EventEmitter<any> = new EventEmitter<any>();
  monthNames = CalendarConfiguration.monthNames;
  weekDays = CalendarConfiguration.weekDays;
  operatingHours = CalendarConfiguration.operatingHours;
  dayMenuNavOptions = CalendarConfiguration.dayMenuNavOptions;
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
  getCalendarEventsByDateTime(
    date: Date,
    operatingHour: string
  ): CalendarEvent[] {
    const operatingHourParts = (operatingHour || `08:00`).split(':');
    const useOperatingHour = {
      hour: Number(operatingHourParts[0]),
      minute: Number(operatingHourParts[1]),
    };
    return this.getCalendarEventsByDate(date).filter(
      (ce) =>
        ce &&
        ce.StartDate &&
        new Date(ce.StartDate).getHours() - 2 === useOperatingHour.hour
    );
  }
  getCalendarEventsByDate(date: Date): CalendarEvent[] {
    if (GeneralUtils.hasItems(this.calendarEvents)) {
      return this.calendarEvents.filter(
        (ce) =>
          ce &&
          ce.StartDate &&
          new Date(ce.StartDate).getFullYear() === date.getFullYear() &&
          new Date(ce.StartDate).getMonth() === date.getMonth() &&
          new Date(ce.StartDate).getDate() === date.getDate()
      );
    }
    return [];
  }
  onClickShowMore(date: Date, name: string = `Week`): void {
    this.calendarService.setViewDate(date);
    this.calendarService.setViewByOption(
      CalendarConfiguration.viewByOptions.find((vbo) => vbo.name === name)
    );
  }
  onClickCalendarDayMenu(name: string, date: Date): void {
    switch (name) {
      case `Week`:
      case `Work Week`:
      case `Day`:
        this.onClickShowMore(date, name);
        break;
        case `New Event`: this.onClickNewCalendarEvent(date);
    }
  }
  onClickNewCalendarEvent(date: Date) {
    this.newCalendarEvent.emit(date);
  }
  onButtonClickEditCalendarEvent(event: CalendarEvent) {
    this.editCalendarEvent.emit(event);
  }
}
