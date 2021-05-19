import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectTaskAssignmentComponent } from './dialog-project-task-assignment.component';

describe('DialogProjectTaskAssignmentComponent', () => {
  let component: DialogProjectTaskAssignmentComponent;
  let fixture: ComponentFixture<DialogProjectTaskAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjectTaskAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjectTaskAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
