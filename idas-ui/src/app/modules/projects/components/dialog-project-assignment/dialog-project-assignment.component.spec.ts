import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectAssignmentComponent } from './dialog-project-assignment.component';

describe('DialogProjectAssignmentComponent', () => {
  let component: DialogProjectAssignmentComponent;
  let fixture: ComponentFixture<DialogProjectAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjectAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjectAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
