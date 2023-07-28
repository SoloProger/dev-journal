import { NextFunction, Request, Response } from 'express';
import { ResponseService } from '../services/response.service';
import { TokenService } from '../../src/auth/services/token.service';

export function auth(request: any, response: Response, next: NextFunction) {
  if (request.method === 'OPTIONS') next();

  try {
    const authorizationHeader = request.headers.authorization;

    ResponseService.isExistInController(
      authorizationHeader,
      response,
      403,
      'Пользователь не авторизован'
    );

    const token = authorizationHeader.split(' ')[1];

    ResponseService.isExistInController(
      token,
      response,
      403,
      'Пользователь не авторизован'
    );

    const decodeData = TokenService.validateToken(token);

    ResponseService.isExistInController(
      decodeData,
      response,
      403,
      'Пользователь не авторизован'
    );

    request.user = decodeData;
    next();
  } catch (error) {
    ResponseService.controllerError(
      response,
      403,
      'Пользователь не авторизован'
    );
  }
}
