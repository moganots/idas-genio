import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectTaskDetailsComponent } from './manage-project-task-details.component';

describe('ManageProjectTaskDetailsComponent', () => {
  let component: ManageProjectTaskDetailsComponent;
  let fixture: ComponentFixture<ManageProjectTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProjectTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
