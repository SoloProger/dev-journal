const { DataTypes } = require("sequelize");
const { configDb } = require("../core/db/db.config");
const Category = require('../category/category');

const Post = configDb.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  { tableName: "posts" }
);

module.exports = Post;
