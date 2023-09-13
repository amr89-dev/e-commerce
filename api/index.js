require("dotenv").config();
const server = require("./src/app");
const { sequelize } = require("./src/db/db.js");

const PORT = process.env.PORT || "3001";

const main = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
