import { Model } from "sequelize";
import { AbstractHandler } from "../abstract/handler.abstract";
import { AbstractController } from "../abstract/controller.abstract";
import { Type } from "../types/type";
import { AbstractService } from "../abstract/service.abstract";
import { AbstractRepository } from "../abstract/repository.abstract";

export class BaseHandler<T, Y> extends AbstractHandler<T> {
  protected _app: any;
  protected _path: string;
  protected controller: AbstractController<T>;

  constructor(
    app: any,
    path: string,
    Model: Model,
    Controller: Type<AbstractController<T>>,
    Service: Type<AbstractService<T, Y>>,
    Repository: Type<AbstractRepository<T, Y>>
  ) {
    super();
    this._app = app;
    this._path = path;
    this.controller = new Controller(Model, Service, Repository);
  }

  public getAll() {
    this._app.get(this._path, this.controller.getAll);
  }

  public getOne() {
    this._app.get(`${this._path}/:id`, this.controller.getOne);
  }

  public create() {
    this._app.post(`${this._path}`, this.controller.create);
  }

  public update() {
    this._app.put(`${this._path}/:id`, this.controller.update);
  }

  public remove() {
    this._app.delete(`${this._path}/:id`, this.controller.remove);
  }
}
