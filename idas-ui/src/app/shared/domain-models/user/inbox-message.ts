import { BaseModel } from '../base/base-model';
export class InboxMessage extends BaseModel {
    From: string;
    To: string;
    Cc: string;
    Bcc: string;
    Subject: string;
    Message: string;
}
