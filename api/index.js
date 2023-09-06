require("dotenv").config();
const server = require("./src/app");
const { sequelize } = require("./src/db.js");

const PORT = process.env.PORT || "3001";

const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("La conexion a la base de datos es exitosa");

    server.listen(PORT, () => {
      console.log(`Servidor levantado en el puerto ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
