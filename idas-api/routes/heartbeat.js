/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - heartbeat utilities class
|------------------------------------------------------------------------------------------------------------------
 */

/*
|------------------------------------------------------------------------------------------------------------------
| Dependencies
|------------------------------------------------------------------------------------------------------------------
 */
const { getFirst } = require(`./../common/functions`);
const { toLocaleLowerCase } = require(`./../common/functions`);
const { isEmptyString } = require(`./../common/functions`);
const { httpOnSuccess } = require(`../common/logging/logger`);
const { httpOnError } = require(`../common/logging/logger`);

/*
|------------------------------------------------------------------------------------------------------------------
| Functions
|------------------------------------------------------------------------------------------------------------------
 */
const Heartbeat = (config = getDefaultConfig()) => {
    const ping = (request, response, next) => {
        return httpOnSuccess(__filename, request, response, {message: `<br />${getApiName(config)}${addRequestAnchorName(request)} API is up and running`});
    }
    return {
        ping: ping
    }
}
const getApiName = (config = getDefaultConfig()) => {
    return `${config.companyName} - ${config.applicationName}`;
}
const getDefaultConfig = () => {
    return require(`./../config/config`);
}
const addRequestAnchorName = (request) => {
    let anchorName = toLocaleLowerCase(request.route.path.split(`/`)[1]);
    let pathWithoutPing = request.route.path.split(`/`).filter((element) => isEmptyString(element) && !(toLocaleLowerCase(element) === 'ping')).join(`/`).trim();
    return `${!(anchorName === 'ping') ? ` (${pathWithoutPing})` : ``}`;
}

/*
|------------------------------------------------------------------------------------------------------------------
| module exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Heartbeat;