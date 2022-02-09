import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientsService } from 'app/modules/clients/services/clients.service';
import { EmployeesService } from 'app/modules/employees/services/employees.service';
import { SuppliersService } from 'app/modules/suppliers/services/suppliers.service';
import {
  AuthenticationService,
  Client,
  DataService,
  Employee,
  GeneralUtils,
  LookupValue,
  LookupValueService,
  Supplier,
  User,
} from 'app/shared/app-shared.module';
import { UserConfiguration } from './user-configuration';

@Injectable({
  providedIn: 'root',
})
export class UserService extends DataService {
  clients: Client[] = [];
  employees: Employee[] = [];
  suppliers: Supplier[] = [];
  lookupValues: LookupValue[] = [];
  constructor(
    public httpClient: HttpClient,
    public authenticationService: AuthenticationService,
    public clientsService: ClientsService,
    public employeesService: EmployeesService,
    public suppliersService: SuppliersService,
    public lookupValueService: LookupValueService
  ) {
    super(httpClient, authenticationService);
    this.entityName = UserConfiguration.identifier;
    this.dataColumns = UserConfiguration.dataColumns;
    this.clientsService.getAll<Client>().toPromise().then((clients) => {
      this.clients = clients;
    });
    this.employeesService.getAll<Employee>().toPromise().then((employees) => {
      this.employees = employees;
    });
    this.suppliersService.getAll<Supplier>().toPromise().then((suppliers) => {
      this.suppliers = suppliers;
    });
    this.lookupValueService.getAll<LookupValue>().toPromise().then((lookupValues) => {
      this.lookupValues = lookupValues;
    });
  }
  mapValues(user: User) {
    user.Client = this.clients.find((client) => client._id === user?.ClientId);
    user.Employee = this.employees.find(
      (employee) => employee._id === user?.EmployeeId
    );
    user.Supplier = this.suppliers.find(
      (supplier) => supplier._id === user?.SupplierId
    );
    user.UserType = this.lookupValues.find(
      (lookupValue) => lookupValue._id === user?.UserTypeId
    );
    user.DisplayName = GeneralUtils.getUserDisplayName(user);
    user.Avatar = user?.Avatar || './assets/img/avatars/avatar-0.png';
    return user;
  }
}
