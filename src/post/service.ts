import { PostRepository } from './repository';
import { Post } from '../../database/entities/post';
import { AsyncResponse } from '../../core/response';

export class PostService {
  public readonly repository: PostRepository;

  constructor() {
    this.repository = new PostRepository();
  }

  public async getAll(): AsyncResponse<Post[]> {
    return await this.repository.all();
  }

  public async getOne(id: number): AsyncResponse<Post> {
    return await this.repository.one(id);
  }

  public async create(data: Post, categoryIds: number[]): AsyncResponse<Post> {
    return await this.repository.create({
      ...data,
      categories: this.categories(categoryIds),
    });
  }

  public async update(id: number, data: Post): AsyncResponse<Post> {
    return await this.repository.update(id, {
      ...data,
    });
  }

  public async delete(id: number): AsyncResponse<unknown> {
    return await this.repository.remove(id);
  }

  private categories(categoryIds: number[]): any[] {
    return categoryIds.map((categoryId) => ({ id: categoryId }));
  }
}
