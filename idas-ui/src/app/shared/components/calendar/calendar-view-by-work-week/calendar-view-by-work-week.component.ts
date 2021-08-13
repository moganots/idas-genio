import { Component, OnInit } from '@angular/core';
import { ChunkPipe } from 'app/shared/shared.module';
import { CalendarService } from '../shared/calendar-service/calendar.service';
import { CalendarViewByComponent } from '../shared/components/calendar-view-by/calendar-view-by.component';

@Component({
  selector: 'app-calendar-view-by-work-week',
  templateUrl: './calendar-view-by-work-week.component.html',
  styleUrls: ['./calendar-view-by-work-week.component.scss'],
})
export class CalendarViewByWorkWeekComponent
  extends CalendarViewByComponent
  implements OnInit
{
  constructor(public calendarService: CalendarService, public chunkpipe: ChunkPipe) {
    super(calendarService, chunkpipe);
  }
  ngOnInit(): void {}
}
