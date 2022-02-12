import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarAttachComponent } from './dialog-manage-project-task-toolbar-attach.component';

describe('DialogManageProjectTaskToolbarAttachComponent', () => {
  let component: DialogManageProjectTaskToolbarAttachComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarAttachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarAttachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
