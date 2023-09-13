require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports = {
  development: {
    url: URI,
    dilalect: "postgres",
  },
  production: {
    url: URI,
    dilalect: "postgres",
  },
};
