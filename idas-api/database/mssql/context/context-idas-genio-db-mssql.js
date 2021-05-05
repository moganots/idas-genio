/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio API - IdasGenioDB MS SQL database context utilities class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Connection = require(`tedious`).Connection;
const Request = require(`tedious`).Request;
const { info, error } = require('../../../common/logging/logger');
const { hasValues } = require('../../../common/functions');
const {
    getInfoOnInitMsSqlDbConnectionMessage,
    getInfoOnFetchSuccessfulMessage,
    getInfoOnFetchNoDataMessage
} = require(`./../../messages/dbCommonMessages`);

/*
|------------------------------------------------------------------------------------------------------------------
| Functions
|------------------------------------------------------------------------------------------------------------------
 */
const DatabaseContext = (uid, connectionConfig = getDefaultConnectionConfig()) => {
    const create = (model, entity, callback) => {
        try{

        }catch(error){
            callback(error);
        }finally{}
    }
    const getAll = (model, callback) => {
        try{
            const connection = onInitConnection(connectionConfig, connectionString);
            connection.connect((err) => {
                if(err){
                    callback(err);
                }else{
                    let command = setCommand(model, `getAll`);
                    let data = [];
                    let dataset = [];
                    let request = new Request(command, (error, rowCount) => {
                        sendDbResponse(command, error, rowCount, data, callback);
                        onCloseConnection(connection, request, connectionString);
                    });
                    initRequestBuildRow(request, data);
                    ({ dataset, data } = initRequestDoneInProcDataset(request, false, dataset, data));
                    connection.execSql(request);
                }
            });
        }catch(error){
            callback(error);
        }finally{}
    }
    const getBy = (model, predicate, callback) => {
        try{

        }catch(error){
            callback(error);
        }finally{}
    }
    const update = (model, entity, predicate, callback) => {
        try{

        }catch(error){
            callback(error);
        }finally{}
    }
    const deleteById = (model, id, callback) => {
        try{

        }catch(error){
            callback(error);
        }finally{}
    }
    const connectionString = (connectionConfig) ? `
        server: ${connectionConfig.server || `Not specified`},
        instanceName: ${connectionConfig.options.instanceName || `Not used`},
        authentication.type: ${connectionConfig.authentication.type || `Not specified`},
        authentication.domainName: ${connectionConfig.authentication.options.domain || `Not used`},
        authentication.userId: ${connectionConfig.authentication.options.userName || `Not specified`},
        authentication.password: ${connectionConfig.authentication.options.password || `Not specified`},
        databaseName: ${connectionConfig.options.database || `Not specified`}` : `ConnectionString was not provided`;

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
    return {
        create: create,
        getAll: getAll,
        getBy: getBy,
        update: update,
        deleteById: deleteById,
        connectionString: connectionString
    };

}
const getDefaultConnectionConfig = () => { return require(`./../../../config/database/mssql/idas-genio/config`).connectionString; }
const onInitConnection = (connectionConfig, connectionString) => {
    info(__filename, `onInitConnection`, getInfoOnInitMsSqlDbConnectionMessage(connectionString));
    return new Connection(connectionConfig);
}
const setCommand = (model, methodName) => {
    console.log(model)
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
            ? getInfoOnFetchSuccessfulMessage(command, rowCount)
            : getInfoOnFetchNoDataMessage(command);
            callback(error, data, message);
        }else{
            throw `DBContext: failed to execute callback`;
        }
    }catch(error){
        callback(error);
    }finally{}
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
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = DatabaseContext;
