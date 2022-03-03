import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectTaskActivityComponent } from './view-project-task-activity.component';

describe('ViewProjectTaskActivityComponent', () => {
  let component: ViewProjectTaskActivityComponent;
  let fixture: ComponentFixture<ViewProjectTaskActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectTaskActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectTaskActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
