import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewByWeekComponent } from './calendar-view-by-week.component';

describe('CalendarViewByWeekComponent', () => {
  let component: CalendarViewByWeekComponent;
  let fixture: ComponentFixture<CalendarViewByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarViewByWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
