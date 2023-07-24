import dataSource from '../../data-source';
import { Post } from '../entities/post';

export class PostRepository {
  private readonly repository;

  constructor() {
    this.repository = dataSource.getRepository(Post);
  }

  public async one(id: number): Promise<any> {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  }

  public async all(): Promise<Post[]> {
    return await this.repository.find();
  }

  public async create(data: Post): Promise<Post> {
    return await this.repository.save(data);
  }

  public async update(id: number, data: Post): Promise<Post> {
    await this.repository.update(id, data);
    return await this.one(id);
  }

  public async remove(id: number): Promise<unknown> {
    const currentPost = await this.one(id);
    return await this.repository.remove(currentPost);
  }
}
