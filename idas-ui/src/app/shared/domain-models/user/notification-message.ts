import { BaseModel } from '../base/base-model';
import { Entity } from '../base/entity';
import { LookupValue } from '../lookup-models/lookup-value';
import { User } from './user';
export class NotificationMessage extends BaseModel {
    TransactionTypeId: number;
    EntityId: number;
    UserId: number;
    TransactionType: LookupValue;
    Entity: Entity;
    User: User;
}
