import { DatePipe, WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { CalendarDay } from 'app/shared/domain-models/scheduling/calendar-day';
import { CalendarEvent } from 'app/shared/shared.module';
import { DateUtils } from 'app/shared/utilities/date-utils';
import { PreviousOrNext } from 'app/shared/utilities/enum-previous-next';
import { BehaviorSubject } from 'rxjs';
import { CalendarConfiguration } from '../calendar-configuration/calendar-configuration';
import { ViewByOption } from '../calendar-interfaces/view-by-option';
import { ViewNavOption } from '../calendar-interfaces/view-nav-option';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private subjectViewNavOption: BehaviorSubject<ViewNavOption>;
  private subjectViewDate: BehaviorSubject<Date>;
  private subjectViewFirstDay: BehaviorSubject<Date>;
  private subjectViewLastDay: BehaviorSubject<Date>;
  private subjectViewDateAsString: BehaviorSubject<string>;
  private subjectViewByOption: BehaviorSubject<ViewByOption>;
  private subjectViewCalendarDays: BehaviorSubject<CalendarDay[]>;
  private subjectViewCalendarEvents: BehaviorSubject<CalendarEvent[]>;

  public get viewNavOption(): ViewNavOption {
    return (
      this.subjectViewNavOption || { value: this.getDefaultViewNavOption() }
    ).value;
  }
  public setViewNavOption(option: ViewNavOption): void {
    this.subjectViewNavOption.next(option || this.getDefaultViewNavOption());
    this.updateViewDate(option);
  }
  public get viewDate(): Date {
    return (this.subjectViewDate || { value: new Date() }).value;
  }
  public setViewDate(date: Date): void {
    this.subjectViewDate.next(date || new Date());
  }
  public get viewFirstDay(): Date {
    return (this.subjectViewFirstDay || { value: this.getViewFirstDay() })
      .value;
  }
  public get viewLastDay(): Date {
    return (this.subjectViewLastDay || { value: this.getViewLastDay() }).value;
  }
  public get viewDateAsString(): string {
    return (
      this.subjectViewDateAsString || {
        value: this.getDefaultViewDateAsString(),
      }
    ).value;
  }
  public get viewByOption(): ViewByOption {
    return (
      this.subjectViewByOption || { value: this.getDefaultViewByOption() }
    ).value;
  }
  public setViewByOption(option: ViewByOption): void {
    this.subjectViewByOption.next(option || this.getDefaultViewByOption());
    this.updateViewDateAsString();
  }
  public get viewCalendarDays(): CalendarDay[] {
    return (
      this.subjectViewCalendarDays || {
        value: this.getViewCalendarDays()
      }
    ).value;
  }
  public get viewCalendarEvents(): CalendarEvent[] {
    return (
      this.subjectViewCalendarEvents || {
        value: []
      }
    ).value;
  }
  public setViewCalendarEvents(calendarEvents: CalendarEvent[]): void {
    this.subjectViewCalendarEvents.next(calendarEvents || []);
  }

  constructor(public datepipe: DatePipe) {
    this.subjectViewNavOption = new BehaviorSubject<ViewNavOption>(
      this.getDefaultViewNavOption()
    );
    this.subjectViewDate = new BehaviorSubject<Date>(new Date());
    this.subjectViewDateAsString = new BehaviorSubject<string>(
      this.getDefaultViewDateAsString()
    );
    this.subjectViewByOption = new BehaviorSubject<ViewByOption>(
      this.getDefaultViewByOption()
    );
    this.subjectViewCalendarDays = new BehaviorSubject<CalendarDay[]>(
      this.getViewCalendarDays()
    );
    this.subjectViewCalendarEvents = new BehaviorSubject<CalendarEvent[]>([]
    );
  }
  private getDefaultViewNavOption(): ViewNavOption {
    return CalendarConfiguration.viewNavOptions.find((vno) => vno.active);
  }
  private updateViewDate(option: ViewNavOption): void {
    switch (option.name) {
      case `Previous`:
        this.updateViewDateUsingViewNavAndViewBy(-1);
        break;
      case `Today`:
        this.setViewDate(new Date());
        break;
      case `Next`:
        this.updateViewDateUsingViewNavAndViewBy(1);
        break;
    }
    this.updateViewDateAsString();
    this.updateViewCalendarDays();
  }
  updateViewDateUsingViewNavAndViewBy(value: number) {
    switch(this.viewByOption.name){
      case `Month`: this.setViewDate(new Date(this.viewDate.setMonth(this.viewDate.getMonth() + value))); break;
      case `Week`:
      case `Work Week`: this.setViewDate(new Date(this.viewDate.setDate(this.viewDate.getDate() + (value * 7)))); break;
      case `Day`: this.setViewDate(new Date(this.viewDate.setDate(this.viewDate.getDate() + value))); break;
    }
  }
  private getDefaultViewDateAsString(): string {
    return this.datepipe.transform(this.viewDate, `MMMM, yyyy`);
  }
  private updateViewDateAsString(): void {
    switch (this.viewByOption.name) {
      case `Month`:
        this.getViewDateAsStringForMonth();
        break;
      case `Week`:
        this.getViewDateAsStringForWeek();
        break;
      case `Work Week`:
        this.getViewDateAsStringForWorkWeek();
        break;
      case `Day`:
        this.getViewDateAsStringForDay();
        break;
    }
    this.updateViewCalendarDays();
  }
  private updateViewCalendarDays(): void {
    this.subjectViewCalendarDays.next(this.getViewCalendarDays());
  }
  getViewFirstDay(): Date {
    switch (this.viewByOption.name) {
      case `Month`:
        return DateUtils.getFirst(
          DateUtils.getFirstDayOfMonth(this.viewDate),
          WeekDay.Sunday,
          PreviousOrNext.Previous
        );
      case `Week`:
        return DateUtils.getFirstDayOfWeek(this.viewDate, WeekDay.Sunday);
      case `Work Week`:
        return DateUtils.getFirstDayOfWorkWeek(this.viewDate);
      case `Day`:
      default:
        return this.viewDate;
    }
  }
  getViewLastDay(): Date {
    switch (this.viewByOption.name) {
      case `Month`:
        return DateUtils.getFirst(
          DateUtils.getLastDayOfMonth(this.viewDate),
          WeekDay.Saturday,
          PreviousOrNext.Next
        );
      case `Week`:
        return DateUtils.getLastDayOfWeek(this.viewDate, WeekDay.Saturday);
      case `Work Week`:
        return DateUtils.getLastDayOfWorkWeek(this.viewDate);
      case `Day`:
      default:
        return this.viewDate;
    }
  }
  private getViewDateAsStringForMonth(): void {
    this.subjectViewDateAsString.next(
      this.datepipe.transform(this.viewDate, `MMMM, yyyy`)
    );
  }
  private getViewDateAsStringForWeek(): void {
    const firstDay = DateUtils.getFirstDayOfWeek(this.viewDate, WeekDay.Sunday);
    const lastDay = DateUtils.getLastDayOfWeek(this.viewDate, WeekDay.Saturday);
    this.subjectViewDateAsString.next(
      `${this.datepipe.transform(
        firstDay,
        `MMM d`
      )} - ${this.datepipe.transform(lastDay, `mediumDate`)}`
    );
  }
  private getViewDateAsStringForWorkWeek(): void {
    const firstDay = DateUtils.getFirstDayOfWorkWeek(this.viewDate);
    const lastDay = DateUtils.getLastDayOfWorkWeek(this.viewDate);
    this.subjectViewDateAsString.next(
      `${this.datepipe.transform(
        firstDay,
        `MMM d`
      )} - ${this.datepipe.transform(lastDay, `mediumDate`)}`
    );
  }
  private getViewDateAsStringForDay(): void {
    this.subjectViewDateAsString.next(
      this.datepipe.transform(this.viewDate, `EEEE, MMMM d, y`)
    );
  }
  private getDefaultViewByOption(): ViewByOption {
    return CalendarConfiguration.viewByOptions.find((vbo) => vbo.active);
  }
  private getViewCalendarDays(): CalendarDay[] {
    return DateUtils.getDatesBetween(this.viewFirstDay, this.viewLastDay).map(
      (date) => new CalendarDay(date)
    );
  }
}
