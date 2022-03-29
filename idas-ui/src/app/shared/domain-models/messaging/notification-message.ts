import { BaseModel } from '../base/base-model';
import { Entity } from '../base/entity';
import { LookupValue } from '../lookups/lookup-value';
import { User } from '../user/user';
export class NotificationMessage extends BaseModel {
    TransactionTypeId: number;
    EntityId: number;
    UserId: number;
    TransactionType: LookupValue;
    Entity: Entity;
    User: User;
}
