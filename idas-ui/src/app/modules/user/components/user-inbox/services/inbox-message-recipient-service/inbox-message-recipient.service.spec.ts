import { TestBed } from '@angular/core/testing';

import { InboxMessageRecipientService } from './inbox-message-recipient.service';

describe('InboxMessageRecipientService', () => {
  let service: InboxMessageRecipientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboxMessageRecipientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
