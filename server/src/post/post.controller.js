const AbstractController = require("../core/abstract/controller.abstract");
const FileService = require("../core/base/file-service");
const PostService = require("./post.service");

class PostController extends AbstractController {
  #service;
  #fileService;

  constructor() {
    super();
    this.#service = PostService;
    this.#fileService = new FileService();
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.upload = this.upload.bind(this);
  }

  getAll(req, res) {
    if (req.query.recent) {
      const recentPost = this.#service.getRecentPosts();
      return recentPost;
    }
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

  upload(req, reply) {
    const result = this.#fileService.upload(req, reply);
    return result;
  }
}

module.exports = new PostController();
