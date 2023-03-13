const AbstractService = require("../abstract/service.abstract");
const BaseRepository = require("./repository.base");

class BaseService extends AbstractService {
  #repository;

  constructor(model) {
    super();
    this.#repository = new BaseRepository(model);
    this.getEntityList = this.getEntityList.bind(this);
    this.getEntityById = this.getEntityById.bind(this);
    this.createEntity = this.createEntity.bind(this);
    this.updateEntity = this.updateEntity.bind(this);
    this.removeEntity = this.removeEntity.bind(this);
  }

  async getEntityList() {
    const entityList = await this.#repository.getAll();
    return entityList;
  }

  async getEntityById(id) {
    const entity = await this.#repository.getById(id);
    return entity;
  }

  async createEntity(body) {
    const result = await this.#repository.save(body);
    return result;
  }

  async updateEntity(body, id) {
    const result = await this.#repository.save(body, id);
    return result;
  }

  async removeEntity(id) {
    const result = await this.#repository.remove(id);
    return result;
  }
}

module.exports = BaseService;
