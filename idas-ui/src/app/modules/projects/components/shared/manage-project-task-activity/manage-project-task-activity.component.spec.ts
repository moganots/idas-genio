import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectTaskActivityComponent } from './manage-project-task-activity.component';

describe('ManageProjectTaskActivityComponent', () => {
  let component: ManageProjectTaskActivityComponent;
  let fixture: ComponentFixture<ManageProjectTaskActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProjectTaskActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectTaskActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
