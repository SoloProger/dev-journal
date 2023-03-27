class AbstractRepository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  async save(body, options) {
    const createdPost = await this.#model.create(body, options);
    return createdPost;
  }

  async getAll(options) {
    return await this.#model.findAll(options);
  }

  async getById(id, attribute = "id") {
    return await this.#model.findOne({ where: { [attribute]: id } });
  }

  async update(body, id, attribute = "id") {
    await this.#model.update(body, {
      where: { [attribute]: id },
    });
    const result = await this.getById(id, attribute);
    return result;
  }

  async remove(id, attribute = "id") {
    const result = await this.#model.destroy({ where: { [attribute]: id } });
  }

  async findOne(id) {
    const result = await this.#model.findByPk(id);
    return result;
  }
}

module.exports = AbstractRepository;
