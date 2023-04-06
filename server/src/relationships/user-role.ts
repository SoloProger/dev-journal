import Role from "../role/role";
import User from "../user/user";

Role.hasMany(User);
User.belongsTo(Role);
