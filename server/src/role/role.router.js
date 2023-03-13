const BaseHandler = require("../core/base/handler.base");
const createRoute = require("../core/utils/createRoute");
const { role } = require("../core/utils/paths");
const Role = require("./role");

const router = (app) => new BaseHandler(app, role, Role);

module.exports = (app, options, done) =>
  createRoute(app, options, done, router);
