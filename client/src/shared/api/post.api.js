import axios from "axios";

export default class PostApi {
  async getPosts() {
    const posts = await axios.get("http://localhost:5000/post");
    return posts.data;
  }

  async getPostById() {}

  async createPost(body) {
    const post = await axios.post("http://localhost:5000/post", body);
    return post.data;
  }
}
