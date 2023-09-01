const express = require("express");
const routerApi = require("./routes");

const server = express();
server.use(express.json());
routerApi(server);

module.exports = server;
