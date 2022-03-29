/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { InboxMessageService } from './inbox-message.service';

describe('Service: Inbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InboxMessageService]
    });
  });

  it('should ...', inject([InboxMessageService], (service: InboxMessageService) => {
    expect(service).toBeTruthy();
  }));
});
