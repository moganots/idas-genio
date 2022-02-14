import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarCreateSubComponent } from './dialog-manage-project-task-toolbar-sub.component';

describe('DialogManageProjectTaskToolbarCreateSubComponent', () => {
  let component: DialogManageProjectTaskToolbarCreateSubComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarCreateSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarCreateSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarCreateSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
