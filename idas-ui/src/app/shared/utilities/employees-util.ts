import { DateUtils } from './date-utils';
export class EmployeesUtil {

  public static getSAIdNumberBirthDate(idNumber: any) {
    const useIdNumber = String(idNumber || ``);
    if(useIdNumber && useIdNumber.length === 13){
      const year = Number(useIdNumber.substring(0, 2));
      const month = Number(useIdNumber.substring(2, 4)) - 1; // -1 because Angular Date.Month ranges from 0 - 11
      const day = Number(useIdNumber.substring(4, 6));
      return DateUtils.formatDateMMDDYYWithSlashSeparator(new Date(year, month, day));
    }
    return null;
  }
  public static getSAIdNumberGenderName(idNumber: any) {
    const useIdNumber = String(idNumber || ``);
    if(useIdNumber && useIdNumber.length === 13){
      const gender = Number(useIdNumber.substring(6, 10));
      return (gender >= 0 && gender <= 4999) ? 'Female' : (gender >= 5000 && gender <= 9999) ? 'Male' : 'Other';
    }
    return null;
  }

}
