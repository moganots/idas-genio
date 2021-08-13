/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - IdasGenioDB MS SQL database context utilities class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const _dbContext = require(`./mssql-db-context`);
const {
  isNotEmptyString,
  isNotEmptyObject,
  isNotNaN,
  toLocaleLowerCaseTrim,
  hasValues,
} = require(`./../../../common/functions`);
const {
  yyyymmddhmsmsWithDashSeparator,
} = require("./../../../common/date-util");

/*
|------------------------------------------------------------------------------------------------------------------
| Function(s)
|------------------------------------------------------------------------------------------------------------------
 */
const DatabaseContext = () => {
  const dbContext = _dbContext(getDefaultConnectionConfig());
  const create = (uid, entityName, entity, callback) => {
    try {
      if (
        isNotNaN(uid) &&
        isNotEmptyString(entityName) &&
        isNotEmptyObject(entity)
      ) {
        entity.CreatedBy = uid;
        entity.DateCreated = yyyymmddhmsmsWithDashSeparator();
        dbContext.executeStoredProcedure(
          `dbo`,
          getStoredProcedureName(`create`, entityName),
          entity,
          false,
          callback
        );
      }
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const getAll = (uid, entityName, callback) => {
    try {
      if (isNotNaN(uid) && isNotEmptyString(entityName)) {
        dbContext.executeStoredProcedure(
          `dbo`,
          getStoredProcedureName(`fetch`, entityName),
          {},
          false,
          callback
        );
      }
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const getById = (uid, entityName, entityId, callback) => {
    try {
      if (isNotNaN(uid) && isNotEmptyString(entityName) && isNotNaN(entityId)) {
        dbContext.executeStoredProcedure(
          `dbo`,
          getStoredProcedureName(`fetch`, entityName),
          { _id: entityId },
          false,
          callback
        );
      }
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const getBy = (uid, entityName, parameters, callback) => {
    try {
      if (
        isNotNaN(uid) &&
        isNotEmptyString(entityName) &&
        (isNotEmptyObject(parameters) || hasValues(parameters))
      ) {
        dbContext.executeStoredProcedure(
          `dbo`,
          getStoredProcedureName(`fetch`, entityName),
          parameters,
          false,
          callback
        );
      }
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const update = (uid, entityName, entity, callback) => {
    try {
      if (
        isNotNaN(uid) &&
        isNotEmptyString(entityName) &&
        isNotEmptyObject(entity)
      ) {
        entity.ModifiedBy = uid;
        entity.DateModified = yyyymmddhmsmsWithDashSeparator();
        dbContext.executeStoredProcedure(
          `dbo`,
          getStoredProcedureName(`update`, entityName),
          entity,
          false,
          callback
        );
      }
    } catch (error) {
      callback(error);
    } finally {
    }
  };
  const _delete = (uid, entityName, entityId, callback) => {
    try {
      if (isNotNaN(uid) && isNotEmptyString(entityName) && isNotNaN(entityId)) {
        dbContext.executeStoredProcedure(
          `dbo`,
          getStoredProcedureName(`delete`, entityName),
          { _id: entityId, ModifiedBy: uid },
          false,
          callback
        );
      }
    } catch (error) {
      callback(error);
    } finally {
    }
  };

  /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
  return {
    create: create,
    getAll: getAll,
    getById: getById,
    getBy: getBy,
    update: update,
    delete: _delete,
    executeScalarFunction: dbContext.executeScalarFunction,
    executeTableFunction: dbContext.executeTableFunction,
    executeStoredProcedure: dbContext.executeStoredProcedure,
  };
};
const getDefaultConnectionConfig = () => {
  return require(`../../../config/database/mssql/idas-genio/config`)
    .connectionString;
};
const getStoredProcedureName = (action, entityName) => {
  switch (toLocaleLowerCaseTrim(action)) {
    case `create`:
    case `insert`:
    case `new`:
      return `spCreateOrInsert_${entityName}`;
    case `fetch`:
    case `get`:
    case `getAll`:
    case `getById`:
    case `getBy`:
      return `spFetchOrSelect_${entityName}`;
    case `change`:
    case `edit`:
    case `update`:
      return `spEditOrUpdate_${entityName}`;
    case `archive`:
    case `delete`:
    case `remove`:
      return `spArchiveOrDelete_${entityName}`;
  }
};

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = DatabaseContext;
