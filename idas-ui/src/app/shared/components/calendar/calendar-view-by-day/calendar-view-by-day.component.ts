import { Component, OnInit } from '@angular/core';
import { ChunkPipe } from 'app/shared/shared.module';
import { CalendarService } from '../shared/calendar-service/calendar.service';
import { CalendarViewByComponent } from '../shared/components/calendar-view-by/calendar-view-by.component';

@Component({
  selector: 'app-calendar-view-by-day',
  templateUrl: './calendar-view-by-day.component.html',
  styleUrls: ['./calendar-view-by-day.component.scss'],
})
export class CalendarViewByDayComponent
  extends CalendarViewByComponent
  implements OnInit
{
  constructor(public calendarService: CalendarService, public chunkpipe: ChunkPipe) {
    super(calendarService, chunkpipe);
  }
  ngOnInit(): void {}
}
