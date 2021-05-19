/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - HTTP utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const { toBase64, getBytes, getLast } = require(`./functions`);
const http = require(`http`);
const https = require(`https`);

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const setApiUri = (protocol, host, portNumber = null, relativeUrl = null) => {
    return `${protocol}://${host}${(portNumber) ? `:${portNumber}` : ``}${(relativeUrl) ? `${relativeUrl}` : ``}`.trim();
}
const setAgent = (protocol = `http`) => {
    switch(protocol.toLocaleLowerCase()){
        case `https`: return new https.Agent({
            rejectUnauthorized: false
        });
        default: return new http.Agent({
            rejectUnauthorized: false
        });
    }
}
const setHeaders = (contentType = `application/json`, uid = null, pwd = null, token = null) => {
    return {
        'Content-Type': contentType,
        'Private-Token': setAuthorization(uid, pwd, token)
    };
}
const setAuthorization = (uid = null, pwd = null, token = null) => {
    if(uid && pwd && !token){
        // Basic authentication
        return `Basic ${toBase64(getBytes(`${uid}:${pwd}`))}`;
    }else if(token){
        // Tokenized or Bearer authentication
        return `Bearer ${token}`;
    }
    return null;
}
const getHttpRequestUriPath = (request) => {
  if(request === null || request === undefined) return null;
  let port = getLast(request.socket.server._connectionKey, `:`);
  return `${request.method}->${request.protocol}://${request.hostname}${(port) ? `:${port}` : ``}${request.path}`.trim();
}
const getHttpRequestMethodName = (request) => {
  return getLast(getHttpRequestUriPath(request), `/`);
}

module.exports = {
    setApiUri: setApiUri,
    setAgent: setAgent,
    setHeaders: setHeaders,
    setAuthorization: setAuthorization,
    getHttpRequestUriPath: getHttpRequestUriPath,
    getHttpRequestMethodName: getHttpRequestMethodName
}