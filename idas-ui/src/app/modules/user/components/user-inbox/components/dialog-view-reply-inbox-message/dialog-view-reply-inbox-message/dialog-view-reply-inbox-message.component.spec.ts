import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewReplyInboxMessageComponent } from './dialog-view-reply-inbox-message.component';

describe('DialogViewReplyInboxMessageComponent', () => {
  let component: DialogViewReplyInboxMessageComponent;
  let fixture: ComponentFixture<DialogViewReplyInboxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewReplyInboxMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViewReplyInboxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
