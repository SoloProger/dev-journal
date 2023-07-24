import { Request, Response } from 'express';
import { CategoryService } from './service';

export class CategoryController {
  private readonly service: CategoryService;

  constructor() {
    this.service = new CategoryService();
    this.category = this.category.bind(this);
    this.categories = this.categories.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  public async category(
    request: Request,
    response: Response
  ): Promise<Response> {
    const category = await this.service.getOne(+request.params['id']);
    return response.json({ message: 'success', data: category });
  }

  public async categories(
    request: Request,
    response: Response
  ): Promise<Response> {
    const categories = await this.service.getAll();
    return response.json({ message: 'success', data: categories });
  }

  public async createCategory(
    request: Request,
    response: Response
  ): Promise<Response> {
    const createdCategory = await this.service.create(request.body);
    return response.json({ message: 'success', data: createdCategory });
  }

  public async updateCategory(
    request: Request,
    response: Response
  ): Promise<Response> {
    const updatedCategory = await this.service.update(
      +request.params['id'],
      request.body
    );
    return response.json({ message: 'success', data: updatedCategory });
  }

  public async deleteCategory(
    request: Request,
    response: Response
  ): Promise<Response> {
    await this.service.delete(+request.params['id']);
    return response.json({ message: 'success', data: 'Category was deleted' });
  }
}
