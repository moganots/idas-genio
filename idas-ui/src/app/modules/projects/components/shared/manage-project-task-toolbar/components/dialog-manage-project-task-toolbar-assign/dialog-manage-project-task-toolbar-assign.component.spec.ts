import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarAssignComponent } from './dialog-manage-project-task-toolbar-assign.component';

describe('DialogManageProjectTaskToolbarAssignComponent', () => {
  let component: DialogManageProjectTaskToolbarAssignComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
