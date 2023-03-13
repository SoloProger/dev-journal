class AbstractService {
  async getPosts() {}

  async getPostById(id) {}

  async createPost(body) {}

  async updatePost(body, id) {}

  async removePost(id) {}
}

module.exports = AbstractService;
