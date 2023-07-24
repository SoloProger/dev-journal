import { AsyncResponse } from '../../core/response';
import { Category } from '../../database/entities/category';
import { CategoryRepository } from './repository';

export class CategoryService {
  public readonly repository: CategoryRepository;

  constructor() {
    this.repository = new CategoryRepository();
  }

  public async getAll(): AsyncResponse<Category[]> {
    return await this.repository.all();
  }

  public async getOne(id: number): AsyncResponse<Category> {
    return await this.repository.one(id);
  }

  public async create(data: Category): AsyncResponse<Category> {
    return await this.repository.create(data);
  }

  public async update(id: number, data: Category): AsyncResponse<Category> {
    return await this.repository.update(id, data);
  }

  public async delete(id: number): AsyncResponse<unknown> {
    return await this.repository.delete(id);
  }
}
