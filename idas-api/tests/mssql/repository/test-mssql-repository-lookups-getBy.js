console.log(`\r\n===> Start Test:\r\n${__filename}`);
const _lookupCategoryRepository = require(`../../../database/repository/mssql/LookupCategoryRepository`);
const _lookupValueRepository = require(`../../../database/repository/mssql/LookupValueRepository`);
const lookupCategoryRepository = _lookupCategoryRepository();
const lookupValueRepository = _lookupValueRepository();
const result = repository.getAll();

console.log(result)