/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - logging utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const { yyyymmddThmsmsZ0200WithDashSeparator, yyyymmdd } = require(`./../date-util`);
const { isNotEmptyObject, toLocaleLowerCaseTrim } = require(`./../functions`);
const { getHttpRequestPacket } = require(`./../http-helper`);
const { companyName, applicationName} = require(`./../../config/config`);
const fs = require('fs');
let defaultCaller = __filename;
let message = ``;
let consoleMessage = ``;

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s) - Logging
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const setCaller = (caller) => { defaultCaller = caller || defaultCaller; }
const debug = (caller, methodName, message, detailMessage = null) => {
    log(caller, `DEBUG`, methodName, message, detailMessage);
}
const info = (caller, methodName, message, detailMessage = null) => {
    log(caller, `INFO`, methodName, message, detailMessage);
}
const warn = (caller, methodName, message, detailMessage = null) => {
    log(caller, `WARN`, methodName, message, detailMessage);
}
const error = (caller, methodName, message, detailMessage = null) => {
    log(caller, `ERROR`, methodName, message, detailMessage);
}
const fatal = (caller, methodName, message, detailMessage = null) => {
    log(caller, `FATAL`, methodName, message, detailMessage);
}
const crtical = (caller, methodName, message, detailMessage = null) => {
    log(caller, `CRITICAL`, methodName, message, detailMessage);
}
const log = (caller, logType, methodName, message, detailMessage = null) => {
  caller = formatCaller(caller);
  if(((logType || ``).trim().length === 0) || ((methodName || ``).trim().length === 0) || ((message === null || message === undefined || message === ``))) return;
  let time = yyyymmddThmsmsZ0200WithDashSeparator();
  if(Array.isArray(message) && detailMessage){
    message.push(detailMessage);
  }else if(message && detailMessage){
    message = [message, detailMessage];
  }
  message = formatMessage(message);
  consoleMessage = `[${time}] [${logType.toLocaleUpperCase()}] /${caller}${(methodName) ? `/${methodName}()` : ``} : ${message}`;
  logToConsole(logType, consoleMessage);
  logToFile(consoleMessage);
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s) - Logging (Promise)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const logToPromise = (caller, logType, methodName, message, data = null) => {
  log(caller, logType, methodName, message);
  return toPromise(logType, message, data);
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s) - Logging (Http)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const onHttpRequestStarted = (caller, request) => {
  const packet = getHttpRequestPacket(request);
  const message = [packet.absoluteUrlWithHttpMethod, `Http request initiated and processing`, JSON.stringify(packet)].join('\r\n');
  info(caller, packet.action, message);
}
const onHttpRequestCompleted = (caller, request, response, error = null, data = null, message = null) => {
  if(error){
      return onHttpError(caller, request, response, {error: error, data: data, message: error.message || message});
  }else{
      return onHttpSuccess(caller, request, response, {data: data, message: message});
  }
}
const onHttpSuccess = (caller, request, response, result) => {
  return httpLog(caller, `INFO`, request, response, result);
}
const onHttpError = (caller, request, response, result) => {
  return httpLog(caller, `ERROR`, request, response, result);
}
const httpLog = (caller, logType, request, response, result) => {
  caller = (caller || __filename);
  logType = (logType || `` || `INFO`);
  logType = (result.hasError) ? `ERROR` : logType;
  const packet = getHttpRequestPacket(request);
  let httpStatusCode = getHttpStatusCode(logType, packet.action);
  let data = (result ||{data: null}).data;
  let checkData = hasData(data);
  data = (checkData) ? data : null;
  let shortMessage = (result || {message: null}).message;
  let errorMessage = (result.error) ?  JSON.stringify(result.error) : null;
  let detailMessage = [packet.absoluteUrlWithHttpMethod, JSON.stringify(shortMessage), errorMessage].filter((message) => !(message === null)).join(`\r\n`).trim();
  log(caller, logType, packet.action, detailMessage);
  if(response){
    return response.status(httpStatusCode).json({data: data, hasData: checkData, dataCount: dataCount(data), hasError: hasError(logType), message: shortMessage});
  }
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Internal Functions - Logging
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const formatCaller = (caller) => {
  caller = (caller || __filename).replace(/\\/g, `/`);
  let items = caller.split(new RegExp([`/`, `\\\\`, `-`].join(`|`), `g`));
  let fileName = items.find((item) => item.includes(`.js`));
  items = items.filter((item) => !item.includes(`.js`)).map((item) => item.slice(0, 1));
  return [items.join(`.`).toLocaleLowerCase(), fileName].join(`/`).trim();
}
const formatMessage = (message) => {
  return ((Array.isArray(message)) ? message.filter((msg) => !(msg === null || msg === undefined || msg === ``)).map((msg) => `${(msg.type) ? [msg.type, msg.message].join(`:`) : msg.message || msg}`).join(`\r\n`) : message.message || message);
}
const logToConsole = (logType, message) => {
  switch((logType || `info`).trim().toLocaleLowerCase()){
    case `debug`: console.debug(message); break;
    case `warn`: console.warn(message); break;
    case `error`:
    case `fatal`: console.error(message); break;
    default : console.info(message); break;
  }
}
const logToFile = (message) => {
  const logDirectory = `/data/${toLocaleLowerCaseTrim(companyName)}/${toLocaleLowerCaseTrim(applicationName)}/api/logs/${yyyymmdd()}`;
  const logFile = `${logDirectory}/api.${yyyymmdd()}.log`;
  logDirectory.split('/').reduce(
    (directories, directory) => {
      directories += `${directory}/`;  
      if (!fs.existsSync(directories)) {
        fs.mkdirSync(directories);
      }  
      return directories;
    },
    '',
  );
  fs.appendFile(logFile, message + '\n', function (err) {
      if (err) { error(__filename, `logToFile:fs.appendFile`, (err.message || err), err) };
    });
}
const LdapCustomError = (message, ldapError) => {
  return {
    message: message,
    error: ldapError
  }
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Internal Functions - Logging (Promise)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const toPromise = (logType, message, data = null) => {
  return Promise.resolve({data: data, hasData: hasData(data), dataCount: dataCount(data), hasError: hasError(logType), message: message});
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Internal Functions - Logging (Http)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const getHttpStatusCode = (logType, methodName = null) => {
  let isError = hasError(logType);
  if(([`auth`, `authenticate`, `authentication`, `login`, `logout`].includes((methodName || ``).toLocaleLowerCase().trim()) && isError)) return 401;
  return (isError) ? 400 : 200;
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Internal Functions - Logging (General)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const hasData = (data) => { return isNotEmptyObject(data); }
const dataCount = (data) => { return (hasData(data) && Array.isArray(data)) ? data.length : (hasData(data)) ? 1 : 0; }
const hasError = (logType) => { return !([`debug`, `info`].includes((logType || ``).toLocaleLowerCase().trim())); }

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
  setCaller: setCaller,
  debug: debug,
  info: info,
  warn: warn,
  error: error,
  fatal: fatal,
  crtical: crtical,
  onHttpRequestStarted: onHttpRequestStarted,
  onHttpRequestCompleted: onHttpRequestCompleted,
  onHttpSuccess: onHttpSuccess,
  onHttpError: onHttpError,
  log: log,
  logToPromise: logToPromise,
  LdapCustomError: LdapCustomError,
  message: message,
  consoleMessage: consoleMessage,
}