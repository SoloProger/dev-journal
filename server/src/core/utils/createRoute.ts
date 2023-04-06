interface CreateRoute<T> {
  app: any;
  options: any;
  done: () => any;
  router: (app: any) => any;
}

export default function createRoute<T>(route: CreateRoute<T>) {
  const _router = route.router(route.app);
  _router.getAll();
  _router.getOne();
  _router.create();
  _router.update();
  _router.remove();
  route.done();
}
