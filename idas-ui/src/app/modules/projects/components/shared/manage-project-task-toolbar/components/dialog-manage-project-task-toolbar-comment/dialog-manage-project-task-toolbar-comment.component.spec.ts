import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarCommentComponent } from './dialog-manage-project-task-toolbar-comment.component';

describe('DialogManageProjectTaskToolbarCommentComponent', () => {
  let component: DialogManageProjectTaskToolbarCommentComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
