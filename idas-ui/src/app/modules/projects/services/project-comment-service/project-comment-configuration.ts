import { DataColumn } from 'app/shared/app-shared.module';

export class ProjectCommentConfiguration {
  public static identifier = 'project-comment';
  public static pageIcon = 'comment';
  public static pageRoute = 'projects/project/:projectId/comments';
  public static pageRouteTitle = 'My Project Comment(s)';
  public static pageRouteCssClass = ``;
  public static pageTitle = `Manage Project Comment(s)`;
  public static pageName = `Manage Project Comment(s)`;
  public static tableHeading = 'Manage Project Comment(s)';
  public static graphHeading = ``;
  public static buildingBlockLabel = ``;
  public static dataColumns = [
    {id: 1, name: `_id` , canShow: false, canSort: true, canGroup: false},
    {id: 2, name: `ProjectId` , canShow: true, canSort: true, canGroup: false},
    {id: 3, name: `Comment` , canShow: true, canSort: true, canGroup: false},
    {id: 4, name: `IsActive` , canShow: true, canSort: true, canGroup: false},
    {id: 5, name: `CreatedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 6, name: `DateCreated` , canShow: false, canSort: true, canGroup: false},
    {id: 7, name: `ModifiedBy` , canShow: false, canSort: true, canGroup: false},
    {id: 8, name: `DateModified` , canShow: false, canSort: true, canGroup: false},
  ].map((sdc) => {
    return new DataColumn(sdc);
  });
}
