import jwt from 'jsonwebtoken';

export class TokenService {
  // В будущем здесь будут генерироваться два токена
  public static generateToken<T>(payload: T): string {
    return this.token(payload);
  }

  public static validateToken(token: string): unknown {
    try {
      return this.check(token);
    } catch (error) {
      return null;
    }
  }

  private static token<T>(
    payload: T,
    secret = process.env.SECRET_KEY,
    time = '24h'
  ): string {
    return jwt.sign(payload as object, secret as string, {
      expiresIn: time,
    });
  }

  private static check(token: string): string | jwt.JwtPayload {
    return jwt.verify(token, process.env.SECRET_KEY as string);
  }
}
