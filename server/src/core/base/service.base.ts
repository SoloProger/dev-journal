import { Type } from "./../types/type.d";
import { Model } from "sequelize";
import { AbstractRepository } from "../abstract/repository.abstract";
import { AbstractService } from "../abstract/service.abstract";

export class BaseService<T, Y> extends AbstractService<T, Y> {
  protected repository: AbstractRepository<T, Y>;

  constructor(Model: Model, Repository: Type<AbstractRepository<T, Y>>) {
    super();
    this.repository = new Repository(Model);
    this.getEntityList = this.getEntityList.bind(this);
    this.getEntityById = this.getEntityById.bind(this);
    this.createEntity = this.createEntity.bind(this);
    this.updateEntity = this.updateEntity.bind(this);
    this.removeEntity = this.removeEntity.bind(this);
  }

  public async getEntityList() {
    const entityList = await this.repository.getAll();
    return entityList;
  }

  public async getEntityById(id: number) {
    const entity = await this.repository.getById(id);
    return entity;
  }

  public async createEntity(body: Y) {
    const result = await this.repository.save(body);
    return result;
  }

  public async updateEntity(body: Y, id: number) {
    const result = await this.repository.save(body, id);
    return result;
  }

  public async removeEntity(id: number) {
    const result = await this.repository.remove(id);
    return result;
  }
}
