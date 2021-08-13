/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - HTTP utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

const { toBase64, getBytes, getLast, isObjectSet, isNotEmptyString, NullIfEmptyObject } = require(`./functions`);
const http = require(`http`);
const https = require(`https`);

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
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
const getHttpRequestPacket = (request) => {
    if(!isObjectSet(request)) return {};
    const method = request.method;
    const protocol = request.protocol;
    const hostname = request.hostname;
    const port = getLast(request.socket.server._connectionKey, `:`);
    const baseUrl = request.baseUrl;
    const relativeUrl = request.path;
    const absoluteUrl = `${protocol}://${hostname}${(isNotEmptyString(port)) ? `:${port}` : ''}${baseUrl}${relativeUrl}`;
    return {
        contentType: request.headers['content-type'],
        method: method,
        protocol: protocol,
        hostname: hostname,
        port: port,
        baseUrl: baseUrl,
        relativeUrl: relativeUrl,
        absoluteUrl: absoluteUrl,
        absoluteUrlWithHttpMethod: `${method}->${absoluteUrl}`,
        anchorName: relativeUrl.split(`/`).slice(-2, -1)[0],
        action: relativeUrl.split(`/`).slice(-1)[0],
        parameters: NullIfEmptyObject(request.params),
        body: NullIfEmptyObject(request.body),
        client : {
            address: request.connection.remoteAddress,
            useragent: request.headers['user-agent']
        }
    }
}
const getHttpRequestUriPath = (request) => {
  if(request === null || request === undefined) return null;
  let port = getLast(request.socket.server._connectionKey, `:`);
  return `${request.method}->${request.protocol}://${request.hostname}${(port) ? `:${port}` : ``}${request.path}`.trim();
}
const getHttpRequestMethodName = (request) => {
  return getLast(getHttpRequestUriPath(request), `/`);
}
const getRequestQueryParametersWithoutUid = (request) => {
    const parameters = {};
    Object.keys(request.query).forEach((key, index) => { if(!(key === 'uid')) { parameters[key] = Object.values(request.query)[index]; }});
    return parameters;
}
const getRequestQueryParametersWithUid = (request) => {
    const parameters = {};
    Object.keys(request.query).forEach((key, index) => { parameters[key] = Object.values(request.query)[index]; });
    return parameters;
}

module.exports = {
    setApiUri: setApiUri,
    setAgent: setAgent,
    setHeaders: setHeaders,
    setAuthorization: setAuthorization,
    getHttpRequestPacket: getHttpRequestPacket,
    getHttpRequestUriPath: getHttpRequestUriPath,
    getHttpRequestMethodName: getHttpRequestMethodName,
    getRequestQueryParametersWithUid: getRequestQueryParametersWithUid,
    getRequestQueryParametersWithoutUid: getRequestQueryParametersWithoutUid
}