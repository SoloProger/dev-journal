const { DataTypes } = require("sequelize");
const { configDb } = require("../core/db/db.config");

const Role = configDb.define(
  "Role",
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
  },
  { tableName: "Roles" }
);

module.exports = Role;
