import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectTaskToolbarComponent } from './manage-project-task-toolbar.component';

describe('ManageProjectTaskToolbarComponent', () => {
  let component: ManageProjectTaskToolbarComponent;
  let fixture: ComponentFixture<ManageProjectTaskToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProjectTaskToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectTaskToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
