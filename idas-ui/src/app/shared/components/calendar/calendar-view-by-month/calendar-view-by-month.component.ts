import { Component, OnInit } from '@angular/core';
import { ChunkPipe } from 'app/shared/shared.module';
import { CalendarService } from '../shared/calendar-service/calendar.service';
import { CalendarViewByComponent } from '../shared/components/calendar-view-by/calendar-view-by.component';

@Component({
  selector: 'app-calendar-view-by-month',
  templateUrl: './calendar-view-by-month.component.html',
  styleUrls: ['./calendar-view-by-month.component.scss'],
  providers: [ChunkPipe]
})
export class CalendarViewByMonthComponent
  extends CalendarViewByComponent
  implements OnInit
{
  constructor(public calendarService: CalendarService, public chunkpipe: ChunkPipe) {
    super(calendarService, chunkpipe);
  }
  ngOnInit(): void {}
}
