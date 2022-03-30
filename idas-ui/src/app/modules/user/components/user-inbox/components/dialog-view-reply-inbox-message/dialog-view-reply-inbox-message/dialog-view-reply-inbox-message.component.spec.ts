import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReadViewReplyInboxMessageComponent } from './dialog-view-reply-inbox-message.component';

describe('DialogReadViewReplyInboxMessageComponent', () => {
  let component: DialogReadViewReplyInboxMessageComponent;
  let fixture: ComponentFixture<DialogReadViewReplyInboxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReadViewReplyInboxMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReadViewReplyInboxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
