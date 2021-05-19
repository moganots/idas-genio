/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - [dbo].[UserProfile] database table model class
|------------------------------------------------------------------------------------------------------------------
 */

const UserProfileSchema = {
    _id: Number,
    EmailAddress: String,
    PasswordHash: String,
    IsAdmin: Boolean,
    IsLocked: Boolean,
    IsActive: Boolean,
    DateLastLoggedIn: Date,
    Employee: Object,
    Client: Object,
    Supplier: Object
}

module.exports = UserProfileSchema;