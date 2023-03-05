const AbstractController = require("../core/abstract/controller.abstract");
const PostService = require("./post.service");

class PostController extends AbstractController {
  #service;

  constructor() {
    super();
    this.#service = PostService;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  getAll(req, res) {
    const posts = this.#service.getPosts();
    return posts;
  }

  getOne(req, res) {
    const post = this.#service.getPostById(req.params.id);
    return post;
  }

  create(req, res) {
    const post = this.#service.createPost(req.body);
    return post;
  }

  update(req, res) {
    const updatedPost = this.#service.updatePost(req.body, req.params.id);
    return updatedPost;
  }

  remove(req, res) {
    const removedPost = this.#service.removePost(req.params.id);
    return removedPost;
  }
}

module.exports = new PostController();
