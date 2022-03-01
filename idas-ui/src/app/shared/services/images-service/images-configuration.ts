import { DataColumn } from 'app/shared/domain-models/data-column';

export class ImagesConfiguration {
  public static identifier = 'images';
  public static pageIcon = 'image';
  public static pageRoute = 'secure/images';
  public static pageRouteTitle = `Manage Image(s)`;
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Image(s)`;
  public static pageName = `Manage Image(s)`;
  public static tableHeading = `Manage Image(s)`;
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [].map((sdc) => {
    return new DataColumn(sdc);
  });
}
