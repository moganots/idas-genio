import { WeekDay } from '@angular/common';
import { PreviousOrNext } from './enum-previous-next';
import { GeneralUtils } from './general-utils';
export class DateUtils {
  public static DATE_FORMAT_DD_M_YY = `ddMyy`;
  public static DATE_FORMAT_DD_MM_YY = `ddMMyy`;
  public static DATE_FORMAT_DD_MMM_YY = `ddMMMyy`;
  public static DATE_FORMAT_DD_MMMM_YY = `ddMMMMyy`;
  public static DATE_FORMAT_DD_M_YYYY = `ddMyyyy`;
  public static DATE_FORMAT_DD_MM_YYYY = `ddMMyyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY = `ddMMMyyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY = `ddMMMMyyyy`;
  public static DATE_FORMAT_M_DD_YY = `Mddyy`;
  public static DATE_FORMAT_MM_DD_YY = `MMddyy`;
  public static DATE_FORMAT_MMM_DD_YY = `MMMddyy`;
  public static DATE_FORMAT_MMMM_DD_YY = `MMMMddyy`;
  public static DATE_FORMAT_M_DD_YYYY = `Mddyyyy`;
  public static DATE_FORMAT_MM_DD_YYYY = `MMddyyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY = `MMMddyyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY = `MMMMddyyyy`;
  public static DATE_FORMAT_M_YY = `Myy`;
  public static DATE_FORMAT_MM_YY = `MMyy`;
  public static DATE_FORMAT_MMM_YY = `MMMyy`;
  public static DATE_FORMAT_MMMM_YY = `MMMMyy`;
  public static DATE_FORMAT_M_YYYY = `Myyyy`;
  public static DATE_FORMAT_MM_YYYY = `MMyyyy`;
  public static DATE_FORMAT_MMM_YYYY = `MMMyyyy`;
  public static DATE_FORMAT_MMMM_YYYY = `MMMMyyyy`;
  public static DATE_FORMAT_YY_M_DD = `yyMdd`;
  public static DATE_FORMAT_YY_MM_DD = `yyMMdd`;
  public static DATE_FORMAT_YY_MMM_DD = `yyMMMdd`;
  public static DATE_FORMAT_YY_MMMM_DD = `yyMMMMdd`;
  public static DATE_FORMAT_YYYY_M_DD = `yyyyMdd`;
  public static DATE_FORMAT_YYYY_MM_DD = `yyyyMMdd`;
  public static DATE_FORMAT_YYYY_MMM_DD = `yyyyMMMdd`;
  public static DATE_FORMAT_YYYY_MMMM_DD = `yyyyMMMMdd`;
  public static DATE_FORMAT_YY_M = `yyM`;
  public static DATE_FORMAT_YY_MM = `yyMM`;
  public static DATE_FORMAT_YY_MMM = `yyMMM`;
  public static DATE_FORMAT_YY_MMMM = `yyMMMM`;
  public static DATE_FORMAT_YYYY_M = `yyyyM`;
  public static DATE_FORMAT_YYYY_MM = `yyyyMM`;
  public static DATE_FORMAT_YYYY_MMM = `yyyyMMM`;
  public static DATE_FORMAT_YYYY_MMMM = `yyyyMMMM`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS = `ddMyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS = `ddMMyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS = `ddMMMyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS = `ddMMMMyy HH:mm:ss`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS = `ddMyyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS = `ddMMyyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS = `ddMMMyyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS = `ddMMMMyyyy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS = `Mddyy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS = `MMddyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS = `MMMddyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS = `MMMMddyy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS = `Mddyyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS = `MMddyyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS = `MMMddyyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS = `MMMMddyyyy HH:mm:ss`;
  public static DATE_FORMAT_M_YY_HH_MM_SS = `Myy HH:mm:ss`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS = `MMyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS = `MMMyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS = `MMMMyy HH:mm:ss`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS = `Myyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS = `MMyyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS = `MMMyyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS = `MMMMyyyy HH:mm:ss`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS = `yyMdd HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS = `yyMMdd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS = `yyMMMdd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS = `yyMMMMdd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS = `yyyyMdd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS = `yyyyMMdd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS = `yyyyMMMdd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS = `yyyyMMMMdd HH:mm:ss`;
  public static DATE_FORMAT_YY_M_HH_MM_SS = `yyM HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS = `yyMM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS = `yyMMM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS = `yyMMMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS = `yyyyM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS = `yyyyMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS = `yyyyMMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS = `yyyyMMMM HH:mm:ss`;

  public static DATE_FORMAT_DD_M_YY_WITH_SLASH = `dd/M/yy`;
  public static DATE_FORMAT_DD_MM_YY_WITH_SLASH = `dd/MM/yy`;
  public static DATE_FORMAT_DD_MMM_YY_WITH_SLASH = `dd/MMM/yy`;
  public static DATE_FORMAT_DD_MMMM_YY_WITH_SLASH = `dd/MMMM/yy`;
  public static DATE_FORMAT_DD_M_YYYY_WITH_SLASH = `dd/M/yyyy`;
  public static DATE_FORMAT_DD_MM_YYYY_WITH_SLASH = `dd/MM/yyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY_WITH_SLASH = `dd/MMM/yyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY_WITH_SLASH = `dd/MMMM/yyyy`;
  public static DATE_FORMAT_M_DD_YY_WITH_SLASH = `M/dd/yy`;
  public static DATE_FORMAT_MM_DD_YY_WITH_SLASH = `MM/dd/yy`;
  public static DATE_FORMAT_MMM_DD_YY_WITH_SLASH = `MMM/dd/yy`;
  public static DATE_FORMAT_MMMM_DD_YY_WITH_SLASH = `MMMM/dd/yy`;
  public static DATE_FORMAT_M_DD_YYYY_WITH_SLASH = `M/dd/yyyy`;
  public static DATE_FORMAT_MM_DD_YYYY_WITH_SLASH = `MM/dd/yyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY_WITH_SLASH = `MMM/dd/yyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY_WITH_SLASH = `MMMM/dd/yyyy`;
  public static DATE_FORMAT_M_YY_WITH_SLASH = `M/yy`;
  public static DATE_FORMAT_MM_YY_WITH_SLASH = `MM/yy`;
  public static DATE_FORMAT_MMM_YY_WITH_SLASH = `MMM/yy`;
  public static DATE_FORMAT_MMMM_YY_WITH_SLASH = `MMMM/yy`;
  public static DATE_FORMAT_M_YYYY_WITH_SLASH = `M/yyyy`;
  public static DATE_FORMAT_MM_YYYY_WITH_SLASH = `MM/yyyy`;
  public static DATE_FORMAT_MMM_YYYY_WITH_SLASH = `MMM/yyyy`;
  public static DATE_FORMAT_MMMM_YYYY_WITH_SLASH = `MMMM/yyyy`;
  public static DATE_FORMAT_YY_M_DD_WITH_SLASH = `yy/M/dd`;
  public static DATE_FORMAT_YY_MM_DD_WITH_SLASH = `yy/MM/dd`;
  public static DATE_FORMAT_YY_MMM_DD_WITH_SLASH = `yy/MMM/dd`;
  public static DATE_FORMAT_YY_MMMM_DD_WITH_SLASH = `yy/MMMM/dd`;
  public static DATE_FORMAT_YYYY_M_DD_WITH_SLASH = `yyyy/M/dd`;
  public static DATE_FORMAT_YYYY_MM_DD_WITH_SLASH = `yyyy/MM/dd`;
  public static DATE_FORMAT_YYYY_MMM_DD_WITH_SLASH = `yyyy/MMM/dd`;
  public static DATE_FORMAT_YYYY_MMMM_DD_WITH_SLASH = `yyyy/MMMM/dd`;
  public static DATE_FORMAT_YY_M_WITH_SLASH = `yy/M`;
  public static DATE_FORMAT_YY_MM_WITH_SLASH = `yy/MM`;
  public static DATE_FORMAT_YY_MMM_WITH_SLASH = `yy/MMM`;
  public static DATE_FORMAT_YY_MMMM_WITH_SLASH = `yy/MMMM`;
  public static DATE_FORMAT_YYYY_M_WITH_SLASH = `yyyy/M`;
  public static DATE_FORMAT_YYYY_MM_WITH_SLASH = `yyyy/MM`;
  public static DATE_FORMAT_YYYY_MMM_WITH_SLASH = `yyyy/MMM`;
  public static DATE_FORMAT_YYYY_MMMM_WITH_SLASH = `yyyy/MMMM`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS_WITH_SLASH = `dd/M/yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS_WITH_SLASH = `dd/MM/yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS_WITH_SLASH = `dd/MMM/yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS_WITH_SLASH = `dd/MMMM/yy HH:mm:ss`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS_WITH_SLASH = `dd/M/yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS_WITH_SLASH = `dd/MM/yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS_WITH_SLASH = `dd/MMM/yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS_WITH_SLASH = `dd/MMMM/yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS_WITH_SLASH = `M/dd/yy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS_WITH_SLASH = `MM/dd/yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS_WITH_SLASH = `MMM/dd/yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS_WITH_SLASH = `MMMM/dd/yy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_SLASH = `M/dd/yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_SLASH = `MM/dd/yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_SLASH = `MMM/dd/yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_SLASH = `MMMM/dd/yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_YY_HH_MM_SS_WITH_SLASH = `M/yy HH:mm:ss`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS_WITH_SLASH = `MM/yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS_WITH_SLASH = `MMM/yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS_WITH_SLASH = `MMMM/yy HH:mm:ss`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS_WITH_SLASH = `M/yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS_WITH_SLASH = `MM/yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS_WITH_SLASH = `MMM/yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS_WITH_SLASH = `MMMM/yyyy HH:mm:ss`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS_WITH_SLASH = `yy/M/dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS_WITH_SLASH = `yy/MM/dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS_WITH_SLASH = `yy/MMM/dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS_WITH_SLASH = `yy/MMMM/dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS_WITH_SLASH = `yyyy/M/dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS_WITH_SLASH = `yyyy/MM/dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS_WITH_SLASH = `yyyy/MMM/dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS_WITH_SLASH = `yyyy/MMMM/dd HH:mm:ss`;
  public static DATE_FORMAT_YY_M_HH_MM_SS_WITH_SLASH = `yy/M HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS_WITH_SLASH = `yy/MM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS_WITH_SLASH = `yy/MMM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS_WITH_SLASH = `yy/MMMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS_WITH_SLASH = `yyyy/M HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS_WITH_SLASH = `yyyy/MM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS_WITH_SLASH = `yyyy/MMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS_WITH_SLASH = `yyyy/MMMM HH:mm:ss`;

  public static DATE_FORMAT_DD_M_YY_WITH_DASH = `dd-M-yy`;
  public static DATE_FORMAT_DD_MM_YY_WITH_DASH = `dd-MM-yy`;
  public static DATE_FORMAT_DD_MMM_YY_WITH_DASH = `dd-MMM-yy`;
  public static DATE_FORMAT_DD_MMMM_YY_WITH_DASH = `dd-MMMM-yy`;
  public static DATE_FORMAT_DD_M_YYYY_WITH_DASH = `dd-M-yyyy`;
  public static DATE_FORMAT_DD_MM_YYYY_WITH_DASH = `dd-MM-yyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY_WITH_DASH = `dd-MMM-yyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY_WITH_DASH = `dd-MMMM-yyyy`;
  public static DATE_FORMAT_M_DD_YY_WITH_DASH = `M-dd-yy`;
  public static DATE_FORMAT_MM_DD_YY_WITH_DASH = `MM-dd-yy`;
  public static DATE_FORMAT_MMM_DD_YY_WITH_DASH = `MMM-dd-yy`;
  public static DATE_FORMAT_MMMM_DD_YY_WITH_DASH = `MMMM-dd-yy`;
  public static DATE_FORMAT_M_DD_YYYY_WITH_DASH = `M-dd-yyyy`;
  public static DATE_FORMAT_MM_DD_YYYY_WITH_DASH = `MM-dd-yyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY_WITH_DASH = `MMM-dd-yyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY_WITH_DASH = `MMMM-dd-yyyy`;
  public static DATE_FORMAT_M_YY_WITH_DASH = `M-yy`;
  public static DATE_FORMAT_MM_YY_WITH_DASH = `MM-yy`;
  public static DATE_FORMAT_MMM_YY_WITH_DASH = `MMM-yy`;
  public static DATE_FORMAT_MMMM_YY_WITH_DASH = `MMMM-yy`;
  public static DATE_FORMAT_M_YYYY_WITH_DASH = `M-yyyy`;
  public static DATE_FORMAT_MM_YYYY_WITH_DASH = `MM-yyyy`;
  public static DATE_FORMAT_MMM_YYYY_WITH_DASH = `MMM-yyyy`;
  public static DATE_FORMAT_MMMM_YYYY_WITH_DASH = `MMMM-yyyy`;
  public static DATE_FORMAT_YY_M_DD_WITH_DASH = `yy-M-dd`;
  public static DATE_FORMAT_YY_MM_DD_WITH_DASH = `yy-MM-dd`;
  public static DATE_FORMAT_YY_MMM_DD_WITH_DASH = `yy-MMM-dd`;
  public static DATE_FORMAT_YY_MMMM_DD_WITH_DASH = `yy-MMMM-dd`;
  public static DATE_FORMAT_YYYY_M_DD_WITH_DASH = `yyyy-M-dd`;
  public static DATE_FORMAT_YYYY_MM_DD_WITH_DASH = `yyyy-MM-dd`;
  public static DATE_FORMAT_YYYY_MMM_DD_WITH_DASH = `yyyy-MMM-dd`;
  public static DATE_FORMAT_YYYY_MMMM_DD_WITH_DASH = `yyyy-MMMM-dd`;
  public static DATE_FORMAT_YY_M_WITH_DASH = `yy-M`;
  public static DATE_FORMAT_YY_MM_WITH_DASH = `yy-MM`;
  public static DATE_FORMAT_YY_MMM_WITH_DASH = `yy-MMM`;
  public static DATE_FORMAT_YY_MMMM_WITH_DASH = `yy-MMMM`;
  public static DATE_FORMAT_YYYY_M_WITH_DASH = `yyyy-M`;
  public static DATE_FORMAT_YYYY_MM_WITH_DASH = `yyyy-MM`;
  public static DATE_FORMAT_YYYY_MMM_WITH_DASH = `yyyy-MMM`;
  public static DATE_FORMAT_YYYY_MMMM_WITH_DASH = `yyyy-MMMM`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS_WITH_DASH = `dd-M-yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS_WITH_DASH = `dd-MM-yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS_WITH_DASH = `dd-MMM-yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS_WITH_DASH = `dd-MMMM-yy HH:mm:ss`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS_WITH_DASH = `dd-M-yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS_WITH_DASH = `dd-MM-yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS_WITH_DASH = `dd-MMM-yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS_WITH_DASH = `dd-MMMM-yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS_WITH_DASH = `M-dd-yy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS_WITH_DASH = `MM-dd-yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS_WITH_DASH = `MMM-dd-yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS_WITH_DASH = `MMMM-dd-yy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_DASH = `M-dd-yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_DASH = `MM-dd-yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_DASH = `MMM-dd-yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_DASH = `MMMM-dd-yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_YY_HH_MM_SS_WITH_DASH = `M-yy HH:mm:ss`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS_WITH_DASH = `MM-yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS_WITH_DASH = `MMM-yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS_WITH_DASH = `MMMM-yy HH:mm:ss`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS_WITH_DASH = `M-yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS_WITH_DASH = `MM-yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS_WITH_DASH = `MMM-yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS_WITH_DASH = `MMMM-yyyy HH:mm:ss`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS_WITH_DASH = `yy-M-dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS_WITH_DASH = `yy-MM-dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS_WITH_DASH = `yy-MMM-dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS_WITH_DASH = `yy-MMMM-dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS_WITH_DASH = `yyyy-M-dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS_WITH_DASH = `yyyy-MM-dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS_WITH_DASH = `yyyy-MMM-dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS_WITH_DASH = `yyyy-MMMM-dd HH:mm:ss`;
  public static DATE_FORMAT_YY_M_HH_MM_SS_WITH_DASH = `yy-M HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS_WITH_DASH = `yy-MM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS_WITH_DASH = `yy-MMM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS_WITH_DASH = `yy-MMMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS_WITH_DASH = `yyyy-M HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS_WITH_DASH = `yyyy-MM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS_WITH_DASH = `yyyy-MMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS_WITH_DASH = `yyyy-MMMM HH:mm:ss`;

  public static DATE_FORMAT_DD_M_YY_WITH_DOT = `dd.M.yy`;
  public static DATE_FORMAT_DD_MM_YY_WITH_DOT = `dd.MM.yy`;
  public static DATE_FORMAT_DD_MMM_YY_WITH_DOT = `dd.MMM.yy`;
  public static DATE_FORMAT_DD_MMMM_YY_WITH_DOT = `dd.MMMM.yy`;
  public static DATE_FORMAT_DD_M_YYYY_WITH_DOT = `dd.M.yyyy`;
  public static DATE_FORMAT_DD_MM_YYYY_WITH_DOT = `dd.MM.yyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY_WITH_DOT = `dd.MMM.yyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY_WITH_DOT = `dd.MMMM.yyyy`;
  public static DATE_FORMAT_M_DD_YY_WITH_DOT = `M.dd.yy`;
  public static DATE_FORMAT_MM_DD_YY_WITH_DOT = `MM.dd.yy`;
  public static DATE_FORMAT_MMM_DD_YY_WITH_DOT = `MMM.dd.yy`;
  public static DATE_FORMAT_MMMM_DD_YY_WITH_DOT = `MMMM.dd.yy`;
  public static DATE_FORMAT_M_DD_YYYY_WITH_DOT = `M.dd.yyyy`;
  public static DATE_FORMAT_MM_DD_YYYY_WITH_DOT = `MM.dd.yyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY_WITH_DOT = `MMM.dd.yyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY_WITH_DOT = `MMMM.dd.yyyy`;
  public static DATE_FORMAT_M_YY_WITH_DOT = `M.yy`;
  public static DATE_FORMAT_MM_YY_WITH_DOT = `MM.yy`;
  public static DATE_FORMAT_MMM_YY_WITH_DOT = `MMM.yy`;
  public static DATE_FORMAT_MMMM_YY_WITH_DOT = `MMMM.yy`;
  public static DATE_FORMAT_M_YYYY_WITH_DOT = `M.yyyy`;
  public static DATE_FORMAT_MM_YYYY_WITH_DOT = `MM.yyyy`;
  public static DATE_FORMAT_MMM_YYYY_WITH_DOT = `MMM.yyyy`;
  public static DATE_FORMAT_MMMM_YYYY_WITH_DOT = `MMMM.yyyy`;
  public static DATE_FORMAT_YY_M_DD_WITH_DOT = `yy.M.dd`;
  public static DATE_FORMAT_YY_MM_DD_WITH_DOT = `yy.MM.dd`;
  public static DATE_FORMAT_YY_MMM_DD_WITH_DOT = `yy.MMM.dd`;
  public static DATE_FORMAT_YY_MMMM_DD_WITH_DOT = `yy.MMMM.dd`;
  public static DATE_FORMAT_YYYY_M_DD_WITH_DOT = `yyyy.M.dd`;
  public static DATE_FORMAT_YYYY_MM_DD_WITH_DOT = `yyyy.MM.dd`;
  public static DATE_FORMAT_YYYY_MMM_DD_WITH_DOT = `yyyy.MMM.dd`;
  public static DATE_FORMAT_YYYY_MMMM_DD_WITH_DOT = `yyyy.MMMM.dd`;
  public static DATE_FORMAT_YY_M_WITH_DOT = `yy.M`;
  public static DATE_FORMAT_YY_MM_WITH_DOT = `yy.MM`;
  public static DATE_FORMAT_YY_MMM_WITH_DOT = `yy.MMM`;
  public static DATE_FORMAT_YY_MMMM_WITH_DOT = `yy.MMMM`;
  public static DATE_FORMAT_YYYY_M_WITH_DOT = `yyyy.M`;
  public static DATE_FORMAT_YYYY_MM_WITH_DOT = `yyyy.MM`;
  public static DATE_FORMAT_YYYY_MMM_WITH_DOT = `yyyy.MMM`;
  public static DATE_FORMAT_YYYY_MMMM_WITH_DOT = `yyyy.MMMM`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS_WITH_DOT = `dd.M.yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS_WITH_DOT = `dd.MM.yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS_WITH_DOT = `dd.MMM.yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS_WITH_DOT = `dd.MMMM.yy HH:mm:ss`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS_WITH_DOT = `dd.M.yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS_WITH_DOT = `dd.MM.yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS_WITH_DOT = `dd.MMM.yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS_WITH_DOT = `dd.MMMM.yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS_WITH_DOT = `M.dd.yy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS_WITH_DOT = `MM.dd.yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS_WITH_DOT = `MMM.dd.yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS_WITH_DOT = `MMMM.dd.yy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_DOT = `M.dd.yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_DOT = `MM.dd.yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_DOT = `MMM.dd.yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_DOT = `MMMM.dd.yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_YY_HH_MM_SS_WITH_DOT = `M.yy HH:mm:ss`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS_WITH_DOT = `MM.yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS_WITH_DOT = `MMM.yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS_WITH_DOT = `MMMM.yy HH:mm:ss`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS_WITH_DOT = `M.yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS_WITH_DOT = `MM.yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS_WITH_DOT = `MMM.yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS_WITH_DOT = `MMMM.yyyy HH:mm:ss`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS_WITH_DOT = `yy.M.dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS_WITH_DOT = `yy.MM.dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS_WITH_DOT = `yy.MMM.dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS_WITH_DOT = `yy.MMMM.dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS_WITH_DOT = `yyyy.M.dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS_WITH_DOT = `yyyy.MM.dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS_WITH_DOT = `yyyy.MMM.dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS_WITH_DOT = `yyyy.MMMM.dd HH:mm:ss`;
  public static DATE_FORMAT_YY_M_HH_MM_SS_WITH_DOT = `yy.M HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS_WITH_DOT = `yy.MM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS_WITH_DOT = `yy.MMM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS_WITH_DOT = `yy.MMMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS_WITH_DOT = `yyyy.M HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS_WITH_DOT = `yyyy.MM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS_WITH_DOT = `yyyy.MMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS_WITH_DOT = `yyyy.MMMM HH:mm:ss`;

  public static DATE_FORMAT_DD_M_YY_WITH_SPACE = `dd M yy`;
  public static DATE_FORMAT_DD_MM_YY_WITH_SPACE = `dd MM yy`;
  public static DATE_FORMAT_DD_MMM_YY_WITH_SPACE = `dd MMM yy`;
  public static DATE_FORMAT_DD_MMMM_YY_WITH_SPACE = `dd MMMM yy`;
  public static DATE_FORMAT_DD_M_YYYY_WITH_SPACE = `dd M yyyy`;
  public static DATE_FORMAT_DD_MM_YYYY_WITH_SPACE = `dd MM yyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY_WITH_SPACE = `dd MMM yyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY_WITH_SPACE = `dd MMMM yyyy`;
  public static DATE_FORMAT_M_DD_YY_WITH_SPACE = `M dd yy`;
  public static DATE_FORMAT_MM_DD_YY_WITH_SPACE = `MM dd yy`;
  public static DATE_FORMAT_MMM_DD_YY_WITH_SPACE = `MMM dd yy`;
  public static DATE_FORMAT_MMMM_DD_YY_WITH_SPACE = `MMMM dd yy`;
  public static DATE_FORMAT_M_DD_YYYY_WITH_SPACE = `M dd yyyy`;
  public static DATE_FORMAT_MM_DD_YYYY_WITH_SPACE = `MM dd yyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY_WITH_SPACE = `MMM dd yyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY_WITH_SPACE = `MMMM dd yyyy`;
  public static DATE_FORMAT_M_YY_WITH_SPACE = `M yy`;
  public static DATE_FORMAT_MM_YY_WITH_SPACE = `MM yy`;
  public static DATE_FORMAT_MMM_YY_WITH_SPACE = `MMM yy`;
  public static DATE_FORMAT_MMMM_YY_WITH_SPACE = `MMMM yy`;
  public static DATE_FORMAT_M_YYYY_WITH_SPACE = `M yyyy`;
  public static DATE_FORMAT_MM_YYYY_WITH_SPACE = `MM yyyy`;
  public static DATE_FORMAT_MMM_YYYY_WITH_SPACE = `MMM yyyy`;
  public static DATE_FORMAT_MMMM_YYYY_WITH_SPACE = `MMMM yyyy`;
  public static DATE_FORMAT_YY_M_DD_WITH_SPACE = `yy M dd`;
  public static DATE_FORMAT_YY_MM_DD_WITH_SPACE = `yy MM dd`;
  public static DATE_FORMAT_YY_MMM_DD_WITH_SPACE = `yy MMM dd`;
  public static DATE_FORMAT_YY_MMMM_DD_WITH_SPACE = `yy MMMM dd`;
  public static DATE_FORMAT_YYYY_M_DD_WITH_SPACE = `yyyy M dd`;
  public static DATE_FORMAT_YYYY_MM_DD_WITH_SPACE = `yyyy MM dd`;
  public static DATE_FORMAT_YYYY_MMM_DD_WITH_SPACE = `yyyy MMM dd`;
  public static DATE_FORMAT_YYYY_MMMM_DD_WITH_SPACE = `yyyy MMMM dd`;
  public static DATE_FORMAT_YY_M_WITH_SPACE = `yy M`;
  public static DATE_FORMAT_YY_MM_WITH_SPACE = `yy MM`;
  public static DATE_FORMAT_YY_MMM_WITH_SPACE = `yy MMM`;
  public static DATE_FORMAT_YY_MMMM_WITH_SPACE = `yy MMMM`;
  public static DATE_FORMAT_YYYY_M_WITH_SPACE = `yyyy M`;
  public static DATE_FORMAT_YYYY_MM_WITH_SPACE = `yyyy MM`;
  public static DATE_FORMAT_YYYY_MMM_WITH_SPACE = `yyyy MMM`;
  public static DATE_FORMAT_YYYY_MMMM_WITH_SPACE = `yyyy MMMM`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS_WITH_SPACE = `dd M yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS_WITH_SPACE = `dd MM yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS_WITH_SPACE = `dd MMM yy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS_WITH_SPACE = `dd MMMM yy HH:mm:ss`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS_WITH_SPACE = `dd M yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS_WITH_SPACE = `dd MM yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS_WITH_SPACE = `dd MMM yyyy HH:mm:ss`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS_WITH_SPACE = `dd MMMM yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS_WITH_SPACE = `M dd yy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS_WITH_SPACE = `MM dd yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS_WITH_SPACE = `MMM dd yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS_WITH_SPACE = `MMMM dd yy HH:mm:ss`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_SPACE = `M dd yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_SPACE = `MM dd yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_SPACE = `MMM dd yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_SPACE = `MMMM dd yyyy HH:mm:ss`;
  public static DATE_FORMAT_M_YY_HH_MM_SS_WITH_SPACE = `M yy HH:mm:ss`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS_WITH_SPACE = `MM yy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS_WITH_SPACE = `MMM yy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS_WITH_SPACE = `MMMM yy HH:mm:ss`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS_WITH_SPACE = `M yyyy HH:mm:ss`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS_WITH_SPACE = `MM yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS_WITH_SPACE = `MMM yyyy HH:mm:ss`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS_WITH_SPACE = `MMMM yyyy HH:mm:ss`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS_WITH_SPACE = `yy M dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS_WITH_SPACE = `yy MM dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS_WITH_SPACE = `yy MMM dd HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS_WITH_SPACE = `yy MMMM dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS_WITH_SPACE = `yyyy M dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS_WITH_SPACE = `yyyy MM dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS_WITH_SPACE = `yyyy MMM dd HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS_WITH_SPACE = `yyyy MMMM dd HH:mm:ss`;
  public static DATE_FORMAT_YY_M_HH_MM_SS_WITH_SPACE = `yy M HH:mm:ss`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS_WITH_SPACE = `yy MM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS_WITH_SPACE = `yy MMM HH:mm:ss`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS_WITH_SPACE = `yy MMMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS_WITH_SPACE = `yyyy M HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS_WITH_SPACE = `yyyy MM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS_WITH_SPACE = `yyyy MMM HH:mm:ss`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS_WITH_SPACE = `yyyy MMMM HH:mm:ss`;

  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_COMMA = `M dd, yyyy, HH:mm:ss`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_COMMA = `MM dd, yyyy, HH:mm:ss`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_COMMA = `MMM dd, yyyy, HH:mm:ss`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_COMMA = `MMMM dd, yyyy, HH:mm:ss`;

  public static DateParts = () => {
    const date = new Date();
    return {
      year: date.getFullYear(),
      month: GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      day: GeneralUtils.appendLeadingZero(date.getDate()),
      hour: GeneralUtils.appendLeadingZero(date.getHours()),
      minutes: GeneralUtils.appendLeadingZero(date.getMinutes()),
      seconds: GeneralUtils.appendLeadingZero(date.getSeconds()),
      ms: GeneralUtils.padRight(
        GeneralUtils.padLeft(date.getMilliseconds(), `000`),
        `000`
      ),
      dow: date.getDay(),
    };
  };
  public static yyyymmdd = () => {
    const dp = DateUtils.DateParts();
    return `${dp.year}${dp.month}${dp.day}`.trim();
  };
  public static yyyymmddDashSeparator = () => {
    const dp = DateUtils.DateParts();
    return [dp.year, dp.month, dp.day].join(`-`).trim();
  };
  public static yyyymmddDotSeparator = () => {
    const dp = DateUtils.DateParts();
    return [dp.year, dp.month, dp.day].join(`.`).trim();
  };
  public static hms = () => {
    const dp = DateUtils.DateParts();
    return [dp.hour, dp.minutes, dp.seconds].join(`:`).trim();
  };
  public static Thms = () => {
    return `T${DateUtils.hms()}`.trim();
  };
  public static ThmsZ0200 = () => {
    return `${DateUtils.Thms()}+0200`.trim();
  };
  public static hmsms = () => {
    const dp = DateUtils.DateParts();
    return [[dp.hour, dp.minutes, dp.seconds].join(`:`).trim(), dp.ms]
      .join(`.`)
      .trim();
  };
  public static Thmsms = () => {
    return `T${DateUtils.hmsms()}`.trim();
  };
  public static ThmsmsZ0200 = () => {
    return `${DateUtils.Thmsms()}+0200`.trim();
  };
  public static yyyymmddhms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.hms()].join(` `).trim();
  };
  public static yyyymmddhmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.hms()]
      .join(` `)
      .trim();
  };
  public static yyyymmddhmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.hms()].join(` `).trim();
  };
  public static yyyymmddhmsms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.hmsms()].join(` `).trim();
  };
  public static yyyymmddhmsmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.hmsms()]
      .join(` `)
      .trim();
  };
  public static yyyymmddhmsmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.hmsms()]
      .join(` `)
      .trim();
  };
  public static yyyymmddThms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.Thms()].join(``).trim();
  };
  public static yyyymmddThmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.Thms()]
      .join(``)
      .trim();
  };
  public static yyyymmddThmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.Thms()].join(``).trim();
  };
  public static yyyymmddThmsms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.Thmsms()].join(``).trim();
  };
  public static yyyymmddThmsmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.Thmsms()]
      .join(``)
      .trim();
  };
  public static yyyymmddThmsmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.Thmsms()]
      .join(``)
      .trim();
  };
  public static yyyymmddThmsZ0200 = () => {
    return [DateUtils.yyyymmdd(), DateUtils.ThmsZ0200()].join(``).trim();
  };
  public static yyyymmddThmsZDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.ThmsZ0200()]
      .join(``)
      .trim();
  };
  public static yyyymmddThmsZDotSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.ThmsZ0200()]
      .join(``)
      .trim();
  };
  public static yyyymmddThmsmsZ0200 = () => {
    return [DateUtils.yyyymmdd(), DateUtils.ThmsmsZ0200()].join(``).trim();
  };
  public static yyyymmddThmsmsZDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.ThmsmsZ0200()]
      .join(``)
      .trim();
  };
  public static yyyymmddThmsmsZDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.ThmsmsZ0200()]
      .join(``)
      .trim();
  };
  public static dateDiffInDays(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60 / 60 / 24;
  }
  public static dateDiffInHours(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60 / 60;
  }
  public static dateDiffInMinutes(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60;
  }
  public static dateDiffInSeconds(startDate: any, endDate: any): number {
    return (Date.parse(endDate) - Date.parse(startDate)) / 1000;
  }
  public static startOfWeek = (date) => {
    const nDate = new Date(date);
    const diff =
      nDate.getDate() - nDate.getDay() + (nDate.getDay() === 0 ? -6 : 1);
    return new Date(nDate.setDate(diff));
  };
  public static endOfWeek = (date) => {
    return new Date(DateUtils.addDays(DateUtils.startOfWeek(date), 6));
  };
  public static add = (date: Date, datePart: string, increment: number = 0) => {
    switch (GeneralUtils.toLocalLowerCaseWithTrim(datePart)) {
      case `y`:
      case `year`:
        return DateUtils.addYears(date, increment);
      case `m`:
      case `month`:
        return DateUtils.addMonths(date, increment);
      case `d`:
      case `day`:
        return DateUtils.addDays(date, increment);
      case `w`:
      case `week`:
        return DateUtils.addWeeks(date, increment);
      case `h`:
      case `hour`:
        return DateUtils.addHours(date, increment);
      case `min`:
      case `minute`:
        return DateUtils.addMinutes(date, increment);
      case `s`:
      case `sec`:
      case `second`:
      case `ss`:
        return DateUtils.addSeconds(date, increment);
      case `ms`:
      case `millisecond`:
        return DateUtils.addMilliseconds(date, increment);
      default:
        return date;
    }
  };
  public static addYears(date: Date, years: number): Date {
    return new Date(date.setFullYear(date.getFullYear() + years));
  }
  public static addMonths(date: Date, months: number): Date {
    return new Date(date.setMonth(date.getMonth() + months));
  }
  public static addDays(date: Date, days: number): Date {
    return new Date(date.setDate(date.getDate() + days));
  }
  public static addWeeks(date: Date, weeks: number): Date {
    return new Date(date.setDate(date.getDate() + 7 * weeks));
  }
  public static addHours(date: Date, hours: number): Date {
    return new Date(date.setHours(date.getHours() + hours));
  }
  public static addMinutes(date: Date, minutes: number): Date {
    return new Date(date.setMinutes(date.getMinutes() + minutes));
  }
  public static addSeconds(date: Date, seconds: number): Date {
    return new Date(date.setSeconds(date.getSeconds() + seconds));
  }
  public static addMilliseconds(date: Date, milliseconds: number): Date {
    return new Date(
      date.setMilliseconds(date.getMilliseconds() + milliseconds)
    );
  }
  public static getFirst(
    date: Date,
    weekDay: WeekDay,
    previousNext: PreviousOrNext
  ): Date {
    return DateUtils.getDayOfWeek(date, weekDay, previousNext);
  }
  public static getDayOfWeek(
    date: Date,
    weekDay: WeekDay,
    previousNext: PreviousOrNext
  ): Date {
    let useDate = new Date(date);
    if (useDate.getDay() === Number(weekDay)) {
      return useDate;
    }
    previousNext =
      useDate.getDay() === Number(WeekDay.Saturday)
        ? PreviousOrNext.Previous
        : useDate.getDay() === Number(WeekDay.Sunday)
        ? PreviousOrNext.Next
        : previousNext;
    do {
      useDate = DateUtils.addDays(
        useDate,
        previousNext === PreviousOrNext.Previous ? -1 : 1
      );
    } while (!(useDate.getDay() === Number(weekDay)));
    return useDate;
  }
  public static getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };
  public static getFirstDayOfWeek(date: Date, weekDay: WeekDay): Date {
    return DateUtils.getDayOfWeek(date, weekDay, PreviousOrNext.Previous);
  }
  public static getFirstDayOfWorkWeek(date: Date): Date {
    return DateUtils.getDayOfWeek(
      date,
      WeekDay.Monday,
      PreviousOrNext.Previous
    );
  }
  public static getLastDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };
  public static getLastDayOfWeek(date: Date, weekDay: WeekDay): Date {
    return DateUtils.getDayOfWeek(date, weekDay, PreviousOrNext.Next);
  }
  public static getLastDayOfWorkWeek(date: Date): Date {
    return DateUtils.getDayOfWeek(date, WeekDay.Friday, PreviousOrNext.Next);
  }
  public static getCalendarDaysInMonth(date: Date): Date[] {
    const dates: Date[] = [];
    // Get Monday of last month as starting day (date) for the calendar
    const startingDateOfCalendar = DateUtils.getStartDateForCalendar(date);
    let dateToAdd = new Date(startingDateOfCalendar);
    // ok since we have our starting date then we get the next 41 days
    // that we need to add in our calendar array
    // 41 cause our calendar will show 6 weeks and MATH say that
    // 6 weeks * 7 days = 42!!
    for (let i = 0; i < 42; i++) {
      dates.push(new Date(dateToAdd));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
    return dates;
  }
  private static getStartDateForCalendar(selectedDate: Date): Date {
    // for the day we selected let`s get the previous month last day
    const lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));
    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;
    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() !== 1) {
      do {
        startingDateOfCalendar = new Date(
          startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1)
        );
      } while (startingDateOfCalendar.getDay() !== 1);
    }
    return startingDateOfCalendar;
  }
  public static getDaysInMonth(date: Date): Date[] {
    const firstDay = DateUtils.getFirstDayOfMonth(date);
    const lastDay = this.getLastDayOfMonth(date);
    return DateUtils.getDatesBetween(firstDay, lastDay);
  }
  public static getDaysInWeek(date: Date): Date[] {
    const firstDay = DateUtils.getFirstDayOfWeek(date, WeekDay.Sunday);
    const lastDay = this.getLastDayOfWeek(date, WeekDay.Saturday);
    return DateUtils.getDatesBetween(firstDay, lastDay);
  }
  public static getDaysInWorkWeek(date: Date): Date[] {
    const firstDay = DateUtils.getFirstDayOfWorkWeek(date);
    const lastDay = this.getLastDayOfWorkWeek(date);
    return DateUtils.getDatesBetween(firstDay, lastDay);
  }
  public static getDatesBetween(firstDay: Date, lastDay: Date): Date[] {
    let dates: Date[] = [];
    const dateMove = new Date(firstDay);
    while (dateMove <= lastDay) {
      dates = [...dates, new Date(dateMove)];
      dateMove.setDate(dateMove.getDate() + 1);
    }
    return dates;
  }
  public static formatDateYYMMDDWithDashSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join(`-`)
      .trim();
  };
  public static formatDateMMDDYYWithDashSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join(`-`)
      .trim();
  };
  public static formatDateYYMMDDWithDotSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join(`.`)
      .trim();
  };
  public static formatDateMMDDYYWithDotSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join(`.`)
      .trim();
  };
  public static formatDateYYMMDDWithSlashSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join(`/`)
      .trim();
  };
  public static formatDateMMDDYYWithSlashSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join(`/`)
      .trim();
  };
  public static formatDateYYYYMMDDHMSDashSeparator = (date: Date) => {
    return [
      DateUtils.formatDateMMDDYYWithDashSeparator(date),
      DateUtils.formatDateHMS(date),
    ]
      .join(` `)
      .trim();
  };
  public static formatDateHMS = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getHours()),
      GeneralUtils.appendLeadingZero(date.getMinutes()),
      GeneralUtils.appendLeadingZero(date.getSeconds()),
    ]
      .join(`:`)
      .trim();
  };
  public static timeAgo = (time) => {
    switch (typeof time) {
      case `number`:
        break;
      case `string`:
        time = +new Date(time).getTime();
        break;
      case `object`:
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    const timeFormats = [
      [60, `seconds`, 1], // 60
      [120, `1 minute ago`, `1 minute from now`], // 60*2
      [3600, `minutes`, 60], // 60*60, 60
      [7200, `1 hour ago`, `1 hour from now`], // 60*60*2
      [86400, `hours`, 3600], // 60*60*24, 60*60
      [172800, `Yesterday`, `Tomorrow`], // 60*60*24*2
      [604800, `days`, 86400], // 60*60*24*7, 60*60*24
      [1209600, `Last week`, `Next week`], // 60*60*24*7*4*2
      [2419200, `weeks`, 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, `Last month`, `Next month`], // 60*60*24*7*4*2
      [29030400, `months`, 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, `Last year`, `Next year`], // 60*60*24*7*4*12*2
      [2903040000, `years`, 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, `Last century`, `Next century`], // 60*60*24*7*4*12*100*2
      [58060800000, `centuries`, 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    let seconds = (+new Date() - time) / 1000;
    let token = `ago`;
    let listChoice = 1;

    if (seconds === 0) {
      return `Just now`;
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = `from now`;
      listChoice = 2;
    }
    let i = 0;
    let format;
    // tslint:disable-next-line:no-conditional-assignment
    while ((format = timeFormats[i++])) {
      if (seconds < format[0]) {
        if (typeof format[2] === `string`) {
          return format[listChoice];
        } else {
          return (
            Math.abs(Math.floor(seconds / format[2])) +
            ` ` +
            format[1] +
            ` ` +
            token
          );
        }
      }
    }
    return time;
  };
}
