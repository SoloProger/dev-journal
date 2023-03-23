const { DataTypes } = require("sequelize");
const { configDb } = require("../core/db/db.config");

const Category = configDb.define(
  "Category",
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
  { tableName: "Categories" }
);

module.exports = Category;
