console.log(`\r\n===> Start Test:\r\n${__filename}`);
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
const {error, info } = require(`../../../../common/logging/logger`);
const _dbContext = require(`../../../../database/db-context/mssql/mssql-db-context`);
const dbContext = _dbContext(connectionConfig);
const TestExecuteTableFunctionWithParameters = (schemaName, functionName, parameters = [], isMultiSet = false) => {
    info(__filename, `TestExecuteTableFunctionWithParameters`, `Started`);
    dbContext.executeTableFunction(schemaName, functionName, parameters, isMultiSet, (err, data, message) => {
        if(err){
            error(__filename, `TestExecuteTableFunctionWithParameters`, err);
        }else{
            info(__filename, `TestExecuteTableFunctionWithParameters`, message);
            console.log(`===> Data <===`);
            console.log(data);
        }
    });
    info(__filename, `TestExecuteTableFunctionWithParameters`, `Completed successfully`);
}

const schemaName = `dbo`;
const functionName = `GetUserBy`;
const parameters = [{UID: `root@genio.idas.co.za`}];
const isMultiSet = false;

TestExecuteTableFunctionWithParameters(schemaName, functionName, parameters, isMultiSet);