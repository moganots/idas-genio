/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2022-02-09
| Description:	IDAS - Genio - API - MS SQL Entity (Model) utility class for the [dbo].[Employee] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Employee = () => {
	const fromEntity = (entity = {}) => {
		return fromComponents(entity._id, entity.SalutationId, entity.Name, entity.MiddleName, entity.Surname, entity.IdNumber, entity.BirthDate, entity.GenderId, entity.EmploymentTypeId, entity.PositionId, entity.DepartmentId, entity.ManagerId, entity.DateHired, entity.EmployeeNumber, entity.IsTerminated, entity.DateTerminated, entity.IsActive, entity.CreatedBy, entity.DateCreated, entity.ModifiedBy, entity.DateModified);
	}
	const fromComponents = (_id, SalutationId, Name, MiddleName, Surname, IdNumber, BirthDate, GenderId, EmploymentTypeId, PositionId, DepartmentId, ManagerId, DateHired, EmployeeNumber, IsTerminated, DateTerminated, IsActive, CreatedBy, DateCreated, ModifiedBy, DateModified) => {
		return {
			_id: _id,
			SalutationId: SalutationId,
			Name: Name,
			MiddleName: MiddleName,
			Surname: Surname,
			IdNumber: IdNumber,
			BirthDate: BirthDate,
			GenderId: GenderId,
			EmploymentTypeId: EmploymentTypeId,
			PositionId: PositionId,
			DepartmentId: DepartmentId,
			ManagerId: ManagerId,
			DateHired: DateHired,
			EmployeeNumber: EmployeeNumber,
			IsTerminated: IsTerminated,
			DateTerminated: DateTerminated,
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
module.exports = Employee;
