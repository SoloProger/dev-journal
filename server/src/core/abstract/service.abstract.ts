import { AbstractRepository } from "./repository.abstract";

export abstract class AbstractService<T, Y> {
  protected abstract repository: AbstractRepository<T, Y>;

  public abstract getEntityList(): Promise<T>;

  public abstract getEntityById(id: number): Promise<T>;

  public abstract createEntity(body: Y): Promise<T>;

  public abstract updateEntity(body: Y, id: number): Promise<T>;

  public abstract removeEntity(id: number): Promise<void>;
}
