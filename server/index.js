require("dotenv").config();
const fastify = require("fastify")();
const { configDb } = require("./src/core/db/db.config");
require("./src/relationships/user-role");
const postRouter = require("./src/post/post.router");
const roleRouter = require("./src/role/role.router");
const userRouter = require("./src/user/user.router");

fastify.register((app, options, done) => postRouter(app, options, done));
fastify.register((app, options, done) => roleRouter(app, options, done));
fastify.register((app, options, done) => userRouter(app, options, done));

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    await configDb.authenticate();
    await configDb.sync();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
