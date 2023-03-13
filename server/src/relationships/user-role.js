const User = require("../user/user");
const Role = require("../role/role");

Role.hasMany(User);
User.belongsTo(Role);
