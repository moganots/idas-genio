export class CalendarDay {
  public Date: Date;
  public Title: string;
  public IsPastDate: boolean;
  public IsFirstDayOfMonth: boolean;
  public IsToday: boolean;
  public IsFutureDate: boolean;

  constructor(date: Date) {
    this.Date = date;
    this.IsPastDate =
      date?.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
    this.IsFirstDayOfMonth = date?.getDate() === 1;
    this.IsToday =
      date?.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
    this.IsFutureDate = date?.getMonth() > new Date().getMonth();
  }
}
