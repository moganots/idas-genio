/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	2021-08-04
| Description:	IDAS - Genio - API - MS SQL Entity (Model) Repository utility class for the [dbo].[LookupValue] Table
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const entityName = `LookupValue`;
const _LookupValue = require(`./../../models/mssql/LookupValue`);
const _dbContext = require(`./../../db-context/mssql/mssql-idas-genio-db-context`);
const { onHttpRequestCompleted } = require(`../../../common/logging/logger`);
const { getRequestQueryParametersWithoutUid } = require(`../../../common/http-helper`);

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const Repository = () => {
    const LookupValue = _LookupValue();
    const dbContext = _dbContext();
    const create = (request, response, next) => {
        try{
            const uid = request.query.uid;
            const entity = LookupValue.fromEntity(request.body);
            dbContext.create(uid, entityName, entity, (error, data, message) => {
                return onHttpRequestCompleted(__filename, request, response, error, data, message);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }
    }
    const getAll = (request, response, next) => {
        try{
            const uid = request.query.uid;
            dbContext.getAll(uid, entityName, (error, data, message) => {
                return onHttpRequestCompleted(__filename, request, response, error, data, message);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }
    }
    const getById = (request, response, next) => {
        try{
            const uid = request.query.uid;
            const entityId = request.query.id;
            dbContext.getById(uid, entityName, entityId, (error, data, message) => {
                return onHttpRequestCompleted(__filename, request, response, error, data, message);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }
    }
    const getBy = (request, response, next) => {
        try{
            const uid = request.query.uid;
            dbContext.getBy(uid, entityName, getRequestQueryParametersWithoutUid(request), (error, data, message) => {
                return onHttpRequestCompleted(__filename, request, response, error, data, message);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }
    }
    const update = (request, response, next) => {
        try{
            const uid = request.query.uid;
            const entity = LookupValue.fromEntity(request.body);
            dbContext.update(uid, entityName, entity, (error, data, message) => {
                return onHttpRequestCompleted(__filename, request, response, error, data, message);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }
    }
    const _delete = (request, response, next) => {
        try{
            const uid = request.query.uid;
            const entity = LookupValue.fromEntity(request.body);
            dbContext.delete(uid, entityName, entity._id, (error, data, message) => {
                return onHttpRequestCompleted(__filename, request, response, error, data, message);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }
    }
    return {
        create: create,
        getAll: getAll,
        getById: getById,
        getBy: getBy,
        update: update,
        delete: _delete,
    }
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
module.exports = Repository;
