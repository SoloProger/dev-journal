class AbstractRepository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  async save(body) {
    const createdPost = await this.#model.create(body);
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
}

module.exports = AbstractRepository;
