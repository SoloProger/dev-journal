import { NextFunction, Request, Response } from 'express';
import { AuthService } from './services/auth.service';
import { ResponseService } from '../../core/services/response.service';

export class AuthController {
  private readonly service: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  public async registration(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const result = await this.service.registration(request.body);
      return response.status(200).json(result);
    } catch (error) {
      ResponseService.controllerError(response, 500, 'Что-то пошло не так');
    }
  }

  public async login(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { login, password } = request.body;
      const result = await this.service.login(login, password);
      return response.status(200).json(result);
    } catch (error) {
      ResponseService.controllerError(response, 500, 'Что-то пошло не так');
    }
  }
}
