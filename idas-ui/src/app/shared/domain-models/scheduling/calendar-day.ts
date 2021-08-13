export class CalendarDay {
  public date: Date;
  public title: string;
  public isPastDate: boolean;
  public isFirstDayOfMonth: boolean;
  public isToday: boolean;
  public isFutureDate: boolean;

  constructor(d: Date) {
    this.date = d;
    this.isPastDate = d.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
    this.isFirstDayOfMonth = d.getDate() === 1;
    this.isToday = d.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
    this.isFutureDate = d.getMonth() > new Date().getMonth();
  }
}
