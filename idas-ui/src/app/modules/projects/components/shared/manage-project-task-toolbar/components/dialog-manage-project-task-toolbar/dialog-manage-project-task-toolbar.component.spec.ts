import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManageProjectTaskToolbarComponent } from './dialog-manage-project-task-toolbar.component';

describe('DialogManageProjectTaskToolbarComponent', () => {
  let component: DialogManageProjectTaskToolbarComponent;
  let fixture: ComponentFixture<DialogManageProjectTaskToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogManageProjectTaskToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogManageProjectTaskToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
