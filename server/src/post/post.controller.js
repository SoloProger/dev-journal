const AbstractController = require("../core/abstract/controller.abstract");
const PostService = require("./post.service");

class PostController extends AbstractController {
  service;

  constructor() {
    super();
    this.service = PostService;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  getAll(res, req) {
    const posts = this.service.getPosts();
    return posts;
  }

  async getOne(req, res) {
    return { getOne: "post1" };
  }

  async create(req, res) {
    return { create: { name: "Post" } };
  }

  async update(req, res) {
    return { update: { name: "Post 2" } };
  }

  async remove(req, res) {
    return { remove: "post" };
  }
}

module.exports = new PostController();
