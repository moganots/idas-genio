import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarReviewComponent } from './dialog-manage-project-task-toolbar-review.component';

describe('DialogManageProjectTaskToolbarReviewComponent', () => {
  let component: DialogManageProjectTaskToolbarReviewComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
