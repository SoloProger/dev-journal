const AbstractRepository = require("../core/abstract/repository.abstract");
const Post = require("./post");

class PostService {
  #repository;

  constructor() {
    this.#repository = new AbstractRepository(Post);
    this.getPosts = this.getPosts.bind(this);
  }

  async getPosts() {
    const posts = await this.#repository.getAll();
    return posts;
  }
}

module.exports = new PostService();
