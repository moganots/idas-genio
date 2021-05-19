/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - Authentication controller class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const dbContext = require(`../../../database/mssql/context/context-idas-genio-db-mssql`);
const { onHttpRequestCompleted } = require(`../../../common/logging/logger`);
const { isEmptyString } = require(`../../../common/functions`);

/*
|------------------------------------------------------------------------------------------------------------------
| Functions
|------------------------------------------------------------------------------------------------------------------
 */
const Controller = (config = getDefaultConfig()) => {
    const register = (request, response, next) => {

    }
    const loginSso = (request, response, next) => {

    }
    const login = (request, response, next) => {
        try{
            const uid = request.body.uid;
            const password = request.body.password;
            if(isEmptyString(uid) && isEmptyString(password)){
                return onHttpRequestCompleted(__filename, request, response, {message: `UserID (Email Address) and Password not provided`});
            }else if(isEmptyString(uid)){
                return onHttpRequestCompleted(__filename, request, response, {message: `UserID (Email Address) not provided`});
            }else if(isEmptyString(password)){
                return onHttpRequestCompleted(__filename, request, response, {message: `Password not provided`});
            }
            dbContext(request.query.uid).executeScalarFunction(`dbo`, `GetUserProfile`, [{ UID: uid }], function (error, data, message) {
                return onHttpRequestCompleted(__filename, request, response, error, message, data);
            });
        }catch(error){
            return onHttpRequestCompleted(__filename, request, response, error);
        }finally{}
    }
    const logout = (request, response, next) => {
        console.log(request);
    }
    const validateToken = (request, response, next) => {

    }
    const cancelToken = (request, response, next) => {

    }

    /*
    |------------------------------------------------------------------------------------------------------------------
    | Function Return(s)
    |------------------------------------------------------------------------------------------------------------------
     */
    return {
        register: register,
        loginSso: loginSso,
        login: login,
        logout: logout,
        validateToken: validateToken,
        cancelToken: cancelToken
    };

}
const getDefaultConfig = () => { return require(`../../../config/config`); }

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Controller;
