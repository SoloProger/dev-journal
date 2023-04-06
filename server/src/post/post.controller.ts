import { Model } from "sequelize";
import { FastifyRequest, FastifyReply } from "fastify";
import { AbstractController } from "../core/abstract/controller.abstract";
import { AbstractRepository } from "../core/abstract/repository.abstract";
import { Type } from "../core/types/type";
import { PostService } from "./post.service";
import QueryParams from "../core/types/query-params";

export class PostController extends AbstractController<any> {
  private service: PostService;

  constructor(
    Model: Model,
    Service: Type<PostService>,
    Repository: Type<AbstractRepository<any, any>>
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
    const query = request.query as QueryParams;
    if (query.recent) {
      const recentPost = this.service.getRecentEntities();
      return recentPost;
    }
    const entityList = this.service.getEntityList();
    return entityList as any;
  }

  public getOne(request: FastifyRequest, replay: FastifyReply) {
    const _params = request.params as QueryParams;
    const entity = this.service.getEntityById(_params.id);
    return entity as any;
  }

  public create(request: FastifyRequest, replay: FastifyReply) {
    const entity = this.service.createEntity(request.body);
    return entity as any;
  }

  public update(request: FastifyRequest, replay: FastifyReply) {
    const _params = request.params as QueryParams;
    const updatedEntity = this.service.updateEntity(request.body, _params.id);
    return updatedEntity as any;
  }

  public remove(request: FastifyRequest, replay: FastifyReply) {
    const _params = request.params as QueryParams;
    const removedEntity = this.service.removeEntity(_params.id);
    return removedEntity as any;
  }
}
