import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceEntityService extends DataService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  getReferenceValuesByColumnName(column: any) {
    this.entityName = this.getReferenceEntityName(column);
    console.log(`this.entityName=${this.entityName}`)
    return this.getAll();
  }


  private getReferenceEntityName(column: any): string {
    let refEntityName = this.toLocaleLowerCaseTrim(this.columnNameWithoutId(column)).toLocaleLowerCase();
    switch(refEntityName) {
      case 'manager': return 'employee';
      default: return refEntityName;
    }
  }
}
