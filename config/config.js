require("dotenv").config();

module.exports = {
<<<<<<< HEAD
  "development": {
    "username": "root", //process.env.username,
    "password": "Xiyuan18", //process.env.password,
    "database": "ims_db", //process.env.database,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
=======
  development: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
>>>>>>> 1ce8b0a59863ddb360e301b9a514b34bb34ffa8a
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
};
