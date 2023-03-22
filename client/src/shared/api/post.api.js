import axios from "axios";
import { env } from "../../env";

export default class PostApi {
  async getPosts(queryParams) {
    const posts = await axios.get(`${env.baseApi}/post`, {
      params: queryParams,
    });
    return posts.data;
  }

  async getPostById(id) {
    const post = await axios.get(`http://localhost:5000/post/${id}`);
    return post.data;
  }

  async createPost(body) {
    const post = await axios.post(`${env.baseApi}/post`, body);
    return post.data;
  }

  async updatePost(body, id) {
    const post = await axios.put(`${env.baseApi}/post/${id}`, body);
    return post.data;
  }

  async deletePost(id) {
    const post = await axios.delete(`${env.baseApi}/post/${id}`);
    return post.data;
  }
}
