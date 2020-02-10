require("dotenv").config();

module.exports = {
  development: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
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
    use_env_variable: "JAWSDB_URL"
    dialect: "mysql",
    operatorsAliases: false,
  },
};
