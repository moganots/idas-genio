import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskAssignmentComponent } from './dialog-task-assignment.component';

describe('DialogTaskAssignmentComponent', () => {
  let component: DialogTaskAssignmentComponent;
  let fixture: ComponentFixture<DialogTaskAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTaskAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
