/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-11
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[EntityRelationship] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const EntityRelationship = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.ParentEntityId, entity.ParentEntityColumnName, entity.ChildEntityId, entity.ChildEntityColumnName, entity.RelationshipName, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, ParentEntityId, ParentEntityColumnName, ChildEntityId, ChildEntityColumnName, RelationshipName, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			ParentEntityId: ParentEntityId,
			ParentEntityColumnName: ParentEntityColumnName,
			ChildEntityId: ChildEntityId,
			ChildEntityColumnName: ChildEntityColumnName,
			RelationshipName: RelationshipName,
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
module.exports = EntityRelationship;
