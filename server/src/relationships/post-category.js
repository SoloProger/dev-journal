const Post = require("../post/post");
const Category = require("../category/category");

Post.belongsToMany(Category, { through: "post_categories", as: "categories", foreignKey: "category_id" });
Category.belongsToMany(Post, { through: "post_categories", as: "posts", foreignKey: "post_id" });
