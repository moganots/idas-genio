import { DatesUtil } from './dates-util';
export class EmployeesUtil {

  public static getSAIdNumberBirthDate(idNumber: any) {
    const useIdNumber = (idNumber || '').toString();
    if(useIdNumber && useIdNumber.length === 13){
      const year = Number(useIdNumber.substring(0, 2));
      const month = Number(useIdNumber.substring(2, 4)) - 1; // -1 because Angular Date.Month ranges from 0 - 11
      const day = Number(useIdNumber.substring(4, 6));
      console.log(`year=${year}, month=${month}, day=${day}`);
      return DatesUtil.formatDateMMDDYYWithSlashSeparator(new Date(year, month, day));
    }
    return null;
  }
  static getSAIdNumberGender(idNumber: any): any {
    const useIdNumber = (idNumber || '').toString();
    if(useIdNumber && useIdNumber.length === 13){
      const gender = Number(useIdNumber.substring(6, 10));
      console.log(`gender=${gender}`);
      return (gender >= 0 && gender <= 4999) ? 'Female' : (gender >= 5000 && gender <= 9999) ? 'Male' : 'Other';
    }
    return null;
  }

}
