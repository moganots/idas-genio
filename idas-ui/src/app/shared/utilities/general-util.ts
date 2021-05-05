export class GeneralUtil {
  public static appendLeadingZero(value: number) {
    return (value <= 9) ? '0' + value : value;
  }
  public static padRight(value: any, padding: string) {
    return (value && padding) ? value.toString().padEnd(padding.length, padding) : value;
  }
  public static padLeft(value: number, padding: string): any {
    return (value && padding) ? value.toString().padStart(padding.length, padding) : value;
  }
  public static hasItems(array: any[]) {
    return Array.isArray(array) && (array !== null) && (array !== undefined) && (array.length !== 0);
  }
  public static firstItem(array: any[]) {
    return (this.hasItems(array)) ? array[0] : null;
  }
  public static lastItem(array: any[]) {
    return (this.hasItems(array)) ? array[array.length - 1] : null;
  }
}
