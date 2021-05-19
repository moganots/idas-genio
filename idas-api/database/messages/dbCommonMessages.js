/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - Database common message(s) utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependencies
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Functions
|------------------------------------------------------------------------------------------------------------------
 */
const getInfoOnInitMsSqlDbConnectionMessage = (connectionString) => { return {type: ``, message: `Initialising MS SQL database connection to:\r\n${addConnectionString(connectionString)}`}; }
const getInfoOnFetchNoDataMessage = (command, modelType) => { return {type: `InfoFetchNoData`, message: `Command executed successfully. No ${modelType} found.\r\n${addCommand(command)}`}; };
const getInfoOnFetchSuccessfulMessage = (command, modelType, rowCount = 0) => { return {type: `InfoFetchWithData`, message: `Command executed successfully. ${rowCount} ${modelType}${(rowCount > 1) ? '(s)' : ''} found\r\n${addCommand(command)}`}; };
const getErrorOnConnectionMessage = (connectionString) => { return {type: `ErrorOnConnection`, message: `Failed to initialise MS SQL database connection to:\r\n${addConnectionString(connectionString)}`}; }

const addConnectionString = (connectionString) => {
    return (connectionString) ? `ConnectionString:\r\n${connectionString.split(`,`).map((cs) => (cs || ``).trim()).join(`\r\n`)}` : `Not specified`;
}
const addCommand = (command) => { return `\r\nCommand: ${command || `Command was not specified`}`.trim(); }

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = {
    getInfoOnInitMsSqlDbConnectionMessage: getInfoOnInitMsSqlDbConnectionMessage,
    getInfoOnFetchNoDataMessage: getInfoOnFetchNoDataMessage,
    getInfoOnFetchSuccessfulMessage: getInfoOnFetchSuccessfulMessage,
    getErrorOnConnectionMessage: getErrorOnConnectionMessage
}
