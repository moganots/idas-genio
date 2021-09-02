/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-31
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[ContactDetail] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const ContactDetail = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.EmployeeId, entity.ClientId, entity.SupplierId, entity.RecipientsName, entity.EmailAddress, entity.HomeTelephoneNumber, entity.OfficeTelephoneNumber, entity.MobileTelephoneNumber, entity.Website, entity.AddressLine1, entity.AddressLine2, entity.City, entity.ProvinceId, entity.PostalCode, entity.CountryId, entity.PreferredLanguageId, entity.UseEmailAddress, entity.UseHomeTelephoneNumber, entity.UseOfficeTelephoneNumber, entity.UseMobileTelephoneNumber, entity.UsePostalAddress, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, EmployeeId, ClientId, SupplierId, RecipientsName, EmailAddress, HomeTelephoneNumber, OfficeTelephoneNumber, MobileTelephoneNumber, Website, AddressLine1, AddressLine2, City, ProvinceId, PostalCode, CountryId, PreferredLanguageId, UseEmailAddress, UseHomeTelephoneNumber, UseOfficeTelephoneNumber, UseMobileTelephoneNumber, UsePostalAddress, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			EmployeeId: EmployeeId,
			ClientId: ClientId,
			SupplierId: SupplierId,
			RecipientsName: RecipientsName,
			EmailAddress: EmailAddress,
			HomeTelephoneNumber: HomeTelephoneNumber,
			OfficeTelephoneNumber: OfficeTelephoneNumber,
			MobileTelephoneNumber: MobileTelephoneNumber,
			Website: Website,
			AddressLine1: AddressLine1,
			AddressLine2: AddressLine2,
			City: City,
			ProvinceId: ProvinceId,
			PostalCode: PostalCode,
			CountryId: CountryId,
			PreferredLanguageId: PreferredLanguageId,
			UseEmailAddress: UseEmailAddress,
			UseHomeTelephoneNumber: UseHomeTelephoneNumber,
			UseOfficeTelephoneNumber: UseOfficeTelephoneNumber,
			UseMobileTelephoneNumber: UseMobileTelephoneNumber,
			UsePostalAddress: UsePostalAddress,
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
module.exports = ContactDetail;
