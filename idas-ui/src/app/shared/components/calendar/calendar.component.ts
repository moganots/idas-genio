import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from './shared/calendar-service/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() public calendarEvents: any[] = [];
  constructor(public calendarService: CalendarService) {
  }
  ngOnInit(): void {}
}
