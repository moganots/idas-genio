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
    `00:30`,
    `01:00`,
    `01:30`,
    `02:00`,
    `02:30`,
    `03:00`,
    `03:30`,
    `04:00`,
    `04:30`,
    `05:00`,
    `05:30`,
    `06:00`,
    `06:30`,
    `07:00`,
    `07:30`,
    `08:00`,
    `08:30`,
    `09:00`,
    `09:30`,
    `10:00`,
    `10:30`,
    `11:00`,
    `11:30`,
    `12:00`,
    `12:30`,
    `13:00`,
    `13:30`,
    `14:00`,
    `14:30`,
    `15:00`,
    `15:30`,
    `16:00`,
    `16:30`,
    `17:00`,
    `17:30`,
    `18:00`,
    `18:30`,
    `19:00`,
    `19:30`,
    `20:00`,
    `20:30`,
    `21:00`,
    `21:30`,
    `22:00`,
    `22:30`,
    `23:00`,
    `23:30`,
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
  public static eventAttendeeResponses = [
    {
      name: `Accept`,
      title: `Accept`,
      icon: `thumb_up_off_alt`,
      cssClass: `calendar-event-response accept`,
    },
    {
      name: `Tentative`,
      title: `Tentative`,
      icon: `block`, // icon: `priority_high`,
      cssClass: `calendar-event-response tentative`,
    },
    {
      name: `Decline`,
      title: `Decline`,
      icon: `thumb_down_off_alt`,
      cssClass: `calendar-event-response decline`,
    },
  ];
}
