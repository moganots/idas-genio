import { WeekDay } from '@angular/common';
import { PreviousOrNext } from './enum-previous-next';
import { GeneralUtils } from './general-utils';
export class DateUtils {
  public static DATE_FORMAT_DD_M_YY = `ddmyy`;
  public static DATE_FORMAT_DD_MM_YY = `ddmmyy`;
  public static DATE_FORMAT_DD_MMM_YY = `ddmmmyy`;
  public static DATE_FORMAT_DD_MMMM_YY = `ddmmmmyy`;
  public static DATE_FORMAT_DD_M_YYYY = `ddmyyyy`;
  public static DATE_FORMAT_DD_MM_YYYY = `ddmmyyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY = `ddmmmyyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY = `ddmmmmyyyy`;
  public static DATE_FORMAT_M_DD_YY = `mddyy`;
  public static DATE_FORMAT_MM_DD_YY = `mmddyy`;
  public static DATE_FORMAT_MMM_DD_YY = `mmmddyy`;
  public static DATE_FORMAT_MMMM_DD_YY = `mmmmddyy`;
  public static DATE_FORMAT_M_DD_YYYY = `mddyyyy`;
  public static DATE_FORMAT_MM_DD_YYYY = `mmddyyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY = `mmmddyyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY = `mmmmddyyyy`;
  public static DATE_FORMAT_M_YY = `myy`;
  public static DATE_FORMAT_MM_YY = `mmyy`;
  public static DATE_FORMAT_MMM_YY = `mmmyy`;
  public static DATE_FORMAT_MMMM_YY = `mmmmyy`;
  public static DATE_FORMAT_M_YYYY = `myyyy`;
  public static DATE_FORMAT_MM_YYYY = `mmyyyy`;
  public static DATE_FORMAT_MMM_YYYY = `mmmyyyy`;
  public static DATE_FORMAT_MMMM_YYYY = `mmmmyyyy`;
  public static DATE_FORMAT_YY_M_DD = `yymdd`;
  public static DATE_FORMAT_YY_MM_DD = `yymmdd`;
  public static DATE_FORMAT_YY_MMM_DD = `yymmmdd`;
  public static DATE_FORMAT_YY_MMMM_DD = `yymmmmdd`;
  public static DATE_FORMAT_YYYY_M_DD = `yyyymdd`;
  public static DATE_FORMAT_YYYY_MM_DD = `yyyymmdd`;
  public static DATE_FORMAT_YYYY_MMM_DD = `yyyymmmdd`;
  public static DATE_FORMAT_YYYY_MMMM_DD = `yyyymmmmdd`;
  public static DATE_FORMAT_YY_M = `yym`;
  public static DATE_FORMAT_YY_MM = `yymm`;
  public static DATE_FORMAT_YY_MMM = `yymmm`;
  public static DATE_FORMAT_YY_MMMM = `yymmmm`;
  public static DATE_FORMAT_YYYY_M = `yyyym`;
  public static DATE_FORMAT_YYYY_MM = `yyyymm`;
  public static DATE_FORMAT_YYYY_MMM = `yyyymmm`;
  public static DATE_FORMAT_YYYY_MMMM = `yyyymmmm`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS = `ddmyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS = `ddmmyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS = `ddmmmyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS = `ddmmmmyy HH:MM:SS`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS = `ddmyyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS = `ddmmyyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS = `ddmmmyyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS = `ddmmmmyyyy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS = `mddyy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS = `mmddyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS = `mmmddyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS = `mmmmddyy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS = `mddyyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS = `mmddyyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS = `mmmddyyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS = `mmmmddyyyy HH:MM:SS`;
  public static DATE_FORMAT_M_YY_HH_MM_SS = `myy HH:MM:SS`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS = `mmyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS = `mmmyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS = `mmmmyy HH:MM:SS`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS = `myyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS = `mmyyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS = `mmmyyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS = `mmmmyyyy HH:MM:SS`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS = `yymdd HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS = `yymmdd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS = `yymmmdd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS = `yymmmmdd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS = `yyyymdd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS = `yyyymmdd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS = `yyyymmmdd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS = `yyyymmmmdd HH:MM:SS`;
  public static DATE_FORMAT_YY_M_HH_MM_SS = `yym HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS = `yymm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS = `yymmm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS = `yymmmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS = `yyyym HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS = `yyyymm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS = `yyyymmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS = `yyyymmmm HH:MM:SS`;

  public static DATE_FORMAT_DD_M_YY_WITH_SLASH = `dd/m/yy`;
  public static DATE_FORMAT_DD_MM_YY_WITH_SLASH = `dd/mm/yy`;
  public static DATE_FORMAT_DD_MMM_YY_WITH_SLASH = `dd/mmm/yy`;
  public static DATE_FORMAT_DD_MMMM_YY_WITH_SLASH = `dd/mmmm/yy`;
  public static DATE_FORMAT_DD_M_YYYY_WITH_SLASH = `dd/m/yyyy`;
  public static DATE_FORMAT_DD_MM_YYYY_WITH_SLASH = `dd/mm/yyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY_WITH_SLASH = `dd/mmm/yyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY_WITH_SLASH = `dd/mmmm/yyyy`;
  public static DATE_FORMAT_M_DD_YY_WITH_SLASH = `m/dd/yy`;
  public static DATE_FORMAT_MM_DD_YY_WITH_SLASH = `mm/dd/yy`;
  public static DATE_FORMAT_MMM_DD_YY_WITH_SLASH = `mmm/dd/yy`;
  public static DATE_FORMAT_MMMM_DD_YY_WITH_SLASH = `mmmm/dd/yy`;
  public static DATE_FORMAT_M_DD_YYYY_WITH_SLASH = `m/dd/yyyy`;
  public static DATE_FORMAT_MM_DD_YYYY_WITH_SLASH = `mm/dd/yyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY_WITH_SLASH = `mmm/dd/yyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY_WITH_SLASH = `mmmm/dd/yyyy`;
  public static DATE_FORMAT_M_YY_WITH_SLASH = `m/yy`;
  public static DATE_FORMAT_MM_YY_WITH_SLASH = `mm/yy`;
  public static DATE_FORMAT_MMM_YY_WITH_SLASH = `mmm/yy`;
  public static DATE_FORMAT_MMMM_YY_WITH_SLASH = `mmmm/yy`;
  public static DATE_FORMAT_M_YYYY_WITH_SLASH = `m/yyyy`;
  public static DATE_FORMAT_MM_YYYY_WITH_SLASH = `mm/yyyy`;
  public static DATE_FORMAT_MMM_YYYY_WITH_SLASH = `mmm/yyyy`;
  public static DATE_FORMAT_MMMM_YYYY_WITH_SLASH = `mmmm/yyyy`;
  public static DATE_FORMAT_YY_M_DD_WITH_SLASH = `yy/m/dd`;
  public static DATE_FORMAT_YY_MM_DD_WITH_SLASH = `yy/mm/dd`;
  public static DATE_FORMAT_YY_MMM_DD_WITH_SLASH = `yy/mmm/dd`;
  public static DATE_FORMAT_YY_MMMM_DD_WITH_SLASH = `yy/mmmm/dd`;
  public static DATE_FORMAT_YYYY_M_DD_WITH_SLASH = `yyyy/m/dd`;
  public static DATE_FORMAT_YYYY_MM_DD_WITH_SLASH = `yyyy/mm/dd`;
  public static DATE_FORMAT_YYYY_MMM_DD_WITH_SLASH = `yyyy/mmm/dd`;
  public static DATE_FORMAT_YYYY_MMMM_DD_WITH_SLASH = `yyyy/mmmm/dd`;
  public static DATE_FORMAT_YY_M_WITH_SLASH = `yy/m`;
  public static DATE_FORMAT_YY_MM_WITH_SLASH = `yy/mm`;
  public static DATE_FORMAT_YY_MMM_WITH_SLASH = `yy/mmm`;
  public static DATE_FORMAT_YY_MMMM_WITH_SLASH = `yy/mmmm`;
  public static DATE_FORMAT_YYYY_M_WITH_SLASH = `yyyy/m`;
  public static DATE_FORMAT_YYYY_MM_WITH_SLASH = `yyyy/mm`;
  public static DATE_FORMAT_YYYY_MMM_WITH_SLASH = `yyyy/mmm`;
  public static DATE_FORMAT_YYYY_MMMM_WITH_SLASH = `yyyy/mmmm`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS_WITH_SLASH = `dd/m/yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS_WITH_SLASH = `dd/mm/yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS_WITH_SLASH = `dd/mmm/yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS_WITH_SLASH = `dd/mmmm/yy HH:MM:SS`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS_WITH_SLASH = `dd/m/yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS_WITH_SLASH = `dd/mm/yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS_WITH_SLASH = `dd/mmm/yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS_WITH_SLASH = `dd/mmmm/yyyy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS_WITH_SLASH = `m/dd/yy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS_WITH_SLASH = `mm/dd/yy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS_WITH_SLASH = `mmm/dd/yy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS_WITH_SLASH = `mmmm/dd/yy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_SLASH = `m/dd/yyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_SLASH = `mm/dd/yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_SLASH = `mmm/dd/yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_SLASH = `mmmm/dd/yyyy HH:MM:SS`;
  public static DATE_FORMAT_M_YY_HH_MM_SS_WITH_SLASH = `m/yy HH:MM:SS`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS_WITH_SLASH = `mm/yy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS_WITH_SLASH = `mmm/yy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS_WITH_SLASH = `mmmm/yy HH:MM:SS`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS_WITH_SLASH = `m/yyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS_WITH_SLASH = `mm/yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS_WITH_SLASH = `mmm/yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS_WITH_SLASH = `mmmm/yyyy HH:MM:SS`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS_WITH_SLASH = `yy/m/dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS_WITH_SLASH = `yy/mm/dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS_WITH_SLASH = `yy/mmm/dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS_WITH_SLASH = `yy/mmmm/dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS_WITH_SLASH = `yyyy/m/dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS_WITH_SLASH = `yyyy/mm/dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS_WITH_SLASH = `yyyy/mmm/dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS_WITH_SLASH = `yyyy/mmmm/dd HH:MM:SS`;
  public static DATE_FORMAT_YY_M_HH_MM_SS_WITH_SLASH = `yy/m HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS_WITH_SLASH = `yy/mm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS_WITH_SLASH = `yy/mmm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS_WITH_SLASH = `yy/mmmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS_WITH_SLASH = `yyyy/m HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS_WITH_SLASH = `yyyy/mm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS_WITH_SLASH = `yyyy/mmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS_WITH_SLASH = `yyyy/mmmm HH:MM:SS`;

  public static DATE_FORMAT_DD_M_YY_WITH_DASH = `dd-m-yy`;
  public static DATE_FORMAT_DD_MM_YY_WITH_DASH = `dd-mm-yy`;
  public static DATE_FORMAT_DD_MMM_YY_WITH_DASH = `dd-mmm-yy`;
  public static DATE_FORMAT_DD_MMMM_YY_WITH_DASH = `dd-mmmm-yy`;
  public static DATE_FORMAT_DD_M_YYYY_WITH_DASH = `dd-m-yyyy`;
  public static DATE_FORMAT_DD_MM_YYYY_WITH_DASH = `dd-mm-yyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY_WITH_DASH = `dd-mmm-yyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY_WITH_DASH = `dd-mmmm-yyyy`;
  public static DATE_FORMAT_M_DD_YY_WITH_DASH = `m-dd-yy`;
  public static DATE_FORMAT_MM_DD_YY_WITH_DASH = `mm-dd-yy`;
  public static DATE_FORMAT_MMM_DD_YY_WITH_DASH = `mmm-dd-yy`;
  public static DATE_FORMAT_MMMM_DD_YY_WITH_DASH = `mmmm-dd-yy`;
  public static DATE_FORMAT_M_DD_YYYY_WITH_DASH = `m-dd-yyyy`;
  public static DATE_FORMAT_MM_DD_YYYY_WITH_DASH = `mm-dd-yyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY_WITH_DASH = `mmm-dd-yyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY_WITH_DASH = `mmmm-dd-yyyy`;
  public static DATE_FORMAT_M_YY_WITH_DASH = `m-yy`;
  public static DATE_FORMAT_MM_YY_WITH_DASH = `mm-yy`;
  public static DATE_FORMAT_MMM_YY_WITH_DASH = `mmm-yy`;
  public static DATE_FORMAT_MMMM_YY_WITH_DASH = `mmmm-yy`;
  public static DATE_FORMAT_M_YYYY_WITH_DASH = `m-yyyy`;
  public static DATE_FORMAT_MM_YYYY_WITH_DASH = `mm-yyyy`;
  public static DATE_FORMAT_MMM_YYYY_WITH_DASH = `mmm-yyyy`;
  public static DATE_FORMAT_MMMM_YYYY_WITH_DASH = `mmmm-yyyy`;
  public static DATE_FORMAT_YY_M_DD_WITH_DASH = `yy-m-dd`;
  public static DATE_FORMAT_YY_MM_DD_WITH_DASH = `yy-mm-dd`;
  public static DATE_FORMAT_YY_MMM_DD_WITH_DASH = `yy-mmm-dd`;
  public static DATE_FORMAT_YY_MMMM_DD_WITH_DASH = `yy-mmmm-dd`;
  public static DATE_FORMAT_YYYY_M_DD_WITH_DASH = `yyyy-m-dd`;
  public static DATE_FORMAT_YYYY_MM_DD_WITH_DASH = `yyyy-mm-dd`;
  public static DATE_FORMAT_YYYY_MMM_DD_WITH_DASH = `yyyy-mmm-dd`;
  public static DATE_FORMAT_YYYY_MMMM_DD_WITH_DASH = `yyyy-mmmm-dd`;
  public static DATE_FORMAT_YY_M_WITH_DASH = `yy-m`;
  public static DATE_FORMAT_YY_MM_WITH_DASH = `yy-mm`;
  public static DATE_FORMAT_YY_MMM_WITH_DASH = `yy-mmm`;
  public static DATE_FORMAT_YY_MMMM_WITH_DASH = `yy-mmmm`;
  public static DATE_FORMAT_YYYY_M_WITH_DASH = `yyyy-m`;
  public static DATE_FORMAT_YYYY_MM_WITH_DASH = `yyyy-mm`;
  public static DATE_FORMAT_YYYY_MMM_WITH_DASH = `yyyy-mmm`;
  public static DATE_FORMAT_YYYY_MMMM_WITH_DASH = `yyyy-mmmm`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS_WITH_DASH = `dd-m-yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS_WITH_DASH = `dd-mm-yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS_WITH_DASH = `dd-mmm-yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS_WITH_DASH = `dd-mmmm-yy HH:MM:SS`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS_WITH_DASH = `dd-m-yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS_WITH_DASH = `dd-mm-yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS_WITH_DASH = `dd-mmm-yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS_WITH_DASH = `dd-mmmm-yyyy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS_WITH_DASH = `m-dd-yy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS_WITH_DASH = `mm-dd-yy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS_WITH_DASH = `mmm-dd-yy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS_WITH_DASH = `mmmm-dd-yy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_DASH = `m-dd-yyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_DASH = `mm-dd-yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_DASH = `mmm-dd-yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_DASH = `mmmm-dd-yyyy HH:MM:SS`;
  public static DATE_FORMAT_M_YY_HH_MM_SS_WITH_DASH = `m-yy HH:MM:SS`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS_WITH_DASH = `mm-yy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS_WITH_DASH = `mmm-yy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS_WITH_DASH = `mmmm-yy HH:MM:SS`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS_WITH_DASH = `m-yyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS_WITH_DASH = `mm-yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS_WITH_DASH = `mmm-yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS_WITH_DASH = `mmmm-yyyy HH:MM:SS`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS_WITH_DASH = `yy-m-dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS_WITH_DASH = `yy-mm-dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS_WITH_DASH = `yy-mmm-dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS_WITH_DASH = `yy-mmmm-dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS_WITH_DASH = `yyyy-m-dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS_WITH_DASH = `yyyy-mm-dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS_WITH_DASH = `yyyy-mmm-dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS_WITH_DASH = `yyyy-mmmm-dd HH:MM:SS`;
  public static DATE_FORMAT_YY_M_HH_MM_SS_WITH_DASH = `yy-m HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS_WITH_DASH = `yy-mm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS_WITH_DASH = `yy-mmm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS_WITH_DASH = `yy-mmmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS_WITH_DASH = `yyyy-m HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS_WITH_DASH = `yyyy-mm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS_WITH_DASH = `yyyy-mmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS_WITH_DASH = `yyyy-mmmm HH:MM:SS`;

  public static DATE_FORMAT_DD_M_YY_WITH_DOT = `dd.m.yy`;
  public static DATE_FORMAT_DD_MM_YY_WITH_DOT = `dd.mm.yy`;
  public static DATE_FORMAT_DD_MMM_YY_WITH_DOT = `dd.mmm.yy`;
  public static DATE_FORMAT_DD_MMMM_YY_WITH_DOT = `dd.mmmm.yy`;
  public static DATE_FORMAT_DD_M_YYYY_WITH_DOT = `dd.m.yyyy`;
  public static DATE_FORMAT_DD_MM_YYYY_WITH_DOT = `dd.mm.yyyy`;
  public static DATE_FORMAT_DD_MMM_YYYY_WITH_DOT = `dd.mmm.yyyy`;
  public static DATE_FORMAT_DD_MMMM_YYYY_WITH_DOT = `dd.mmmm.yyyy`;
  public static DATE_FORMAT_M_DD_YY_WITH_DOT = `m.dd.yy`;
  public static DATE_FORMAT_MM_DD_YY_WITH_DOT = `mm.dd.yy`;
  public static DATE_FORMAT_MMM_DD_YY_WITH_DOT = `mmm.dd.yy`;
  public static DATE_FORMAT_MMMM_DD_YY_WITH_DOT = `mmmm.dd.yy`;
  public static DATE_FORMAT_M_DD_YYYY_WITH_DOT = `m.dd.yyyy`;
  public static DATE_FORMAT_MM_DD_YYYY_WITH_DOT = `mm.dd.yyyy`;
  public static DATE_FORMAT_MMM_DD_YYYY_WITH_DOT = `mmm.dd.yyyy`;
  public static DATE_FORMAT_MMMM_DD_YYYY_WITH_DOT = `mmmm.dd.yyyy`;
  public static DATE_FORMAT_M_YY_WITH_DOT = `m.yy`;
  public static DATE_FORMAT_MM_YY_WITH_DOT = `mm.yy`;
  public static DATE_FORMAT_MMM_YY_WITH_DOT = `mmm.yy`;
  public static DATE_FORMAT_MMMM_YY_WITH_DOT = `mmmm.yy`;
  public static DATE_FORMAT_M_YYYY_WITH_DOT = `m.yyyy`;
  public static DATE_FORMAT_MM_YYYY_WITH_DOT = `mm.yyyy`;
  public static DATE_FORMAT_MMM_YYYY_WITH_DOT = `mmm.yyyy`;
  public static DATE_FORMAT_MMMM_YYYY_WITH_DOT = `mmmm.yyyy`;
  public static DATE_FORMAT_YY_M_DD_WITH_DOT = `yy.m.dd`;
  public static DATE_FORMAT_YY_MM_DD_WITH_DOT = `yy.mm.dd`;
  public static DATE_FORMAT_YY_MMM_DD_WITH_DOT = `yy.mmm.dd`;
  public static DATE_FORMAT_YY_MMMM_DD_WITH_DOT = `yy.mmmm.dd`;
  public static DATE_FORMAT_YYYY_M_DD_WITH_DOT = `yyyy.m.dd`;
  public static DATE_FORMAT_YYYY_MM_DD_WITH_DOT = `yyyy.mm.dd`;
  public static DATE_FORMAT_YYYY_MMM_DD_WITH_DOT = `yyyy.mmm.dd`;
  public static DATE_FORMAT_YYYY_MMMM_DD_WITH_DOT = `yyyy.mmmm.dd`;
  public static DATE_FORMAT_YY_M_WITH_DOT = `yy.m`;
  public static DATE_FORMAT_YY_MM_WITH_DOT = `yy.mm`;
  public static DATE_FORMAT_YY_MMM_WITH_DOT = `yy.mmm`;
  public static DATE_FORMAT_YY_MMMM_WITH_DOT = `yy.mmmm`;
  public static DATE_FORMAT_YYYY_M_WITH_DOT = `yyyy.m`;
  public static DATE_FORMAT_YYYY_MM_WITH_DOT = `yyyy.mm`;
  public static DATE_FORMAT_YYYY_MMM_WITH_DOT = `yyyy.mmm`;
  public static DATE_FORMAT_YYYY_MMMM_WITH_DOT = `yyyy.mmmm`;
  public static DATE_FORMAT_DD_M_YY_HH_MM_SS_WITH_DOT = `dd.m.yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YY_HH_MM_SS_WITH_DOT = `dd.mm.yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YY_HH_MM_SS_WITH_DOT = `dd.mmm.yy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YY_HH_MM_SS_WITH_DOT = `dd.mmmm.yy HH:MM:SS`;
  public static DATE_FORMAT_DD_M_YYYY_HH_MM_SS_WITH_DOT = `dd.m.yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MM_YYYY_HH_MM_SS_WITH_DOT = `dd.mm.yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMM_YYYY_HH_MM_SS_WITH_DOT = `dd.mmm.yyyy HH:MM:SS`;
  public static DATE_FORMAT_DD_MMMM_YYYY_HH_MM_SS_WITH_DOT = `dd.mmmm.yyyy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YY_HH_MM_SS_WITH_DOT = `m.dd.yy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YY_HH_MM_SS_WITH_DOT = `mm.dd.yy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YY_HH_MM_SS_WITH_DOT = `mmm.dd.yy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YY_HH_MM_SS_WITH_DOT = `mmmm.dd.yy HH:MM:SS`;
  public static DATE_FORMAT_M_DD_YYYY_HH_MM_SS_WITH_DOT = `m.dd.yyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_DD_YYYY_HH_MM_SS_WITH_DOT = `mm.dd.yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_DD_YYYY_HH_MM_SS_WITH_DOT = `mmm.dd.yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_DD_YYYY_HH_MM_SS_WITH_DOT = `mmmm.dd.yyyy HH:MM:SS`;
  public static DATE_FORMAT_M_YY_HH_MM_SS_WITH_DOT = `m.yy HH:MM:SS`;
  public static DATE_FORMAT_MM_YY_HH_MM_SS_WITH_DOT = `mm.yy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YY_HH_MM_SS_WITH_DOT = `mmm.yy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YY_HH_MM_SS_WITH_DOT = `mmmm.yy HH:MM:SS`;
  public static DATE_FORMAT_M_YYYY_HH_MM_SS_WITH_DOT = `m.yyyy HH:MM:SS`;
  public static DATE_FORMAT_MM_YYYY_HH_MM_SS_WITH_DOT = `mm.yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMM_YYYY_HH_MM_SS_WITH_DOT = `mmm.yyyy HH:MM:SS`;
  public static DATE_FORMAT_MMMM_YYYY_HH_MM_SS_WITH_DOT = `mmmm.yyyy HH:MM:SS`;
  public static DATE_FORMAT_YY_M_DD_HH_MM_SS_WITH_DOT = `yy.m.dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_DD_HH_MM_SS_WITH_DOT = `yy.mm.dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_DD_HH_MM_SS_WITH_DOT = `yy.mmm.dd HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_DD_HH_MM_SS_WITH_DOT = `yy.mmmm.dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_DD_HH_MM_SS_WITH_DOT = `yyyy.m.dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_DD_HH_MM_SS_WITH_DOT = `yyyy.mm.dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_DD_HH_MM_SS_WITH_DOT = `yyyy.mmm.dd HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_DD_HH_MM_SS_WITH_DOT = `yyyy.mmmm.dd HH:MM:SS`;
  public static DATE_FORMAT_YY_M_HH_MM_SS_WITH_DOT = `yy.m HH:MM:SS`;
  public static DATE_FORMAT_YY_MM_HH_MM_SS_WITH_DOT = `yy.mm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMM_HH_MM_SS_WITH_DOT = `yy.mmm HH:MM:SS`;
  public static DATE_FORMAT_YY_MMMM_HH_MM_SS_WITH_DOT = `yy.mmmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_M_HH_MM_SS_WITH_DOT = `yyyy.m HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MM_HH_MM_SS_WITH_DOT = `yyyy.mm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMM_HH_MM_SS_WITH_DOT = `yyyy.mmm HH:MM:SS`;
  public static DATE_FORMAT_YYYY_MMMM_HH_MM_SS_WITH_DOT = `yyyy.mmmm HH:MM:SS`;

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
        GeneralUtils.padLeft(date.getMilliseconds(), '000'),
        '000'
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
    return [dp.year, dp.month, dp.day].join('-').trim();
  };
  public static yyyymmddDotSeparator = () => {
    const dp = DateUtils.DateParts();
    return [dp.year, dp.month, dp.day].join('.').trim();
  };
  public static hms = () => {
    const dp = DateUtils.DateParts();
    return [dp.hour, dp.minutes, dp.seconds].join(':').trim();
  };
  public static Thms = () => {
    return `T${DateUtils.hms()}`.trim();
  };
  public static ThmsZ0200 = () => {
    return `${DateUtils.Thms()}+0200`.trim();
  };
  public static hmsms = () => {
    const dp = DateUtils.DateParts();
    return [[dp.hour, dp.minutes, dp.seconds].join(':').trim(), dp.ms]
      .join('.')
      .trim();
  };
  public static Thmsms = () => {
    return `T${DateUtils.hmsms()}`.trim();
  };
  public static ThmsmsZ0200 = () => {
    return `${DateUtils.Thmsms()}+0200`.trim();
  };
  public static yyyymmddhms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.hms()].join(' ').trim();
  };
  public static yyyymmddhmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.hms()]
      .join(' ')
      .trim();
  };
  public static yyyymmddhmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.hms()].join(' ').trim();
  };
  public static yyyymmddhmsms = () => {
    return [DateUtils.yyyymmdd(), DateUtils.hmsms()].join(' ').trim();
  };
  public static yyyymmddhmsmsDashSeparator = () => {
    return [DateUtils.yyyymmddDashSeparator(), DateUtils.hmsms()]
      .join(' ')
      .trim();
  };
  public static yyyymmddhmsmsDotSeparator = () => {
    return [DateUtils.yyyymmddDotSeparator(), DateUtils.hmsms()]
      .join(' ')
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
    // for the day we selected let's get the previous month last day
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
      .join('-')
      .trim();
  };
  public static formatDateMMDDYYWithDashSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join('-')
      .trim();
  };
  public static formatDateYYMMDDWithDotSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join('.')
      .trim();
  };
  public static formatDateMMDDYYWithDotSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join('.')
      .trim();
  };
  public static formatDateYYMMDDWithSlashSeparator = (date: Date) => {
    return [
      date.getFullYear(),
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
    ]
      .join('/')
      .trim();
  };
  public static formatDateMMDDYYWithSlashSeparator = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getMonth() + 1),
      GeneralUtils.appendLeadingZero(date.getDate()),
      date.getFullYear(),
    ]
      .join('/')
      .trim();
  };
  public static formatDateYYYYMMDDHMSDashSeparator = (date: Date) => {
    return [
      DateUtils.formatDateMMDDYYWithDashSeparator(date),
      DateUtils.formatDateHMS(date),
    ]
      .join(' ')
      .trim();
  };
  public static formatDateHMS = (date: Date) => {
    return [
      GeneralUtils.appendLeadingZero(date.getHours()),
      GeneralUtils.appendLeadingZero(date.getMinutes()),
      GeneralUtils.appendLeadingZero(date.getSeconds()),
    ]
      .join(':')
      .trim();
  };
  public static timeAgo = (time) => {
    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time).getTime();
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    const timeFormats = [
      [60, 'seconds', 1], // 60
      [120, '1 minute ago', '1 minute from now'], // 60*2
      [3600, 'minutes', 60], // 60*60, 60
      [7200, '1 hour ago', '1 hour from now'], // 60*60*2
      [86400, 'hours', 3600], // 60*60*24, 60*60
      [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
      [604800, 'days', 86400], // 60*60*24*7, 60*60*24
      [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
      [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
      [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
      [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
      [58060800000, 'centuries', 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    let seconds = (+new Date() - time) / 1000;
    let token = 'ago';
    let listChoice = 1;

    if (seconds === 0) {
      return 'Just now';
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'from now';
      listChoice = 2;
    }
    let i = 0;
    let format;
    // tslint:disable-next-line:no-conditional-assignment
    while ((format = timeFormats[i++])) {
      if (seconds < format[0]) {
        if (typeof format[2] === 'string') {
          return format[listChoice];
        } else {
          return (
            Math.abs(Math.floor(seconds / format[2])) +
            ' ' +
            format[1] +
            ' ' +
            token
          );
        }
      }
    }
    return time;
  };
}
