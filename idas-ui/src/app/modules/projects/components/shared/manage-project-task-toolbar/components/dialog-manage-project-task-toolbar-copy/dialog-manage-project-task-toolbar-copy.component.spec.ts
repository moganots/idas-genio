import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarCloneCopyComponent } from './dialog-manage-project-task-toolbar-copy.component';

describe('DialogManageProjectTaskToolbarCloneCopyComponent', () => {
  let component: DialogManageProjectTaskToolbarCloneCopyComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarCloneCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarCloneCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarCloneCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
