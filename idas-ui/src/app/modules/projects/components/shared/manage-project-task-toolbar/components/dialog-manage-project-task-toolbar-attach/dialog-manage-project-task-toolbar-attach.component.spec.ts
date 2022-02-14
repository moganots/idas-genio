import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarAttachFilesComponent } from './dialog-manage-project-task-toolbar-attach.component';

describe('DialogManageProjectTaskToolbarAttachFilesComponent', () => {
  let component: DialogManageProjectTaskToolbarAttachFilesComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarAttachFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarAttachFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarAttachFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
