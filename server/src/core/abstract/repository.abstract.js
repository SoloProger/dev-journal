class AbstractRepository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  async save(body) {
    await this.#model.create(body);
  }

  async getAll() {
    return await this.#model.findAll();
  }

  async getById(id, attribute = "id") {
    return await this.#model.findAll({ where: { attribute: id } });
  }
}

module.exports = AbstractRepository;
