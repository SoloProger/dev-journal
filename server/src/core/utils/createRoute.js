module.exports = function createRoute(app, options, done, router) {
  const _router = router(app);
  _router.getAll();
  _router.getOne();
  _router.create();
  _router.update();
  _router.remove();
  done();
};
