/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-10
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[FileAttachment] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const FileAttachment = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.ProjectId, entity.TaskId, entity.CalendarEventId, entity.FileName, entity.FileExtension, entity.ContentType, entity.FileContent, entity.FileSize, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, ProjectId, TaskId, CalendarEventId, FileName, FileExtension, ContentType, FileContent, FileSize, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			ProjectId: ProjectId,
			TaskId: TaskId,
			CalendarEventId: CalendarEventId,
			FileName: FileName,
			FileExtension: FileExtension,
			ContentType: ContentType,
			FileContent: FileContent,
			FileSize: FileSize,
			IsActive: IsActive,
			CreatedBy: CreatedBy,
			DateCreated: DateCreated,
			ModifiedBy: ModifiedBy,
			DateModified: DateModified,
		}
	}
	return {
		fromEntity: fromEntity,
		fromComponents: fromComponents
	}
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
module.exports = FileAttachment;
