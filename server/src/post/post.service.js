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

  async getPostById(id) {
    const post = await this.#repository.getById(id);
    return post;
  }

  async getRecentPosts() {
    const recentPosts = await this.#repository.getAll({
      limit: 2,
      order: [["createdAt", "DESC"]],
    });
    return recentPosts;
  }

  async createPost(body) {
    const result = await this.#repository.save(body);
    return result;
  }

  async updatePost(body, id) {
    const result = await this.#repository.update(body, id);
    return result;
  }

  async removePost(id) {
    const result = await this.#repository.remove(id);
    return result;
  }
}

module.exports = new PostService();
