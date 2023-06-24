import { PostRepository } from './repository';
import { Post } from '../entities/post';

export class PostService {

  public readonly repository: PostRepository;

  constructor() {
    this.repository = new PostRepository();
  }

  public async getAll(): Promise<Post[]> {
    return await this.repository.all();
  }

  public async getOne(id: number): Promise<Post> {
    return await this.repository.one(id);
  }

  public async create(data: any): Promise<Post> {
    return await this.repository.create(data);
  }

  public async update(id: number, data: any): Promise<Post> {
    return await this.repository.update(id, data);
  }

  public async delete(id: number): Promise<unknown> {
    return await this.repository.remove(id);
  }
}