const express = require("express");
const routerApi = require("./routes");
const {
  errorLog,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

const server = express();
server.use(express.json());
routerApi(server);

server.use(errorLog);
server.use(boomErrorHandler);
server.use(errorHandler);

module.exports = server;
