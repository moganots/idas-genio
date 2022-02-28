import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSwitchCaseDataInputComponent } from './common-switch-case-data-input.component';

describe('CommonSwitchCaseDataInputComponent', () => {
  let component: CommonSwitchCaseDataInputComponent;
  let fixture: ComponentFixture<CommonSwitchCaseDataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSwitchCaseDataInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSwitchCaseDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
