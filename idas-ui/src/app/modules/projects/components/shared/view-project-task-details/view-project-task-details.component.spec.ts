import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectTaskDetailsComponent } from './view-project-task-details.component';

describe('ViewProjectTaskDetailsComponent', () => {
  let component: ViewProjectTaskDetailsComponent;
  let fixture: ComponentFixture<ViewProjectTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
