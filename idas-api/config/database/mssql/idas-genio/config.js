/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - MS SQL database configuration
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = {
    connectionString: {
        server: `localhost`,
        authentication: {
            type: `default`,
            options: {
                domain: `.`,
                userName: `IdasGenioAdminUser`,
                password: `admin@123`
            }
        },
        options: {
            database: `IdasGenioDb`,
            encrypt: false,
            instanceName: `MSSQLSERVER`,
            rowCollectionOnDone: true,
            useColumnNames: false,
        }
    }
}