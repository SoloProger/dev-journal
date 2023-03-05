class AbstractRepository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  async save(body) {
    const createdPost = await this.#model.create(body);
    return createdPost;
  }

  async getAll() {
    return await this.#model.findAll();
  }

  async getById(id, attribute = "id") {
    return await this.#model.findAll({ where: { [attribute]: id } });
  }

  async update(body, id, attribute = "id") {
    const result = await this.#model.update(body, {
      where: { [attribute]: id },
    });
    return result;
  }

  async remove(id, attribute = "id") {
    const result = await this.#model.destroy({ where: { [attribute]: id } });
  }
}

module.exports = AbstractRepository;
