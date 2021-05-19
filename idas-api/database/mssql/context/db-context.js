/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - Default MS SQL database context utilities class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Connection = require(`tedious`).Connection;
const TYPES = require('tedious').TYPES;
const { info, error } = require('../../../common/logging/logger');
const { hasValues, toLocaleLowerCaseTrim } = require('../../../common/functions');
const {
    getInfoOnInitMsSqlDbConnectionMessage,
    getInfoOnFetchSuccessfulMessage,
    getInfoOnFetchNoDataMessage
} = require(`./../../messages/dbCommonMessages`);

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const onInitConnection = (connectionConfig, connectionString) => {
    info(__filename, `onInitConnection`, getInfoOnInitMsSqlDbConnectionMessage(connectionString));
    return new Connection(connectionConfig);
}
const setCommand = (model, methodName) => {
    let schemaName = (model.schema || ` `).toString().trim() || null;
    let tableName = (model.tableName || ` `).toString().trim() || null;
    let functionName = (model.functionName || ` `).toString().trim() || null;
    let procedureName = (model.procedureName || ` `).toString().trim() || null;
    let databaseObject = `[${schemaName}].[${tableName || functionName || procedureName}]`
    if(databaseObject){
        let command = (tableName || functionName) ? `SELECT * FROM ${databaseObject}${(functionName) ? `()` : ``}` : `EXEC ${databaseObject}`;
        info(__filename, methodName, `Preparing to execute command...\r\n${command}`);
        return command;
    }
    error(__filename, methodName, `Unable to prepare the command to be executed`);
}
const sendDbResponse = (command, error, rowCount, data, callback) => {
    try{
        if(callback){
            let message = (rowCount >= 1 || hasValues(data))
            ? getInfoOnFetchSuccessfulMessage(command, 'row', rowCount)
            : getInfoOnFetchNoDataMessage(command, 'row');
            callback(error, data, message);
        }else{
            throw `DBContext: failed to execute callback`;
        }
    }catch(error){
        callback(error);
    }finally{}
}
const getParameterNamesWithoutAt = (parameters = []) => {
    return parameters.map((parameter) => Object.getOwnPropertyNames(parameter)[0]);
}
const getParameterNamesWithAt = (parameters = []) => {
    return getParameterNamesWithoutAt(parameters).map((parameter) => `@${parameter}`);
}
const addRequestParameters = (request, parameters = []) => {
    if(request && hasValues(parameters)) {
        parameters.forEach((parameter) => {
            const parameterName = Object.getOwnPropertyNames(parameter)[0];
            const parameterValue = parameter[parameterName];
            const parameterType = (parameterValue instanceof Date) ? 'date' : typeof parameterValue;
            request.addParameter(parameterName, getMsSqlDataType(parameterType), parameterValue);
        });
    }
}
const getMsSqlDataType = (typeName) => {
    switch(toLocaleLowerCaseTrim(typeName || '')){
        case 'boolean': return TYPES.Bit;
        case 'date': return TYPES.DateTime;
        case 'number': return TYPES.BigInt;
        default: return TYPES.NVarChar;
    }
}
const initRequestBuildRow = (request, data) => {
    request.on(`row`, (columns) => {
        buildRow(columns, data);
    });
}
const initRequestDoneInProcDataset = (request, isMultiSet, dataset, data) => {
    request.on(`doneInProc`, function () {
        if (isMultiSet === false) {
            dataset = data;
        } else {
            dataset.push(data);
            data = [];
        }
    });
    return { dataset, data };
}
const buildRow = (columns = [], data = []) => {
    try{
        let row = {};
        columns.forEach((column) => {
            row[column.metadata.colName] = column.value;
        });
        data.push(row);
    }catch(err){
        error(__filename, `buildRow`, `An error has occured`, err);
    }finally{}
}
const onCloseConnection = (connection, request, connectionString) => {
    if(connection && request){
        try{
            connection.closeConnection(request.__connection);
            info(__filename, `onCloseConnection`, `Database connection closing\r\n${addConnectionString(connectionString)}`);
        }catch(err){
            error(__filename, `onCloseConnection`, `An error has occured`, err);
        }finally{}
    }
}
const addConnectionString = (connectionString) => {
    return (connectionString) ? `ConnectionString:\r\n${connectionString.split(`,`).map((cs) => (cs || ``).trim()).join(`\r\n`)}` : `Not specified`;
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| module exports
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
module.exports = {
    onInitConnection: onInitConnection,
    setCommand: setCommand,
    sendDbResponse: sendDbResponse,
    getParameterNamesWithoutAt: getParameterNamesWithoutAt,
    getParameterNamesWithAt: getParameterNamesWithAt,
    addRequestParameters: addRequestParameters,
    initRequestBuildRow: initRequestBuildRow,
    initRequestDoneInProcDataset: initRequestDoneInProcDataset,
    buildRow: buildRow,
    onCloseConnection: onCloseConnection 
}