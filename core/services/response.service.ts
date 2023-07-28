import { Response } from 'express';

export class ResponseService {
  public static controllerSuccess<T>(
    res: Response,
    msg: string,
    data: T
  ): unknown {
    return res.status(200).json({ message: msg, data });
  }

  public static controllerError(
    res: Response,
    status: number,
    msg: string
  ): unknown {
    return res.status(status).json({ message: msg });
  }

  public static isExistInController(
    value: unknown,
    res: Response,
    status: number,
    msg: string
  ): void {
    if (!value) {
      this.controllerError(res, status, msg);
    }
  }

  public static checkInController(
    value: unknown,
    res: Response,
    status: number,
    msg: string
  ): void {
    if (value) {
      this.controllerError(res, status, msg);
    }
  }

  public static isExist(value: unknown, msg: string) {
    if (!value) {
      return Error(msg);
    }
  }

  public static check(value: unknown, msg: string) {
    if (value) {
      return Error(msg);
    }
  }
}
