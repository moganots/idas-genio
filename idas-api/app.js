/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  
|------------------------------------------------------------------------------------------------------------------
 */

console.clear();

/*
|------------------------------------------------------------------------------------------------------------------
| Dependencies
|------------------------------------------------------------------------------------------------------------------
 */
const express = require(`express`);
const path = require(`path`);
const bodyParser = require(`body-parser`);
const http = require(`http`);
const methodOverride = require(`method-override`);
const cors = require(`cors`);
const responseTime = require(`response-time`);
const { apiProtocol, apiHost, apiPort } = require(`./config/config`);
const { companyName, applicationName } = require(`./config/config`);
const apiName = `${companyName} - ${applicationName} API`;
const { info } = require(`./common/logging/logger`);
const { error } = require(`./common/logging/logger`);

info(__filename, `server.init`, `Starting up the ${apiName}`);

info(__filename, `server.init`, `Dependencies loaded successfully`);

/*
|------------------------------------------------------------------------------------------------------------------
| App
|------------------------------------------------------------------------------------------------------------------
 */

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride(`X-HTTP-Method-Override`));
app.use(cors());
app.use(responseTime());

// Set API port
const port = process.env.PORT || apiPort;
app.set(`port`, port);

/*
|------------------------------------------------------------------------------------------------------------------
| Server
|------------------------------------------------------------------------------------------------------------------
 */
const server = http.createServer(app);
const apiUri = `${apiProtocol}://${apiHost}:${port}`;

server.headersTimeout = (10 * 60 * 1000);
server.keepAliveTimeout = (10 * 60 * 1000);
server.setTimeout(10 * 60 * 1000);

info(__filename, `http.createServer`, `Server initialised successfully`);

/*
|------------------------------------------------------------------------------------------------------------------
| Routes
|------------------------------------------------------------------------------------------------------------------
 */
const router = require(`./routes`)(app);
app.use('/api', router);
info(__filename, `app.use('/api', router)`, `${apiName} Router initialised successfully`);

/*
|------------------------------------------------------------------------------------------------------------------
| Server - Start up
|------------------------------------------------------------------------------------------------------------------
 */
server.on(`connection`, function(socket) {
    socket.setKeepAlive(10 * 60 * 1000);
    socket.setTimeout(10 * 60 * 1000);
    info(__filename, `server.on('connection')`, `Successfully created a socket connection for server`);
});
server.on(`error`, function(err) {
    error(__filename, `server.on('error')`, err);
});
server.listen(port, function () {
    info(__filename, `server.listen`, `${apiName} listening on ${apiProtocol}://${apiHost}:${port}`);
});