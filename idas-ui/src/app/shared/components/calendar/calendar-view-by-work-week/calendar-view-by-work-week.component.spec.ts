import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewByWorkWeekComponent } from './calendar-view-by-work-week.component';

describe('CalendarViewByWorkWeekComponent', () => {
  let component: CalendarViewByWorkWeekComponent;
  let fixture: ComponentFixture<CalendarViewByWorkWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarViewByWorkWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewByWorkWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
