require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
const { configDb } = require("./src/core/db/db.config");
require("./src/relationships/user-role");
require("./src/relationships/post-category");
const postRouter = require("./src/post/post.router");
const roleRouter = require("./src/role/role.router");
const userRouter = require("./src/user/user.router");
const categoryRouter = require("./src/category/category.router");

fastify.register(cors);

fastify.register((app, options, done) => postRouter(app, options, done));
fastify.register((app, options, done) => roleRouter(app, options, done));
fastify.register((app, options, done) => userRouter(app, options, done));
fastify.register((app, options, done) => categoryRouter(app, options, done));

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
    await configDb.authenticate();
    await configDb.sync();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
