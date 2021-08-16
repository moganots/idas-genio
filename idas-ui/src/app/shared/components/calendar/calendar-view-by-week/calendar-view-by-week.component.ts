import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../shared/calendar-service/calendar.service';
import { CalendarViewByComponent } from '../shared/components/calendar-view-by/calendar-view-by.component';

@Component({
  selector: 'app-calendar-view-by-week',
  templateUrl: './calendar-view-by-week.component.html',
  styleUrls: ['./calendar-view-by-week.component.scss'],
})
export class CalendarViewByWeekComponent
  extends CalendarViewByComponent
  implements OnInit
{
  constructor(public calendarService: CalendarService) {
    super(calendarService);
  }
  ngOnInit(): void {}
}
