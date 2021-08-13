console.log(`\r\n===> Start Test:\r\n${__filename}`);
const _dbContext = require(`../../../../../database/db-context/mssql/mssql-idas-genio-db-context`);
const dbContext = _dbContext();
const TestDbCreateOrInsert = (uid, entityName, entity) => {
    dbContext.create(uid, entityName, entity, (error, data, message) => {
        console.log(error);
        console.log(data);
        console.log(message);
    });
}

let uid = {
    _id: 1,
    EmailAddress: `root@genio.idas.co.za`
}
let entityName = `User`;
let entity = {
    "_id": 11,
    "EmployeeId": null,
    "ClientId": null,
    "SupplierId": null,
    "EmailAddress":"test@genio.idas.co.za",
    "PasswordHash":"$2b$10$eoK5EK7xYSdpvHDBACS\/E.NQt.93QdwVLYbHj2ih2mSYychXS3a6u",
    "IsAdmin":true,
    "IsLocked":false,
    "IsActive":true,
    "DateLastLoggedIn":null
 };

TestDbCreateOrInsert(uid._id, entityName, entity);