import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainLoginComponent } from './app-main-login.component';

describe('AppMainLoginComponent', () => {
  let component: AppMainLoginComponent;
  let fixture: ComponentFixture<AppMainLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
