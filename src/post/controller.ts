import { PostService } from './service';
import { Request, Response } from 'express';

export class PostController {

  private readonly service: PostService;

  constructor() {
    this.service = new PostService();
    this.posts = this.posts.bind(this);
    this.post = this.post.bind(this);
    this.createPost = this.createPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  public async post(request: Request, response: Response): Promise<Response> {
    const post = await this.service.getOne(+request.params['id']);
    return response.json({ message: 'success', data: post });
  }

  public async posts(request: Request, response: Response): Promise<Response> {
    const posts = await this.service.getAll();
    return response.json({ message: 'success', data: posts });
  }

  public async createPost(request: Request, response: Response): Promise<Response> {
    const createdPost = await this.service.create(request.body);
    return response.json({ message: 'success', data: createdPost });
  }

  public async updatePost(request: Request, response: Response): Promise<Response> {
    const updatedPost = await this.service.update(+request.params['id'], request.body);
    return response.json({ message: 'success', data: updatedPost });
  }

  public async deletePost(request: Request, response: Response): Promise<Response> {
    await this.service.delete(+request.params['id']);
    return response.json({ message: 'success', data: 'Post was deleted' });
  }
}