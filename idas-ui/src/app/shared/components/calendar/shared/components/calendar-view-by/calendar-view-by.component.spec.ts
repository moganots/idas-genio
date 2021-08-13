import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarViewByComponent } from './calendar-view-by.component';

describe('CalendarViewByComponent', () => {
  let component: CalendarViewByComponent;
  let fixture: ComponentFixture<CalendarViewByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarViewByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
