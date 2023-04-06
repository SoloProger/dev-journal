import { AbstractController } from "./controller.abstract";

export abstract class AbstractHandler<T> {
  protected abstract _app: any;
  protected abstract _path: string;
  protected abstract controller: AbstractController<T>;

  public abstract getAll(): void;

  public abstract getOne(): void;

  public abstract create(): void;

  public abstract update(): void;

  public abstract remove(): void;
}
