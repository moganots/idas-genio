import { Component, OnInit } from '@angular/core';
import { CalendarConfiguration } from '../calendar-configuration/calendar-configuration';
import { ViewByOption } from '../calendar-interfaces/view-by-option';
import { ViewNavOption } from '../calendar-interfaces/view-nav-option';
import { CalendarService } from '../calendar-service/calendar.service';

@Component({
  selector: 'app-calendar-toolbar',
  templateUrl: './calendar-toolbar.component.html',
  styleUrls: ['./calendar-toolbar.component.scss'],
})
export class CalendarToolbarComponent implements OnInit {
  viewNavOptions = CalendarConfiguration.viewNavOptions;
  viewByOptions = CalendarConfiguration.viewByOptions;
  constructor(public calendarService: CalendarService) {}
  ngOnInit(): void {}
  setViewNavOption(option: ViewNavOption): void {
    this.calendarService?.setViewNavOption(option);
  }
  setViewByOption(option: ViewByOption): void {
    this.calendarService?.setViewByOption(option);
  }
}
