import { Request } from 'express';
import { User } from '../database/entities/user';
import { JwtPayload } from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user: any;
}
