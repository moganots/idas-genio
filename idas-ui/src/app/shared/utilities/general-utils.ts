import { SharedConfiguration } from '../configuration/shared-configuration';
import { Client } from '../domain-models/client/client';
import { Employee } from '../domain-models/employee/employee';
import { FileAttachment } from '../domain-models/file-attachment';
import { Supplier } from '../domain-models/supplier/supplier';
import { User } from '../domain-models/user/user';
export class GeneralUtils {
  public static isObjectSet(obj: any) {
    return !(obj === null || obj === undefined);
  }
  public static isStringSet(str: string) {
    return !(str && String(str).length === 0);
  }
  public static isNotEmptyString(str: string) {
    return this.isStringSet(str) && String(str).trim().length !== 0;
  }
  public static isNumber = (value: any) => {
    return value && typeof value === 'number';
  };
  public static getEmployeeDisplayName(employee: Employee) {
    return `${this.EmptyStringIfNull(employee?.Name)} ${this.EmptyStringIfNull(
      employee?.Surname
    )}`.trim();
  }
  public static getClientDisplayName(client: Client) {
    return `${this.EmptyStringIfNull(client?.Name)} ${this.EmptyStringIfNull(
      client?.Surname || client?.CompanyName
    )}`.trim();
  }
  public static getSupplierDisplayName(supplier: Supplier) {
    return `${this.EmptyStringIfNull(supplier?.Name)} ${this.EmptyStringIfNull(
      supplier?.Surname || supplier?.CompanyName
    )}`.trim();
  }
  public static getUserDisplayName(user: User) {
    if (this.isObjectSet(user) && this.isObjectSet(user.Employee)) {
      return this.getEmployeeDisplayName(user.Employee);
    } else if (this.isObjectSet(user) && this.isObjectSet(user.Client)) {
      return this.getClientDisplayName(user.Client);
    } else if (this.isObjectSet(user) && this.isObjectSet(user.Supplier)) {
      return this.getSupplierDisplayName(user.Supplier);
    } else if (this.isObjectSet(user)) {
      return user?.EmailAddress;
    }
    return ``;
  }
  public static appendLeadingZero(value: number) {
    return value <= 9 ? '0' + value : value;
  }
  public static padRight(value: any, padding: string) {
    return value && padding
      ? value.toString().padEnd(padding.length, padding)
      : value;
  }
  public static padLeft(value: number, padding: string): any {
    return value && padding
      ? value.toString().padStart(padding.length, padding)
      : value;
  }
  public static splitCamelCase(value: string): string {
    return (value || ``).trim().length === 0
      ? ``
      : (value || ``).trim().replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  public static splitCamelCaseAndSpecialCharacters(value: string): string {
    return (value || ``).trim().length === 0
      ? ``
      : (value || ``).trim().replace(/([a-z])([A-Z])([_-])/g, '$1 $2 $3');
  }
  public static capitalizeFirstLetter(value: string): string {
    return (value || ``).trim().length === 0
      ? ``
      : value.charAt(0).toLocaleUpperCase() + value.slice(1);
  }
  public static formatDisplayColumnName(column: any): string {
    const columnName = this.columnNameWithoutId(column);
    switch (columnName) {
      case `EmployeeClientSupplier`:
        return this.splitCamelCase(columnName).split(' ').join(' / ');
      default:
        return this.splitCamelCase(columnName).split(' ').join(' ').trim();
    }
  }
  public static columnNameWithoutId(column: any) {
    const columnName = String(column.name || column.Name || column);
    if ([`_id`, `userid`].includes(this.toLocalLowerCaseWithTrim(columnName))) {
      return columnName;
    }
    return this.toLocalLowerCaseWithTrim(columnName).endsWith(`id`)
      ? columnName.substring(0, columnName.length - 2)
      : columnName;
  }
  public static toLocalLowerCaseWithTrim(value: any) {
    return String(value).toLocaleLowerCase().trim();
  }
  public static toLocalUpperCaseWithTrim(value: any) {
    return String(value).toLocaleUpperCase().trim();
  }
  public static hasItems(array: any[]) {
    return !(array === null && array === undefined && array.length === 0);
  }
  public static getFirstItem(array: any[]) {
    return this.hasItems(array) ? array[0] : null;
  }
  public static getLastItem(array: any[]) {
    return this.hasItems(array) ? array[array.length - 1] : null;
  }
  public static getFileAttachmentUrl(file: FileAttachment) {
    const parentType = this.getFileAttachmentParentType(file);
    const parentId = file.ProjectId || file.TaskId || file.CalendarEventId;
    const fileId = file._id;
    return [
      SharedConfiguration.uriFileAttachment,
      parentType,
      parentId,
      fileId,
      file.FileName,
    ]
      .filter((item) => this.isObjectSet(item))
      .join('/');
  }
  public static getFileAttachmentParentType(file: FileAttachment) {
    if(file){
      return (file.ProjectId) ? `project` : (file.TaskId) ? `task` : (file.CalendarEventId) ? `calendar` : `file`;
    }
    return `file`;
  }
  public static filterByValue<T>(array: T[], filterValue: any) {
    return array.filter((obj) =>
      Object.keys(obj).every((key) =>
        this.toLocalLowerCaseWithTrim(obj[key]).includes(
          this.toLocalLowerCaseWithTrim(filterValue)
        )
      )
    );
  }
  public static generateRandomString(length = 255) {
    const result = [];
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join(``);
  }
  public static ObjectNullIf(value: any) {
    return this.isObjectSet(value) ? value : null;
  }
  public static StringNullIf(value: string) {
    return this.isNotEmptyString(value) ? value : null;
  }
  public static EmptyStringIfNull(value: any) {
    return String(value || ``);
  }
  public static ToJson(obj: any) {
    try {
      return JSON.parse(obj);
    } catch (error) {
      throw error;
    }
  }
}
