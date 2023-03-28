const Router = require("../core/router/router");
const PostController = require("./post.controller");

const router = (app) => new Router(app, "/post", PostController);

module.exports = (app, options, done) => {
  const _router = router(app);
  _router.getAll();
  _router.getOne();
  _router.create();
  _router.update();
  _router.remove();
  _router.upload();
  done();
};
