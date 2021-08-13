/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - JWT authentication utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const { getCipherKey } = require("../encryption/dencryption");
const expressJwt = require(`express-jwt`);
const jwt = require('jsonwebtoken');
const authService = require(`./../../routes/authentication/api`);
const { error } = require(`./../../common/logging/logger`);
const { isEmptyObject, isEmptyString } = require("../functions");
const { DateDiff, toMidnightInHours } = require("../date-util");

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const jwtSecret = getCipherKey();
const securePaths = () => {
    try{
        return expressJwt({ jwtSecret, isRevoked }).unless({
            path: [
                // list of public routes that do not require authentication
                `/api/authentication/loginSso`,
                `/api/authentication/login`
            ]
        });
    }catch(err){
        error(__filename, `jwt`, `An error has occured`, err);
    }finally{}
}    
const isRevoked = async (request, payload, done) => {
    try{
        const user = authService.getLoggedInUser(payload.sub);
        // revoke token if user no longer exists
        if (!user) {
            return done(null, true);
        }
        done();
    }catch(err){
        error(__filename, `isRevoked`, `An error has occured`, err);
    }finally{}
}
const createJwtUserSessionToken = (uid, expiresIn = useDefaultExpiresIn()) => {
    try{
        if(isEmptyObject(uid) || isEmptyString(String(uid))) return null;
        return jwt.sign({uid:uid}, String(jwtSecret), { expiresIn: expiresIn });
    }catch(err){
        error(__filename, `createJwtUserSessionToken`, `An error has occured`, err);
        return null;
    }finally{}
}
const authenticateJwtUserSessionToken = (request, response, next) => {

}
const validateJwtUserSessionToken = (sessionToken) => {
    try{
        if(isEmptyObject(sessionToken) || isEmptyString(String(sessionToken))) return false;
        return jwt.verify(sessionToken, String(jwtSecret), (err, user) => {
            return {user: user, error: err};
        })
    }catch(err){
        error(__filename, `validateJwtUserSessionToken`, `An error has occured`, err);
        return false;
    }finally{}
}
const useDefaultExpiresIn = () => {
    return `${DateDiff.InSeconds(new Date(), toMidnightInHours())}s`;
}
const setSessionTokenExpiresIn = (startDate, endDate) => {
    return `${DateDiff.InSeconds(startDate, endDate)}s`;
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
    securePaths: securePaths,
    setSessionTokenExpiresIn: setSessionTokenExpiresIn,
    createJwtUserSessionToken: createJwtUserSessionToken,
    authenticateJwtUserSessionToken: authenticateJwtUserSessionToken,
    validateJwtUserSessionToken: validateJwtUserSessionToken
};