import { ViewByOption } from '../calendar-interfaces/view-by-option';
import { ViewNavOption } from '../calendar-interfaces/view-nav-option';
export class CalendarConfiguration {
  public static viewNavOptions: ViewNavOption[] = [
    { name: 'Previous', cssClass: 'btn previous', active: false },
    { name: 'Today', cssClass: 'btn today', active: true },
    { name: 'Next', cssClass: 'btn next', active: false },
  ];
  public static viewByOptions: ViewByOption[] = [
    { name: 'Month', cssClass: 'btn month', active: true, canShow: true },
    { name: 'Week', cssClass: 'btn week', active: false, canShow: true },
    {
      name: 'Work Week',
      cssClass: 'btn work-week',
      active: false,
      canShow: true,
    },
    { name: 'Day', cssClass: 'btn day', active: false, canShow: true },
  ];
  public static monthNames: string[] = [
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
  public static weekDays: string[] = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  public static operatingHours: string[] = [
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
  public static dayMenuNavOptions = [
    {
      name: `Week`,
      title: `Go to Week`,
      icon: `calendar_view_month`,
      cssClass: ``,
    },
    {
      name: `Work Week`,
      title: `Go to Work Week`,
      icon: `calendar_view_week`,
      cssClass: ``,
    },
    {
      name: `Day`,
      title: `Go to Day`,
      icon: `calendar_today`,
      cssClass: ``,
    },
    {
      name: `New Event`,
      title: `New Event`,
      icon: `edit_calendar`,
      cssClass: ``,
    },
  ];
}
