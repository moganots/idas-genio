import { Salutation, IndustryType } from 'app/shared/shared.module';
import { User } from '../user/user';
export class Supplier extends User {
  salutationId:Salutation;
  name:string;
  surname:string;
  companyName:string;
  industryTypeId:IndustryType;
  idNumber:number;
  registrationNumber:string;
  vATNumber:number;
  bankId:number;
  accountNumber:number;
}
