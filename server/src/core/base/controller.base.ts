import { Type } from "./../types/type.d";
import { Model } from "sequelize";
import { AbstractController } from "../abstract/controller.abstract";
import { AbstractService } from "../abstract/service.abstract";
import { FastifyRequest, FastifyReply } from "fastify";
import { AbstractRepository } from "../abstract/repository.abstract";
import QueryParams from "../types/query-params";

export class BaseController<T, Y> extends AbstractController<T> {
  private service: AbstractService<any, any>;

  constructor(
    Model: Model,
    Service: Type<AbstractService<any, any>>,
    Repository: Type<AbstractRepository<T, Y>>
  ) {
    super();
    this.service = new Service(Model, Repository);
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  public getAll(request: FastifyRequest, replay: FastifyReply) {
    const entityList = this.service.getEntityList();
    return entityList as T;
  }

  public getOne(request: FastifyRequest, replay: FastifyReply) {
    const _params = request.params as QueryParams;
    const entity = this.service.getEntityById(_params.id);
    return entity as T;
  }

  public create(request: FastifyRequest, replay: FastifyReply) {
    const entity = this.service.createEntity(request.body);
    return entity as T;
  }

  public update(request: FastifyRequest, replay: FastifyReply) {
    const _params = request.params as QueryParams;
    const updatedEntity = this.service.updateEntity(request.body, _params.id);
    return updatedEntity as T;
  }

  public remove(request: FastifyRequest, replay: FastifyReply) {
    const _params = request.params as QueryParams;
    const removedEntity = this.service.removeEntity(_params.id);
    return removedEntity as T;
  }
}
