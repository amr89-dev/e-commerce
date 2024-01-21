# e-commerce

Tienda online creada con React, Node, Express, y PostgreSQL

## Levantar el proyecto

Para levantar el proyecto, primero se debe clonar el repositorio, luego se debe crear una base de datos en PostgreSQL con el nombre "ecommerce", y por último se debe crear un archivo .env en la carpeta "api" con las siguientes variables de entorno:

```
DB_USER=postgres
DB_PASSWORD= (la contraseña de la base de datos)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ecommerce
```

Luego, en la carpeta "api" se debe correr el comando "npm install" para instalar las dependencias, y luego el comando "npm run nodemon" para levantar el servidor. En la carpeta "client" se debe correr el comando "npm install" para instalar las dependencias, y luego el comando "npm run dev" para levantar el cliente.
