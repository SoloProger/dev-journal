const BaseHandler = require("../core/base/handler.base");
const createRoute = require("../core/utils/createRoute");
const { category } = require("../core/utils/paths");
const Category = require("./category");

const router = (app) => new BaseHandler(app, category, Category);

module.exports = (app, options, done) =>
  createRoute(app, options, done, router);
