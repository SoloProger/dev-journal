import { FindOptions } from "sequelize";
import { AbstractRepository } from "../abstract/repository.abstract";

export class BaseRepository<T, Y> extends AbstractRepository<T, Y> {
  protected model: any;

  constructor(Model: any) {
    super();
    this.model = Model;
  }

  public async save(body: Y, id: number) {
    if (id) {
      return await this.update(body, id);
    }
    const createdPost = await this.model.create(body);
    return createdPost;
  }

  public async getAll(options?: FindOptions) {
    return await this.model.findAll(options);
  }

  public async getById(id: number, attribute: string = "id") {
    return await this.model.findOne({ where: { [attribute]: id } });
  }

  protected async update(body: Y, id: number, attribute: string = "id") {
    await this.model.update(body, {
      where: { [attribute]: id },
    });
    const result = await this.getById(id, attribute);
    return result;
  }

  public async remove(id: number, attribute: string = "id") {
    const result = await this.model.destroy({ where: { [attribute]: id } });
  }
}
