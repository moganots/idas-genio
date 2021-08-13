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
    { name: 'Work Week', cssClass: 'btn work-week', active: false, canShow: true },
    { name: 'Day', cssClass: 'btn day', active: false, canShow: true },
  ];
}
