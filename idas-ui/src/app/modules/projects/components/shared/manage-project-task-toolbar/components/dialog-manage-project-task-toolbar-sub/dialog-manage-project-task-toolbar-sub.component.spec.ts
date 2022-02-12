import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarSubComponent } from './dialog-manage-project-task-toolbar-sub.component';

describe('DialogManageProjectTaskToolbarSubComponent', () => {
  let component: DialogManageProjectTaskToolbarSubComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
