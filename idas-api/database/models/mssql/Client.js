/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-11
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[Client] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Client = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.SalutationId, entity.Name, entity.Surname, entity.CompanyName, entity.IndustryTypeId, entity.IdNumber, entity.RegistrationNumber, entity.VATNumber, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, SalutationId, Name, Surname, CompanyName, IndustryTypeId, IdNumber, RegistrationNumber, VATNumber, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			SalutationId: SalutationId,
			Name: Name,
			Surname: Surname,
			CompanyName: CompanyName,
			IndustryTypeId: IndustryTypeId,
			IdNumber: IdNumber,
			RegistrationNumber: RegistrationNumber,
			VATNumber: VATNumber,
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
module.exports = Client;
