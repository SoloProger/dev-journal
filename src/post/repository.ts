import { AsyncResponse } from '../../core/response';
import dataSource from '../../data-source';
import { Post } from '../../database/entities/post';

export class PostRepository {
  private readonly repository;

  constructor() {
    this.repository = dataSource.getRepository(Post);
  }

  public async one(id: number): AsyncResponse<Post> {
    return await this.repository.findOne({
      relations: ['categories'],
      where: {
        id,
      },
    });
  }

  public async all(): AsyncResponse<Post[]> {
    return await this.repository.find({ relations: ['categories'] });
  }

  public async create(data: Post): AsyncResponse<Post> {
    const post = this.repository.create(data);

    await this.repository.save(post);

    return this.one(post.id);
  }

  public async update(id: number, data: Post): AsyncResponse<Post> {
    await this.repository.update(id, data);
    return await this.one(id);
  }

  public async remove(id: number): AsyncResponse<unknown> {
    const currentPost = await this.one(id);
    if (currentPost) return await this.repository.remove(currentPost);
  }
}
