require("dotenv").config();
const fastify = require("fastify")();
const { configDb } = require("./src/core/db/db.config");
const postRouter = require("./src/post/post.router");
require("./src/relationships/user-role");

fastify.register((app, options, done) => postRouter(app, options, done));

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
