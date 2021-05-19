/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - IdasGenioDB MS SQL database context utilities class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Request = require(`tedious`).Request;
const {
    onInitConnection,
    setCommand,
    sendDbResponse,
    getParameterNamesWithAt,
    addRequestParameters,
    initRequestBuildRow,
    initRequestDoneInProcDataset,
    onCloseConnection
} = require('./db-context');

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
    const _delete = (model, id, callback) => {
        try{

        }catch(error){
            callback(error);
        }finally{}
    }
    const executeScalarFunction = (schemaName, functionName, parameters, callback) => {
        try{
            const connection = onInitConnection(connectionConfig, connectionString);
            connection.connect((err) => {
                if(err){
                    callback(err);
                }else{
                    const parameterNames = getParameterNamesWithAt(parameters).join(',');
                    const command = `SELECT [${(schemaName || 'dbo')}].[${functionName}](${parameterNames}) AS [data]`;
                    let data = [];
                    let dataset = [];
                    let request = new Request(command, (error, rowCount) => {
                        sendDbResponse(command, error, rowCount, data, callback);
                        onCloseConnection(connection, request, connectionString);
                    });
                    addRequestParameters(request, parameters);
                    initRequestBuildRow(request, data);
                    ({ dataset, data } = initRequestDoneInProcDataset(request, false, dataset, data));
                    connection.execSql(request);
                }
            });
        }catch(error){
            callback(error);
        }finally{}
    }
    const executeStoredProc = (storedProcName, parameters = []) => {
        
    }
    const executeTableFunction = (functionName, parameters = []) => {
        
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
        _delete: _delete,
        executeScalarFunction: executeScalarFunction,
        executeStoredProc: executeStoredProc,
        executeTableFunction: executeTableFunction,
        connectionString: connectionString
    };

}
const getDefaultConnectionConfig = () => { return require(`./../../../config/database/mssql/idas-genio/config`).connectionString; }

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = DatabaseContext;
