import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarEditComponent } from './dialog-manage-project-task-toolbar-edit.component';

describe('DialogManageProjectTaskToolbarEditComponent', () => {
  let component: DialogManageProjectTaskToolbarEditComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
