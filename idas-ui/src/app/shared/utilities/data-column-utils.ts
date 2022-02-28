import { SharedConfiguration } from '../configuration/shared-configuration';

export class DataColumnUtils {
  public static setIsRequired(columnName: string) {
    return !(
      SharedConfiguration.cannotEditColumns.includes(columnName) ||
      SharedConfiguration.optionalColumns.includes(columnName)
    );
  }
  public static setCanEdit(columnName: string) {
    return !SharedConfiguration.cannotEditColumns.includes(columnName);
  }

  public static isUseCheckbox(columnName: string) {
    return SharedConfiguration.checkboxColumns.includes(columnName);
  }
  public static isDateField(columnName: string) {
    return SharedConfiguration.dateColumns.includes(columnName);
  }
  public static isNumberField(columnName: string) {
    return SharedConfiguration.numberColumns.includes(columnName);
  }
  public static isTextAreaField(columnName: string) {
    return SharedConfiguration.textAreaColumns.includes(columnName);
  }
  public static isMaskedField(columnName: string) {
    return SharedConfiguration.maskedColumns.includes(columnName);
  }
  public static isLookupValueField(columnName: string) {
    return SharedConfiguration.lookupValueColumns.includes(columnName);
  }
  public static isReferenceValueField(columnName: string) {
    return SharedConfiguration.referenceValueColumns.includes(columnName);
  }
  public static isLookupOrReferenceValueField(columnName: string) {
    return (
      this.isLookupValueField(columnName) ||
      this.isReferenceValueField(columnName)
    );
  }
  public static isTimeField(columnName: string) {
    return SharedConfiguration.timeColumns.includes(columnName);
  }
  public static isUseIcon(columnName: string) {
    return SharedConfiguration.useIconColumns.includes(columnName);
  }
  public static isUseImage(columnName: string) {
    return SharedConfiguration.useImageColumns.includes(columnName);
  }
  public static isUseBreakOrNewlineOrSection(columnName: string) {
    return SharedConfiguration.useBreakNewlineSectionColumns.includes(
      columnName
    );
  }
  public static setControlType(columnName: string) {
    if (this.isUseCheckbox(columnName)) {
      return 'checkbox';
    } else if (this.isDateField(columnName)) {
      return 'datetimepicker';
    } else if (this.isNumberField(columnName)) {
      return 'number';
    } else if (this.isTextAreaField(columnName)) {
      return 'textarea';
    } else if (this.isMaskedField(columnName)) {
      return 'password';
    } else if (this.isUseBreakOrNewlineOrSection(columnName)) {
      return 'break';
    } else if (this.isLookupOrReferenceValueField(columnName)) {
      return 'select';
    } else if (this.isTimeField(columnName)) {
      this.setTimePickerLookupValues(columnName);
      return 'timepicker';
    } else if (this.isUseIcon(columnName)) {
      return 'icon';
    } else if (this.isUseImage(columnName)) {
      return 'image';
    } else {
      return 'textbox';
    }
  }
  public static setSelectOptionControlType(columnName: string) {
    if (this.isReferenceValueField(columnName)) {
      return 'referenceValue';
    } else if (this.isUseIcon(columnName)) {
      return 'lookupIcon';
    } else if (this.isUseImage(columnName)) {
      return 'lookupImage';
    } else {
      return 'lookupValue';
    }
  }
  public static setTimePickerLookupValues(columnName: string) {
    return SharedConfiguration.scheduleTimes?.map((time, index) => ({
      id: index,
      title: time,
      value: time,
      displayValue: time,
    }));
  }
}
