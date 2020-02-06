require("dotenv").config();

module.exports = {
<<<<<<< HEAD
  development: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
=======
  "development": {
    "username": process.env.username,
    "password": process.env.db_pass,
    "database": process.env.database,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
>>>>>>> 6066c715871daa4b0a1f9d17c494f27b17fba9a2
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
