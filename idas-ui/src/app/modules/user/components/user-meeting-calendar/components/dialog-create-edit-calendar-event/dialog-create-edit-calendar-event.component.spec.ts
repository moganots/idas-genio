import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEditCalendarEventComponent } from './dialog-create-edit-calendar-event.component';

describe('DialogCreateEditCalendarEventComponent', () => {
  let component: DialogCreateEditCalendarEventComponent;
  let fixture: ComponentFixture<DialogCreateEditCalendarEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateEditCalendarEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateEditCalendarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
