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
const TestExecuteTableFunctionNoParameters = (schemaName, functionName, parameters = [], isMultiSet = false) => {
    info(__filename, `TestExecuteTableFunctionNoParameters`, `Started`);
    dbContext.executeTableFunction(schemaName, functionName, parameters, isMultiSet, (err, data, message) => {
        if(err){
            error(__filename, `TestExecuteTableFunctionNoParameters`, err);
        }else{
            info(__filename, `TestExecuteTableFunctionNoParameters`, message);
            console.log(`===> Data <===`);
            console.log(data);
        }
    });
    info(__filename, `TestExecuteTableFunctionNoParameters`, `Completed successfully`);
}

const schemaName = `dbo`;
const functionName = `GetAllUsers`;
const parameters = [];
const isMultiSet = false;

TestExecuteTableFunctionNoParameters(schemaName, functionName, parameters, isMultiSet);