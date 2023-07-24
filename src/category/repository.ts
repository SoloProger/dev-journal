import { AsyncResponse, Response } from '../../core/response';
import dataSource from '../../data-source';
import { Category } from '../../database/entities/category';

export class CategoryRepository {
  private readonly repository;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  public async one(id: number): AsyncResponse<Category> {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }

  public async all(): AsyncResponse<Category[]> {
    return await this.repository.find();
  }

  public async create(data: Category): AsyncResponse<Category> {
    return await this.repository.save(data);
  }

  public async update(id: number, data: Category): AsyncResponse<Category> {
    await this.repository.update(id, data);
    return await this.one(id);
  }

  public async delete(id: number): AsyncResponse<unknown> {
    const deletedCategory = await this.one(id);
    if (deletedCategory) return await this.repository.remove(deletedCategory);
  }
}
