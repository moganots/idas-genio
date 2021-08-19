import { TestBed } from '@angular/core/testing';

import { MeetingCalendarAttendeeService } from './meeting-calendar-attendee.service';

describe('MeetingCalendarAttendeeService', () => {
  let service: MeetingCalendarAttendeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingCalendarAttendeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
