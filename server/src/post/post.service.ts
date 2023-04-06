import { Model } from "sequelize";
import { AbstractService } from "../core/abstract/service.abstract";
import { AbstractRepository } from "../core/abstract/repository.abstract";
import { Type } from "../core/types/type";

export class PostService extends AbstractService<any, any> {
  protected repository: AbstractRepository<any, any>;

  constructor(Model: Model, Repository: Type<AbstractRepository<any, any>>) {
    super();
    this.repository = new Repository(Model);
  }

  public async getEntityList() {
    const posts = await this.repository.getAll();
    return posts;
  }

  public async getEntityById(id: number) {
    const post = await this.repository.getById(id);
    return post;
  }

  public async getRecentEntities() {
    const recentPosts = await this.repository.getAll({
      limit: 2,
      order: [["createdAt", "DESC"]],
    });
    return recentPosts;
  }

  public async createEntity(body: any) {
    const result = await this.repository.save(body);
    return result;
  }

  public async updateEntity(body: any, id: number) {
    const result = await this.repository.save(body, id);
    return result;
  }

  public async removeEntity(id: number) {
    const result = await this.repository.remove(id);
    return result;
  }
}
