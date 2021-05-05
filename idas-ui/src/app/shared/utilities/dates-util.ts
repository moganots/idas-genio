import { GeneralUtil } from './general-util';
export class DatesUtil {
  public static DateParts() {
    const date = new Date();
    return {
        year: date.getFullYear(),
        month: GeneralUtil.appendLeadingZero((date.getMonth() + 1)),
        day: GeneralUtil.appendLeadingZero(date.getDate()),
        hour: GeneralUtil.appendLeadingZero(date.getHours()),
        minutes: GeneralUtil.appendLeadingZero(date.getMinutes()),
        seconds: GeneralUtil.appendLeadingZero(date.getSeconds()),
        ms: GeneralUtil.padRight(GeneralUtil.padLeft(date.getMilliseconds(), '000'), '000'),
        dow: date.getDay()
    };
  }
  public static yyyymmdd() {
    const dp = this.DateParts();
    return `${dp.year}${dp.month}${dp.day}`.trim();
  }
  public static yyyymmddDashSeparator() {
      const dp = this.DateParts();
      return [dp.year, dp.month, dp.day].join('-').trim();
  }
  public static yyyymmddDotSeparator() {
      const dp = this.DateParts();
      return [dp.year, dp.month, dp.day].join('.').trim();
  }
  public static hms() {
      const dp = this.DateParts();
      return [dp.hour, dp.minutes, dp.seconds].join(':').trim();
  }
  public static Thms() {
      return `T${this.hms()}`.trim();
  }
  public static ThmsZ0200() {
      return `${this.Thms()}+0200`.trim();
  }
  public static hmsms() {
      const dp = this.DateParts();
      return [[dp.hour, dp.minutes, dp.seconds].join(':').trim(), dp.ms].join('.').trim();
  }
  public static Thmsms() {
      return `T${this.hmsms()}`.trim();
  }
  public static ThmsmsZ0200() {
      return `${this.Thmsms()}+0200`.trim();
  }
  public static yyyymmddhms() {
    return [this.yyyymmdd(), this.hms()].join(' ').trim();
  }
  public static yyyymmddhmsDashSeparator() {
    return [this.yyyymmddDashSeparator(), this.hms()].join(' ').trim();
  }
  public static yyyymmddhmsDotSeparator() {
    return [this.yyyymmddDotSeparator(), this.hms()].join(' ').trim();
  }
  public static yyyymmddhmsms() {
    return [this.yyyymmdd(), this.hmsms()].join(' ').trim();
  }
  public static yyyymmddhmsmsDashSeparator() {
    return [this.yyyymmddDashSeparator(), this.hmsms()].join(' ').trim();
  }
  public static yyyymmddhmsmsDotSeparator() {
    return [this.yyyymmddDotSeparator(), this.hmsms()].join(' ').trim();
  }
  public static yyyymmddThms() {
    return [this.yyyymmdd(), this.Thms()].join('').trim();
  }
  public static yyyymmddThmsDashSeparator() {
    return [this.yyyymmddDashSeparator(), this.Thms()].join('').trim();
  }
  public static yyyymmddThmsDotSeparator() {
    return [this.yyyymmddDotSeparator(), this.Thms()].join('').trim();
  }
  public static yyyymmddThmsms() {
    return [this.yyyymmdd(), this.Thmsms()].join('').trim();
  }
  public static yyyymmddThmsmsDashSeparator() {
    return [this.yyyymmddDashSeparator(), this.Thmsms()].join('').trim();
  }
  public static yyyymmddThmsmsDotSeparator() {
    return [this.yyyymmddDotSeparator(), this.Thmsms()].join('').trim();
  }
  public static yyyymmddThmsZ0200() {
    return [this.yyyymmdd(), this.ThmsZ0200()].join('').trim();
  }
  public static yyyymmddThmsZDashSeparator() {
    return [this.yyyymmddDashSeparator(), this.ThmsZ0200()].join('').trim();
  }
  public static yyyymmddThmsZDotSeparator() {
    return [this.yyyymmddDashSeparator(), this.ThmsZ0200()].join('').trim();
  }
  public static yyyymmddThmsmsZ0200() {
    return [this.yyyymmdd(), this.ThmsmsZ0200()].join('').trim();
  }
  public static yyyymmddThmsmsZDashSeparator() {
    return [this.yyyymmddDashSeparator(), this.ThmsmsZ0200()].join('').trim();
  }
  public static yyyymmddThmsmsZDotSeparator() {
    return [this.yyyymmddDotSeparator(), this.ThmsmsZ0200()].join('').trim();
  }
  public static dateDiffInDays(startDate: any, endDate: any) {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60 / 60 / 24;
  }
  public static dateDiffInHours(startDate: any, endDate: any) {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60 / 60;
  }
  public static dateDiffInMinutes(startDate: any, endDate: any) {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60;
  }
  public static dateDiffInSeconds(startDate: any, endDate: any) {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000;
  }
  public static formatDateYYMMDDWithDashSeparator(date: Date){
    return [date.getFullYear(), GeneralUtil.appendLeadingZero((date.getMonth() + 1)), GeneralUtil.appendLeadingZero(date.getDate())].join('-').trim();
  }
  public static formatDateMMDDYYWithDashSeparator(date: Date){
    return [GeneralUtil.appendLeadingZero((date.getMonth() + 1)), GeneralUtil.appendLeadingZero(date.getDate()), date.getFullYear()].join('-').trim();
  }
  public static formatDateYYMMDDWithDotSeparator(date: Date){
    return [date.getFullYear(), GeneralUtil.appendLeadingZero((date.getMonth() + 1)), GeneralUtil.appendLeadingZero(date.getDate())].join('.').trim();
  }
  public static formatDateMMDDYYWithDotSeparator(date: Date){
    return [GeneralUtil.appendLeadingZero((date.getMonth() + 1)), GeneralUtil.appendLeadingZero(date.getDate()), date.getFullYear()].join('.').trim();
  }
  public static formatDateYYMMDDWithSlashSeparator(date: Date){
    return [date.getFullYear(), GeneralUtil.appendLeadingZero((date.getMonth() + 1)), GeneralUtil.appendLeadingZero(date.getDate())].join('/').trim();
  }
  public static formatDateMMDDYYWithSlashSeparator(date: Date){
    return [GeneralUtil.appendLeadingZero((date.getMonth() + 1)), GeneralUtil.appendLeadingZero(date.getDate()), date.getFullYear()].join('/').trim();
  }
}
