import { DataTypes } from "sequelize";
import configDb from "../core/db/db.config";

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
  { tableName: "Posts" }
);

export default Post;
