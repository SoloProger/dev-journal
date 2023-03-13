const { DataTypes } = require("sequelize");
const { configDb } = require("../core/db/db.config");

const User = configDb.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { tableName: "Users" }
);


module.exports = User;
