const BaseHandler = require("../core/base/handler.base");
const createRoute = require("../core/utils/createRoute");
const { user } = require("../core/utils/paths");
const User = require("./user");

const router = (app) => new BaseHandler(app, user, User);

module.exports = (app, options, done) =>
  createRoute(app, options, done, router);
