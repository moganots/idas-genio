/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-09
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[MenuItem] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const MenuItem = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.Title, entity.Path, entity.Image, entity.Icon, entity.Component, entity.Configuration, entity.CssClass, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, Title, Path, Image, Icon, Component, Configuration, CssClass, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			Title: Title,
			Path: Path,
			Image: Image,
			Icon: Icon,
			Component: Component,
			Configuration: Configuration,
			CssClass: CssClass,
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
module.exports = MenuItem;
