import dataSource from '../../data-source';

export class PostRepository {
  private readonly repository;

  constructor(PostEntity) {
    this.repository = dataSource.getRepository(PostEntity);
  }
}