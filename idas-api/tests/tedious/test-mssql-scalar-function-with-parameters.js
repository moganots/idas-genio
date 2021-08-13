console.log(`\r\n===> Start Test:\r\n${__filename}`);
const TYPES = require(`tedious`).TYPES;
const { hasValues, toLocaleLowerCaseTrim } = require("./../../common/functions");

const connectionConfig = {
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
const CommandTypes = {
    ScalarFunction: `ScalarFunction`,
    StoredProcedure: `StoredProcedure`,
    TableDirect: `TableDirect`,
    TableFunction: `TableFunction`
}

Object.freeze(CommandTypes);

const schemaName = `dbo`;
const functionName = `GetUserProfile`;
const parameters = [{UID: `root@genio.idas.co.za`}];

function Test(connectionConfig, schemaName, functionName, parameters){
    const Connection = require(`tedious`).Connection;
    const connection = new Connection(connectionConfig);
    connection.connect((err) => {
        if(err) {
            console.error(err);
        }else{
            const parameterNames = getParameterNames(parameters).map((parameter) => `@${parameter}`).join(`,`);
            const command = `SELECT [${(schemaName || 'dbo')}].[${functionName}](${parameterNames}) AS [UserProfile]`;
            const Request = require(`tedious`).Request;
            let data = [];
            let dataset = [];
            const request = new Request(command, (error, rowCount, rows) => {
                if(error){
                    console.error(error);
                }else{
                    console.log(rowCount);
                    console.log(data);
                }
            });
            addRequestParameters(request, parameters);
            buildRow(request, data);
            ({ dataset, data } = initRequestDoneInProcDataset(request, false, dataset, data));
            connection.execSql(request);
        }
    });
}

Test(connectionConfig, schemaName, functionName, parameters)


const getParameterNames = (parameters = []) => {
    let parameterNames = [];
    if(hasValues(parameters)) {
        parameters.forEach((parameter) =>
        parameterNames.push(Object.getOwnPropertyNames(parameter)[0]));
    }
    return parameterNames;
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
const buildRow = (request, data = []) => {
    try{
        if(request){
            request.on(`row`, (columns) => {
                let row = {};
                columns.forEach((column) => {
                    row[column.metadata.colName] = column.value;
                });
                data.push(row);
            });
        }
    }catch(err){
        error(__filename, `buildRow`, `An error has occured`, err);
    }finally{}
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