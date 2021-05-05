import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockDatabase } from '@test-data/mock-database';
import { BaseService } from '../base-service/base.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {
  private mockDatabase: MockDatabase;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.mockDatabase = new MockDatabase();
  }

  create<T>(entity: T): T {
    this.getQueryParams('create');
    console.log(`create()`)
    console.log(entity)
    return this.mockDatabase.create(this.entityName, entity, this.currentUser._id) as T;
  }
  getAll<T>(): T[] {
    this.getQueryParams('getAll');
    return this.mockDatabase.getModel(this.entityName) as unknown as T[];
  }
  getById<T>(id: number): T[] {
    this.getQueryParams('getById', {_id:id});
    return this.mockDatabase.getModel(this.entityName).filter((e) => e._id === id) as unknown as T[];
  }
  getFirstById<T>(id: number) : T {
    return (this.getById<T>(id) || [])[0] as T;
  }
  getBy<T>(predicate: any): T[] {
    this.getQueryParams('getBy');
    return this.mockDatabase.getModel(this.entityName).filter(predicate) as unknown as T[];
  }
  getFirstBy<T>(predicate: any) : T {
    return (this.getBy<T>(predicate) || [])[0] as T;
  }
  update<T>(entity: T) : T {
    this.getQueryParams('update', entity);
    console.log(`update()`)
    console.log(entity)
    return this.mockDatabase.update(this.entityName, entity, this.currentUser._id) as T;
  }
  delete<T>(entity: T) : T {
    this.getQueryParams('delete', entity);
    return this.mockDatabase.delete(this.entityName, entity, this.currentUser._id) as T;
  }

}
