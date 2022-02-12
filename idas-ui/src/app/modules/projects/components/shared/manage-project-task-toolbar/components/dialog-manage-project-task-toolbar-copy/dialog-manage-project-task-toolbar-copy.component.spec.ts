import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarCopyComponent } from './dialog-manage-project-task-toolbar-copy.component';

describe('DialogManageProjectTaskToolbarCopyComponent', () => {
  let component: DialogManageProjectTaskToolbarCopyComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
