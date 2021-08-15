/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserCalendarEventComponent } from './user-meeting-calendar.component';

describe('UserCalendarEventComponent', () => {
  let component: UserCalendarEventComponent;
  let fixture: ComponentFixture<UserCalendarEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCalendarEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCalendarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
