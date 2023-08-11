const fs = require("fs");

const leer = (ruta, cb) => {
  fs.readFile(ruta, (err, data) => {
    if (err) throw new Error("Hubo un error");
    cb(data.toString());
  });
};

leer(__dirname + "/archivo.txt", console.log);

const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      throw new Error("Hubo un error");
    }
  });
};

escribir(__dirname + "/arch.txt", "este texto");
