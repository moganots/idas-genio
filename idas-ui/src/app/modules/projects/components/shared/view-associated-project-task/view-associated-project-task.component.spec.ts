import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssociatedProjectTaskComponent } from './view-associated-project-task.component';

describe('ViewAssociatedProjectTaskComponent', () => {
  let component: ViewAssociatedProjectTaskComponent;
  let fixture: ComponentFixture<ViewAssociatedProjectTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAssociatedProjectTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssociatedProjectTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
