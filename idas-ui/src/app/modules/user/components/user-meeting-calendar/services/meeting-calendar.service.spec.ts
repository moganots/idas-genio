/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeetingCalendarService } from './meeting-calendar.service';

describe('Service: Schedule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingCalendarService]
    });
  });

  it('should ...', inject([MeetingCalendarService], (service: MeetingCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
