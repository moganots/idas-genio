import { WeekDay } from '@angular/common';
import { PreviousOrNext } from './enum-previous-next';
import { GeneralUtils } from './general-utils';
export class DateUtils {
  public static DateParts = () => {
    const date = new Date();
    return {
      year: date.getFullYear(),
      month: GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      day: GeneralUtils.appendLeadingZero(date.getDate()),
      hour: GeneralUtils.appendLeadingZero(date.getHours()),
      minutes: GeneralUtils.appendLeadingZero(date.getMinutes()),
      seconds: GeneralUtils.appendLeadingZero(date.getSeconds()),
      ms: GeneralUtils.padRight(
        GeneralUtils.padLeft(date.getMilliseconds(), '000'),
        '000'
      ),
      dow: date.getDay(),
    };
  }
  public static yyyymmdd = () => {
    const dp = DateUtils.DateParts();
    return `${dp.year}${dp.month}${dp.day}`.trim();
  }
  public static yyyymmddDashSeparator = () => {
    const dp = DateUtils.DateParts();
    return [dp.year, dp.month, dp.day].join('-').trim();
  }
  public static yyyymmddDotSeparator = () => {
    const dp = DateUtils.DateParts();
    return [dp.year, dp.month, dp.day].join('.').trim();
  }
  public static hms = () => {
    const dp = DateUtils.DateParts();
    return [dp.hour, dp.minutes, dp.seconds].join(':').trim();
  }
  public static Thms = () => {
    return `T${DateUtils.hms()}`.trim();
  }
  public static ThmsZ0200 = () => {
    return `${DateUtils.Thms()}+0200`.trim();
  }
  public static hmsms = () => {
    const dp = DateUtils.DateParts();
    return [[dp.hour, dp.minutes, dp.seconds].join(':').trim(), dp.ms]
      .join('.')
      .trim();
  }
  public static Thmsms = () => {
    return `T${DateUtils.hmsms()}`.trim();
  }
  public static ThmsmsZ0200 = () => {
    return `${DateUtils.Thmsms()}+0200`.trim();
  }
  public static yyyymmddhms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.hms()].join(' ').trim();
  }
  public static yyyymmddhmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.hms()]
      .join(' ')
      .trim();
  }
  public static yyyymmddhmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.hms()]
      .join(' ')
      .trim();
  }
  public static yyyymmddhmsms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.hmsms()].join(' ').trim();
  }
  public static yyyymmddhmsmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.hmsms()]
      .join(' ')
      .trim();
  }
  public static yyyymmddhmsmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.hmsms()]
      .join(' ')
      .trim();
  }
  public static yyyymmddThms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.Thms()].join('').trim();
  }
  public static yyyymmddThmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.Thms()]
      .join('')
      .trim();
  }
  public static yyyymmddThmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.Thms()]
      .join('')
      .trim();
  }
  public static yyyymmddThmsms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.Thmsms()].join('').trim();
  }
  public static yyyymmddThmsmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.Thmsms()]
      .join('')
      .trim();
  }
  public static yyyymmddThmsmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.Thmsms()]
      .join('')
      .trim();
  }
  public static yyyymmddThmsZ0200 = () => {
    return [DateUtils.yyyymmdd(), DateUtils.ThmsZ0200()].join('').trim();
  }
  public static yyyymmddThmsZDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.ThmsZ0200()]
      .join('')
      .trim();
  }
  public static yyyymmddThmsZDotSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.ThmsZ0200()]
      .join('')
      .trim();
  }
  public static yyyymmddThmsmsZ0200 = () => {
    return [DateUtils.yyyymmdd(), DateUtils.ThmsmsZ0200()].join('').trim();
  }
  public static yyyymmddThmsmsZDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.ThmsmsZ0200()]
      .join('')
      .trim();
  }
  public static yyyymmddThmsmsZDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.ThmsmsZ0200()]
      .join('')
      .trim();
  }
  public static dateDiffInDays(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60 / 60 / 24;
  }
  public static dateDiffInHours(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60 / 60;
  }
  public static dateDiffInMinutes(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60;
  }
  public static dateDiffInSeconds(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000;
  }
  public static startOfWeek = (date) => {
    const nDate = new Date(date);
    const diff =
      nDate.getDate() - nDate.getDay() + (nDate.getDay() === 0 ? -6 : 1);
    return new Date(nDate.setDate(diff));
  }
  public static endOfWeek = (date) => {
    return new Date(DateUtils.addDays(DateUtils.startOfWeek(date), 6));
  }
  public static addYears(date: Date, years: number): Date {
    return new Date(date.setDate(date.getFullYear() + years));
  }
  public static addDays(date: Date, days: number): Date {
    return new Date(date.setDate(date.getDate() + days));
  }
  public static addMonths(date: Date, months: number): Date {
    return new Date(date.setDate(date.getMonth() + months));
  }
  public static getFirst(date: Date, weekDay: WeekDay, previousNext: PreviousOrNext): Date {
    return DateUtils.getDayOfWeek(date, weekDay, previousNext);
  }
  public static getDayOfWeek(
    date: Date,
    weekDay: WeekDay,
    previousNext: PreviousOrNext
  ): Date {
    let useDate = new Date(date);
    if (useDate.getDay() === Number(weekDay)) {
      return useDate;
    }
    previousNext =
      useDate.getDay() === Number(WeekDay.Saturday)
        ? PreviousOrNext.Previous
        : useDate.getDay() === Number(WeekDay.Sunday)
        ? PreviousOrNext.Next
        : previousNext;
    do {
      useDate = DateUtils.addDays(
        useDate,
        previousNext === PreviousOrNext.Previous ? -1 : 1
      );
    } while (!(useDate.getDay() === Number(weekDay)));
    return useDate;
  }
  public static getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
  public static getFirstDayOfWeek(date: Date, weekDay: WeekDay): Date {
    return DateUtils.getDayOfWeek(
      date,
      weekDay,
      PreviousOrNext.Previous
    );
  }
  public static getFirstDayOfWorkWeek(date: Date): Date {
    return DateUtils.getDayOfWeek(
      date,
      WeekDay.Monday,
      PreviousOrNext.Previous
    );
  }
  public static getLastDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }
  public static getLastDayOfWeek(date: Date, weekDay: WeekDay): Date {
    return DateUtils.getDayOfWeek(date, weekDay, PreviousOrNext.Next);
  }
  public static getLastDayOfWorkWeek(date: Date): Date {
    return DateUtils.getDayOfWeek(date, WeekDay.Friday, PreviousOrNext.Next);
  }
  public static getCalendarDaysInMonth(date: Date): Date[] {
    const dates: Date[] = [];
    // Get Monday of last month as starting day (date) for the calendar
    const startingDateOfCalendar = DateUtils.getStartDateForCalendar(date);
    let dateToAdd = new Date(startingDateOfCalendar);
    // ok since we have our starting date then we get the next 41 days
    // that we need to add in our calendar array
    // 41 cause our calendar will show 6 weeks and MATH say that
    // 6 weeks * 7 days = 42!!
    for (let i = 0; i < 42; i++) {
      dates.push(new Date(dateToAdd));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
    return dates;
  }
  private static getStartDateForCalendar(selectedDate: Date): Date {
    // for the day we selected let's get the previous month last day
    const lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));
    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;
    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() !== 1) {
      do {
        startingDateOfCalendar = new Date(
          startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1)
        );
      } while (startingDateOfCalendar.getDay() !== 1);
    }
    return startingDateOfCalendar;
  }
  public static getDaysInMonth(date: Date): Date[] {
    const firstDay = DateUtils.getFirstDayOfMonth(date);
    const lastDay = this.getLastDayOfMonth(date);
    return DateUtils.getDatesBetween(firstDay, lastDay);
  }
  public static getDaysInWeek(date: Date): Date[] {
    const firstDay = DateUtils.getFirstDayOfWeek(date, WeekDay.Sunday);
    const lastDay = this.getLastDayOfWeek(date, WeekDay.Saturday);
    return DateUtils.getDatesBetween(firstDay, lastDay);
  }
  public static getDaysInWorkWeek(date: Date): Date[] {
    const firstDay = DateUtils.getFirstDayOfWorkWeek(date);
    const lastDay = this.getLastDayOfWorkWeek(date);
    return DateUtils.getDatesBetween(firstDay, lastDay);
  }
  public static getDatesBetween(firstDay: Date, lastDay: Date): Date[] {
    let dates: Date[] = [];
    const dateMove = new Date(firstDay);
    while (dateMove <= lastDay) {
      dates = [...dates, new Date(dateMove)];
      dateMove.setDate(dateMove.getDate() + 1);
    }
    return dates;
  }
  public static formatDateYYMMDDWithDashSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join('-')
      .trim();
  }
  public static formatDateMMDDYYWithDashSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join('-')
      .trim();
  }
  public static formatDateYYMMDDWithDotSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join('.')
      .trim();
  }
  public static formatDateMMDDYYWithDotSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join('.')
      .trim();
  }
  public static formatDateYYMMDDWithSlashSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join('/')
      .trim();
  }
  public static formatDateMMDDYYWithSlashSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join('/')
      .trim();
  }
}
