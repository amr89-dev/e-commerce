const express = require("express");
const productsRouter = require("./productsRouter");

const routerApi = (server) => {
  const router = express.Router();
  server.use("/api/v1", router);
  router.use("/products", productsRouter);
};

module.exports = routerApi;
