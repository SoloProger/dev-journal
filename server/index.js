require("dotenv").config();
const path = require("path");
const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
const multipart = require("@fastify/multipart");
const fastifyStatic = require("@fastify/static");
const { configDb } = require("./src/core/db/db.config");
require("./src/relationships/user-role");
const postRouter = require("./src/post/post.router");
const roleRouter = require("./src/role/role.router");
const userRouter = require("./src/user/user.router");

fastify.register(cors);
fastify.register(multipart);
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "src/uploads"),
});

fastify.register((app, options, done) => postRouter(app, options, done));
fastify.register((app, options, done) => roleRouter(app, options, done));
fastify.register((app, options, done) => userRouter(app, options, done));

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
