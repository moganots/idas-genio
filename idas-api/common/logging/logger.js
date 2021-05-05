/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio API logging utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependencies
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const { yyyymmddThmsmsZDashSeparator } = require(`../date-util`);
const { hasValues } = require(`./../functions`);
const { getHttpRequestUriPath, getHttpRequestMethodName } = require(`./../http-helper`);
let defaultCaller = __filename;
let message = ``;
let consoleMessage = ``;

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Functions - Logging
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
const log = (caller, logType, methodName, message, detailMessage = null) => {
  caller = formatCaller(caller);
  if(((logType || ``).trim().length === 0) || ((methodName || ``).trim().length === 0) || ((message === null || message === undefined || message === ``))) return;
  let time = yyyymmddThmsmsZDashSeparator();
  if(Array.isArray(message) && detailMessage){
    message.push(detailMessage);
  }else if(message && detailMessage){
    message = [message, detailMessage];
  }
  message = formatMessage(message);
  consoleMessage = `[${time}] [${logType.toLocaleUpperCase()}] /${caller}${(methodName) ? `/${methodName}()` : ``} : ${message}`;
  consoleLog(logType, consoleMessage);
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Functions - Logging (Promise)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const logToPromise = (caller, logType, methodName, message, data = null) => {
  log(caller, logType, methodName, message);
  return toPromise(logType, message, data);
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Functions - Logging (Http)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const httpOnSuccess = (caller, request, response, result) => {
  return httpLog(caller, `INFO`, request, response, result);
}
const httpOnError = (caller, request, response, result) => {
  return httpLog(caller, `ERROR`, request, response, result);
}
const httpLog = (caller, logType, request, response, result) => {
  caller = (caller || __filename);
  logType = (logType || `` || `INFO`);
  logType = (result.hasError) ? `ERROR` : logType;
  let httpPath = getHttpRequestUriPath(request);
  let methodName = getHttpRequestMethodName(request);
  let data = (result ||{data: null}).data;
  let checkData = hasData(data);
  data = (checkData) ? data : null;
  let message = (result || {message: null}).message;
  message = [httpPath, (message && message.message) ? message.message : message].join(`\r\n`).trim();
  log(caller, logType, methodName, message);
  if(response){
    let statusCode = getStatusCode(logType, methodName);
    return response.status(statusCode).json({data: data, hasData: checkData, dataCount: dataCount(data), hasError: hasError(logType), message: message});
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
const consoleLog = (logType, consoleMessage) => {
  switch((logType || `info`).trim().toLocaleLowerCase()){
    case `debug`: console.debug(consoleMessage); break;
    case `warn`: console.warn(consoleMessage); break;
    case `error`:
    case `fatal`: console.error(consoleMessage); break;
    default : console.info(consoleMessage); break;
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
const getStatusCode = (logType, methodName = null) => {
  let isError = hasError(logType);
  if(([`auth`, `authenticate`].includes((methodName || ``).toLocaleLowerCase().trim()) && isError)) return 401;
  return (isError) ? 400 : 200;
}

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Internal Functions - Logging (General)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const hasData = (data) => { return ((data != null) || (data != undefined) || hasValues(data)); }
const dataCount = (data) => { return (hasData(data) && Array.isArray(data)) ? data.length : (hasData(data)) ? 1 : 0; }
const hasError = (logType) => { return !([`debug`, `info`].includes((logType || ``).toLocaleLowerCase().trim())); }

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
  setCaller: setCaller,
  debug: debug,
  info: info,
  warn: warn,
  error: error,
  fatal: fatal,
  log: log,
  logToPromise: logToPromise,
  httpOnSuccess: httpOnSuccess,
  httpOnError: httpOnError,
  message: message,
  consoleMessage: consoleMessage,
}