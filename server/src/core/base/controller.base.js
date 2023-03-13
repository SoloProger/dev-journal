const AbstractController = require("../abstract/controller.abstract");
const BaseService = require("./service.base");

class BaseController extends AbstractController {
  #service;

  constructor(model) {
    super();
    this.#service = new BaseService(model);
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  getAll(req, res) {
    const entityList = this.#service.getEntityList();
    return entityList;
  }

  getOne(req, res) {
    const entity = this.#service.getEntityById(req.params.id);
    return entity;
  }

  create(req, res) {
    const entity = this.#service.createEntity(req.body);
    return entity;
  }

  update(req, res) {
    const updatedEntity = this.#service.updateEntity(req.body, req.params.id);
    return updatedEntity;
  }

  remove(req, res) {
    const removedEntity = this.#service.removeEntity(req.params.id);
    return removedEntity;
  }
}

module.exports = BaseController;
