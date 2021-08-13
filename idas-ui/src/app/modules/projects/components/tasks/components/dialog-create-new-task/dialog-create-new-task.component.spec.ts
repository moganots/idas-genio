import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateNewTaskComponent } from './dialog-create-new-task.component';

describe('DialogCreateNewTaskComponent', () => {
  let component: DialogCreateNewTaskComponent;
  let fixture: ComponentFixture<DialogCreateNewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateNewTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
