import axios from "axios";
import { env } from "../../env";

export default class PostApi {
  async getPosts(queryParams) {
    const posts = await axios.get(`${env.baseApi}/post`, {
      params: queryParams,
    });
    return posts.data;
  }

  async getPostById() {}

  async createPost(body) {
    const post = await axios.post(`${env.baseApi}/post`, body);
    return post.data;
  }
}
