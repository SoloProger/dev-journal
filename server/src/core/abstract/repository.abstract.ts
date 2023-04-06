import { FindOptions, Model, Options } from "sequelize";

export abstract class AbstractRepository<T, Y> {
  protected abstract model: any;

  public abstract save(body: Y, id?: number): Promise<T>;

  public abstract getAll(options?: FindOptions): Promise<T>;

  public abstract getById(id: number, attribute?: string): Promise<T>;

  protected abstract update(body: Y, id: number, attribute?: string): Promise<T>;

  public abstract remove(id: number, attribute?: string): Promise<void>;
}
