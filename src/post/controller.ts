import { PostService } from './service';
import { Response } from 'express';

export class PostController {

  private readonly service: PostService;

  constructor() {
    this.service = new PostService();
    this.posts = this.posts.bind(this);
    this.post = this.post.bind(this);
  }

  public async post(request: any, response: any): Promise<Response> {
    const post = await this.service.getOne(request.param.id);
    return response.json({ message: 'success', data: post });
  }

  public async posts(request: any, response: any): Promise<Response> {
    const posts = await this.service.getAll();
    return response.json({ message: 'success', data: posts });
  }

  public async createPost(request: Request, response: Response): Promise<void> {

  }

  public async updatePost(request: Request, response: Response): Promise<void> {
  }

  public async deletePost(request: Request, response: Response): Promise<void> {
  }
}