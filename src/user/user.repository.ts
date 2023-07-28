import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import dataSource from '../../data-source';
import { User } from '../../database/entities/user';

export class UserRepository {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  public async one(findOptions: FindOptionsWhere<User>) {
    return await this.repository.findOne({ where: findOptions });
  }

  public async all(options: FindManyOptions<User>) {
    return await this.repository.find(options);
  }

  public async add(user: User) {
    const post = this.repository.create(user);

    await this.repository.save(post);

    return this.one({ id: user.id });
  }
}
