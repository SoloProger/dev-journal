// Require the framework and instantiate it
require("dotenv").config();
const fastify = require("fastify")();
const { configDb } = require("./src/core/db/db.config");

// Declare a route
fastify.get("/", async (request, reply) => {
  console.log(process.env);
  return { hello: "world23" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    await configDb.authenticate();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
