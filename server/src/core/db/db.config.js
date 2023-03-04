const { Sequelize } = require("sequelize");

const _config = {
  db: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  options: {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_TYPE,
  },
};

const configDb = new Sequelize(
  _config.db,
  _config.user,
  _config.password,
  _config.options
);

module.exports = {
  configDb,
};
