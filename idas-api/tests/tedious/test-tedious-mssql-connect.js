console.log(`\r\n===> Start Test:\r\n${__filename}`);
let connectionConfig = {
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
let Connection = require(`tedious`).Connection;

function Test(connectionConfig){
    try{
        let connectionString = getConnectionString(connectionConfig);
        let connection = onInitConnection(connectionConfig, connectionString);
        connection.connect((error) => {
            if(error) { console.log(error); console.error(`failed to connect to the database`); }
            else { console.log(`successfully connected to the database`); }
        });
    }
    catch(error){
        console.log(error);
    }finally{}
    
    function getConnectionString(connectionConfig) {
        return (connectionConfig) ? `
            server: ${connectionConfig.server || `Not specified`},
            instanceName: ${connectionConfig.options.instanceName || `Not specified`},
            authentication.type: ${connectionConfig.authentication.type || `Not specified`},
            authentication.domainName: ${connectionConfig.authentication.options.domain || `Not specified`},
            authentication.userId: ${connectionConfig.authentication.options.userName || `Not specified`},
            authentication.password: ${connectionConfig.authentication.options.password || `Not specified`},
            databaseName: ${connectionConfig.options.database || `Not specified`}` : null;
    }
    
    function onInitConnection(connectionConfig, connectionString) {
        console.info(`Initialising database connection to:\r\n${connectionString.split(`,`).map((cs) => (cs || ``).trim()).join(`\r\n`)}`);
        return new Connection(connectionConfig);
    }

}
Test(connectionConfig);
