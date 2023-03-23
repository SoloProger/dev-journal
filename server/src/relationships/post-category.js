const Post = require("../post/post");
const Category = require("../category/category");

Post.belongsToMany(Category, { through: "PostCategories" });
Category.belongsToMany(Post, { through: "PostCategories" });
